import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to calcle this order?"
    );
    if (proceed) {
      console.log("deleted");
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const leftOrder = orders.filter((order) => order._id !== id);
            setOrders(leftOrder);
          }
          console.log(data);
        });
    }
  };

  const handleStatusUpdate = (id) => {
    const proceed = window.confirm("Sure");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "Approved" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            const remailning = orders.filter((ord) => ord._id !== id);
            const approving = orders.find((ord) => ord._id === id);
            approving.status = "Approved";

            const newOrders = [...remailning, approving];
            setOrders(newOrders);
          }
        });
    }
  };
  return (
    <div>
      <h4>Orders{orders.length}</h4>
      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customar</th>
              <th>Service</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
