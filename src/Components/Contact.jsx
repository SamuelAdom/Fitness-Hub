import React from "react";
import { assets } from "../assets/asset";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 bg-[#393E41] overflow-x-hidden relative bottom-10 md:bottom-0">
      <div className="flex items-center p-10">
        <h1 className="text-white text-6xl font-extrabold leading-24">LIFT HEAVY, LIVE LIGHT.</h1>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
