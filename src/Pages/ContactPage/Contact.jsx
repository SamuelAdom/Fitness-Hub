import React from "react";
import { assets } from "../../assets/asset";
import Card from "./Components/Card";
import ContactForm from './Components/ContactForm'
import { HelpingHand, DollarSign, CalendarCheck } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Contact = () => {
  return (
    <>
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
            memberships, personal training, classes, or just want to say
            hello—our team is here to help.
          </p>
          <p className="text-[#C6FF00] text-2xl">Emergency Cases</p>
          <p className="text-lg">+233 54 589 2639</p>
          <p className="text-[#C6FF00] text-2xl">Email</p>
          <p className="text-lg">fitnesshub@info.com</p>
          <p className="text-[#C6FF00] text-2xl">Address</p>
          <p className="text-lg">Weija, Accra Road Ghana</p>
        </div>
        <div>
          <img
            className="h-full md:h-full md:w-full"
            src={assets.contact_image}
          />
        </div>
      </div>
      <div className="flex flex-col items-center md:gap-4 bg-gray-800 sm:flex-row sm:justify-center">
        <Card
          icon={<HelpingHand />}
          title="Personal Guidance"
          description="Get expert advice tailored to your fitness level and goals—no more guessing your way around the gym."
        />
        <Card
          icon={<DollarSign />}
          title="Membership Info"
          description="Understand pricing options, discounts, and what plan best fits your lifestyle and training goals."
        />
        <Card
          icon={<CalendarCheck />}
          title="Book a Tour"
          description="Schedule a tour of our facility to see our modern equipment and welcoming environment before signing up."
        />
      </div>
      <div className="bg-[#393E41] grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
         <DotLottieReact
      src="https://lottie.host/5bdbb23c-83c5-466d-a1c4-42ff81680425/HoqrsSOWvk.lottie"
      loop
      autoplay
    />
        </div>
      
        <ContactForm/>
  
      
      </div>
      
    </>
  );
};

export default Contact;
