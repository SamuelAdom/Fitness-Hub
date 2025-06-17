import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
const accordionData = [
  {
    title: (
      <span className="text-[#C6FF00] text-[18px] md:text-lg font-semibold">
        Hygiene Standards
      </span>
    ),
    content: (
      <p className="mb-2 text-white">
        We follow a strict daily cleaning schedule. All equipment is sanitized multiple times a day, and disinfectant wipes are available throughout the gym for member use.
      </p>
    ),
  },
  {
    title: (
      <span className="text-[#C6FF00] text-[18px] md:text-lg font-semibold">
        Certified Trainers
      </span>
    ),
    content: (
      <p className="mb-2 text-white">
        Yes, every trainer at FitnessHub is certified in their specialty and trained in first aid and CPR to ensure your workouts are both safe and effective.
      </p>
    ),
  },
  {
    title: (
      <span className="text-[#C6FF00] text-[18px] md:text-lg font-semibold">
        Equipment Safety
      </span>
    ),
    content: (
      <p className="mb-2 text-white">
        All members receive a safety orientation during sign-up. Clear instructions are posted near each machine, and staff are always nearby to assist.
      </p>
    ),
  },
  {
    title: (
      <span className="text-[#C6FF00] text-[18px] md:text-lg font-semibold">
        Safe Environment
      </span>
    ),
    content: (
      <p className="mb-2 text-white">
        We operate with a zero-tolerance policy toward harassment or unsafe behavior. Our staff monitor the floor regularly to ensure all members feel respected and secure.
      </p>
    ),
  },
];
  return (
    <div className="w-full" id="accordion">
      {accordionData.map((item, index) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border ${
                index !== accordionData.length - 1 ? 'border-b-0' : ''
              } border-gray-200 ${index === 0 ? 'rounded-t-xl' : ''}  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
              aria-expanded={openIndex === index}
            >
              <span>{item.title}</span>
              <svg
                className={`w-3 h-3 transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          {openIndex === index && (
            <div className="p-5 border border-gray-200 dark:border-gray-700 dark:transparent">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
