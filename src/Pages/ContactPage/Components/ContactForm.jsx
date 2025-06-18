import React from "react";

const Form = () => {
  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="relative px-4 py-10 bg-transparent mx-8 md:mx-0 shadow  sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                className="font-semibold text-sm text-white pb-1 block"
                htmlFor="fullname"
              >
                Full Name
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="text"
                id="fullname"
              />
            </div>
            <div>
              <label
                className="font-semibold text-sm text-white  pb-1 block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm text-white w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                className="font-semibold text-sm text-white pb-1 block"
                htmlFor="date"
              >
                Date
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-white text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="date"
                id="date"
              />
            </div>
            <div>
              <label
                className="font-semibold text-sm text-white  pb-1 block"
                htmlFor="specialist"
              >
                Select Service{" "}
              </label>
              <select
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm text-white w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                id="specialist"
              >
                <option className="text-black" value="fitness">Fitness</option>
                <option className="text-black" value="gym">GYM</option>
                <option className="text-black" value="powerlifting">Powerlifting</option>
                <option className="text-black" value="circuit">Circuit</option>
                <option className="text-black" value="bootcamp">Boot Camp</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div></div>
          </div>
          <div className="mt-5">
            <button
              className="py-2 px-4 bg-blue-600 lg:hover:bg-[#C6FF00] lg:hover:text-black focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
              type="submit"
            >
              SEND REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
