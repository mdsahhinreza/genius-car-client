import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import pars from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            src={person}
            className="rounded-lg shadow-2xl w-4/5 h-full"
            alt=""
          />
          <img
            src={pars}
            className="rounded-lg shadow-2xl absolute w-3/5 top-1/2 border-8 right-5"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-orange-600 text-2xl font-bold ">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-2 my-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
