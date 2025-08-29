// app/components/CoreValues.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
  special?: boolean; // for the "More Services" CTA
}

const coreValues: CoreValue[] = [
  {
    title: "Excellence",
    description:
      "The markets in which we are active are experiencing growing competition, and our stakeholders now have a wide array of options. To achieve success and expansion, we must strive to excel in the services we provide, the quality of our products, and the condition of our facilities.",
    icon: (
      <path d="M12 2l2.39 4.85 5.35.78-3.87 3.77.91 5.32L12 14.9l-4.78 2.52.91-5.32-3.87-3.77 5.35-.78L12 2z" />
    ),
  },
  {
    title: "Integrity",
    description:
      "As a Payment Facilitation Platform situated in Pakistan, our prosperity hinges on the development of our merchants enabled by our exceptional services. Our stakeholders, customers, and society at large anticipate us to uphold elevated ethical values and professional benchmarks.",
    icon: (
      <path d="M12 2l8 4v6c0 5.25-3.25 10.74-8 12-4.75-1.26-8-6.75-8-12V6l8-4zM11 14l6-6-1.41-1.42L11 11.17 8.41 8.59 7 10l4 4z" />
    ),
  },
  {
    title: "Customer Focus",
    description:
      "We must gain a comprehensive understanding of our customers’ and merchants’ requirements and be prepared to tailor our products and services accordingly. Our primary commitment should always be to prioritize the satisfaction of our customers and merchants.",
    icon: (
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
    ),
  },
   {
    title: "More Services",
    description: "",
    icon: <></>,
    special: true,
  },
  {
    title: "Meritocracy",
    description:
      "We advocate providing opportunities and benefits to our employees based on their capabilities. We place value on recognizing accomplishments and offering top-tier career prospects to all.",
    icon: <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-3.5L6 22l1.5-8.5L2 9h7l3-7z" />,
  },
  {
    title: "Progressiveness",
    description:
      "We are firm believers in contributing to the progress of society by embracing enlightened work practices, pioneering new products and processes, and fostering an entrepreneurial spirit.",
    icon: (
      <path d="M12 2c-1.1 0-2 .9-2 2v7H7l5 5 5-5h-3V4c0-1.1-.9-2-2-2zm-7 18v2h14v-2H5z" />
    ),
  },
];

function CoreValueCard({ title, description, icon, special }: CoreValue) {
  if (special) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 rounded-2xl shadow-lg flex flex-col justify-center bg-[#38A2DF] items-center text-center"
      >
        <a
          href="#"
          className="inline-block font-mulish px-6 py-3 md:px-[20px] md:py-[14px] text-gray-900 rounded-[50px] text-xs md:text-[14px] font-semibold md:font-bold shadow hover:scale-95 transition-transform bg-[#fff] w-[55%] border"
        >
          More Services
        </a>
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
          Core Values and Principles: Driving Force Behind Our Mission and Growth
        </h2>
        <div className="flex justify-center">
          <p className="text-lg text-gray-700 mb-16 w-full lg:w-[45%]">
            “Rooted in our commitment to excellence, integrity, and
            customer-centricity, we strive to understand and cater to the
            evolving needs of our stakeholders. Our culture fosters
            meritocracy, encouraging growth and recognizing individual
            achievements while driving forward a progressive ethos that fuels
            innovation and societal advancement.”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coreValues.map((value, i) => (
            <CoreValueCard key={i} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}
