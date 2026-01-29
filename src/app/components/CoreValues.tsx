// app/components/CoreValues.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
  special?: boolean; // for the "More Services" CTA
}

const initialCoreValues: CoreValue[] = [
  {
    title: "Excellence",
    description:
      "We strive to deliver the highest quality services and products, ensuring our merchants and stakeholders experience unparalleled reliability and value.",
    icon: (
      <path d="M12 2l2.39 4.85 5.35.78-3.87 3.77.91 5.32L12 14.9l-4.78 2.52.91-5.32-3.87-3.77 5.35-.78L12 2z" />
    ),
  },
  {
    title: "Integrity",
    description:
      "Ethical conduct and transparency guide every decision we make. We uphold professional standards that earn trust from our merchants, customers, and society.",
    icon: (
      <path d="M12 2l8 4v6c0 5.25-3.25 10.74-8 12-4.75-1.26-8-6.75-8-12V6l8-4zM11 14l6-6-1.41-1.42L11 11.17 8.41 8.59 7 10l4 4z" />
    ),
  },
  {
    title: "Customer Focus",
    description:
      "Understanding our merchants' and customers' needs is central to everything we do. Our solutions are designed to simplify payments and enhance satisfaction.",
    icon: (
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
    ),
  },
  {
    title: "Meritocracy",
    description:
      "We reward talent, hard work, and achievement. Opportunities and growth are earned based on performance and potential.",
    icon: <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-3.5L6 22l1.5-8.5L2 9h7l3-7z" />,
  },
  {
    title: "Progressiveness",
    description:
      "We embrace innovation, continuous learning, and forward-thinking practices to foster growth for our business, community, and partners.",
    icon: (
      <path d="M12 2c-1.1 0-2 .9-2 2v7H7l5 5 5-5h-3V4c0-1.1-.9-2-2-2zm-7 18v2h14v-2H5z" />
    ),
  },
  {
    title: "More Services",
    description: "",
    icon: <></>,
    special: true,
  },
];

const additionalCoreValues: CoreValue[] = [
  {
    title: "Innovation",
    description:
      "We constantly explore new technologies and approaches to stay ahead in the payment industry, delivering cutting-edge solutions to our partners.",
    icon: (
      <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0c1.36-1.35 2.04-3.16 2.04-4.95h2c0 1.98-.78 3.95-2.34 5.51-3.12 3.12-8.19 3.12-11.31 0-3.12-3.12-3.12-8.19 0-11.31 3.12-3.12 8.19-3.12 11.31 0l3.08-3.07V2.12h6v8z" />
    ),
  },
  {
    title: "Collaboration",
    description:
      "We believe in working together across teams and with our partners to achieve shared success and create greater value for everyone involved.",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
  },
  {
    title: "Transparency",
    description:
      "We maintain open and honest communication with all stakeholders, ensuring clarity in our operations, pricing, and decision-making processes.",
    icon: (
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    ),
  },
  {
    title: "Sustainability",
    description:
      "We are committed to building long-term value while considering the environmental and social impact of our business practices.",
    icon: (
      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zM12 5.83L15.93 15.5l-3.93-1.88L8.07 15.5 12 5.83z" />
    ),
  },
];

function CoreValueCard({ title, description, icon, special, onClick }: CoreValue & { onClick?: () => void }) {
  if (special) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 rounded-2xl shadow-lg flex flex-col justify-center bg-[#38A2DF] items-center text-center cursor-pointer"
        onClick={onClick}
      >
        <button className="inline-block font-mulish px-6 py-3 md:px-[20px] md:py-[14px] text-gray-900 rounded-[50px] text-xs md:text-[14px] font-semibold md:font-bold shadow hover:scale-95 transition-transform bg-[#fff] w-[55%] border">
          More Services
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-8 pt-14 rounded-[40px] shadow-lg flex flex-col border border-[#DED7E9] text-left"
    >
      <div className="absolute -top-8 left-6 w-16 h-16 flex items-center justify-center rounded-full bg-[#38A2DF] shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-[22px] font-semibold mb-4 text-[#1A043F]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function CoreValues() {
  const [showAllValues, setShowAllValues] = useState(false);
  const [displayedValues, setDisplayedValues] = useState(initialCoreValues);

  const handleMoreServicesClick = () => {
    setShowAllValues(true);
    // Remove the "More Services" card and add the additional cards
    setDisplayedValues([
      ...initialCoreValues.filter(value => !value.special),
      ...additionalCoreValues
    ]);
  };

  return (
    <section className="relative w-full py-20 font-mulish">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2">
          <span className="w-4 h-4 md:w-5 md:h-5">
            <svg
              aria-hidden="true"
              className="w-4 h-4 md:w-5 md:h-5 text-[#38a2df]"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M256 56c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56m0-48C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 168c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"
              />
            </svg>
          </span>
          <span className="font-bold text-[18px] text-[#1A043F]">
            About Company
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2 text-[#1A043F]">
          Core Values That Drive Purpose Technologies
        </h2>
        <div className="flex justify-center">
          <p className="text-lg text-gray-700 mb-16 w-full lg:w-[45%]">
            "At Purpose Technologies, our foundation is built on excellence, integrity, and a customer-first approach. We cultivate a culture of meritocracy, celebrate achievement, and champion innovation to deliver cutting-edge payment solutions that empower merchants and society alike."
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${showAllValues ? 'md:grid-cols-3' : ''}`}>
          {displayedValues.map((value, i) => (
            <CoreValueCard 
              key={i} 
              {...value} 
              onClick={value.special ? handleMoreServicesClick : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}