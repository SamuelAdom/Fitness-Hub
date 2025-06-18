import React from "react";
import { assets } from "../../assets/asset";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#393E41] text-white">
      <div className="flex flex-col p-3 md:pb-4 space-y-3.5">
        <h1 className=" text-4xl w-70 md:w-full md:text-4xl font-bold text-white ">
          {" "}
          <span className="border-b-4  border-[#C6FF00] pb-2 inline-block">
            Con
          </span>
          tact <span className="text-[#C6FF00]"> Details</span>{" "}
        </h1>
        <p className="text-sm md:text-lg w-90 leading-7  md:w-full">
          We’d love to hear from you! Whether you have questions about
          memberships, personal training, classes, or just want to say hello—our
          team is here to help.
        </p>
        <p className="text-[#C6FF00] text-2xl">Emergency Cases</p>
        <p className="text-lg">+233 54 589 2639</p>
        <p className="text-[#C6FF00] text-2xl">Email</p>
        <p className="text-lg">fitnesshub@info.com</p>
        <p className="text-[#C6FF00] text-2xl">Address</p>
        <p className="text-lg">Weija, Accra Road Ghana</p>
      </div>
      <div>
        <img className="h-full md:h-full md:w-full" src={assets.contact_image} />
      </div>
    </div>
  );
};

export default Contact;
