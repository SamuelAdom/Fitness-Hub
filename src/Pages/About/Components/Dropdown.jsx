import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    key: "plans",
    label: "Transform Your Body",
    content: (
      <>
        <p className="text-[17px] md:text-lg">
         Explore a variety of fitness programs designed to meet your personal goals — whether you're building strength, burning fat, or staying flexible.
        </p>
        <ul className="space-y-2 mt-4 text-[17px] md:text-lg">
          {["Strength Training", "HIIT Workouts", "Cardio Routines", "Group Classes (Yoga, Zumba, etc.)"].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-cyan-400">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    key: "noinsurance",
    label: "Train with the Best",
    content: (
      <>
      <p className="text-[17px] md:text-lg">
   Get personalized support from certified coaches who will guide, motivate, and hold you accountable every step of the way.
      </p>
         <ul className="space-y-2 mt-4 text-[17px] md:text-lg">
          {["Meet the Trainers", "1-on-1 Coaching", "Tailored Workout Plans", "Nutrition Guidance"].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-cyan-400">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
      
    ),
  },
];

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div className="md:mt-10 max-w-3xl mx-auto p-6 bg-[#2C2C2C] text-white rounded-md shadow-md">
      {/* Tab Header */}
      <div className="flex flex-wrap border-b border-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 font-semibold transition-colors duration-300 ${
              activeTab === tab.key
                ? "text-[#C6FF00] border-b-2 border-[#C6FF00]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content with Animation */}
      <div className="mt-6 text-left text-sm leading-relaxed space-y-4 min-h-[150px]">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              tab.key === activeTab && (
                <motion.div
                  key={tab.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedTabs;
