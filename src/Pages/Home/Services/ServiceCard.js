import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, price, title, _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end mb npm n">
          <p className="text-orange-600 text-2xl">{price}</p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-sm btn-primary">CheckOut</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
