import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser, logOut, logIn } = useContext(AuthContext);

  const updateUserData = (name, email, password) => {
    updateUser(name)
      .then((result) => {
        console.log("Update Success");
      })
      .then((err) => console.log(err));
  };
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserData(name);
        logOut();
        logIn(email, password);
        form.reset();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero w-full my-5">
      <div className="hero-content gap-5 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUP" />
            </div>
          </form>
          <p className="my-1 py-3 text-center">
            Already have an account? Please{" "}
            <Link className="text-orange-600 font-bold" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
