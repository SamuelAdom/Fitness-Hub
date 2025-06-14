import React from 'react';
import SendButton from './SendButton'

const ContactForm = () => {
  return (
    <div className=" container px-4 mx-auto relative left-15 mt-10 ">
      <div className="mx-auto">
        <div className="max-w-md mx-auto px-8 py-6 bg-transparent space-y-3">
         <h1 className=" text-4xl md:w-full md:text-4xl font-bold text-white ">
          {" "}
          <span className="border-b-4  border-[#C6FF00] pb-2 inline-block">
            CONTACT
          </span>
          <span className="text-[#C6FF00]"> US</span>{" "}
        </h1>
        <p className='text-white font-medium'>Fill in the form below to receive the hottest news and discounts information!</p>
          <form>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="name">Your Name</label>
              <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6FF00] transition duration-300" placeholder="Enter your name" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="email">Your Email</label>
              <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6FF00] transition duration-300" placeholder="Enter your email" name="email" id="email" type="email" />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="message">Your Message</label>
              <textarea className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6FF00] transition duration-300" rows={4} placeholder="Enter your message" name="message" id="message" defaultValue={""} />
            </div>
          <SendButton/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
