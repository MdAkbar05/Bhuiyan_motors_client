import React from "react";
// get all icon from react icon

import { FaFill } from "react-icons/fa";

const Focus = () => {
  // why choose us, some features data in array
  const features = [
    {
      icon: <FaFill />,
      title: "Satisfied clients",
      desc: "1560",
    },
    {
      icon: <FaFill />,
      title: "Excellent service",
      desc: " 85",
    },
    {
      icon: <FaFill />,
      title: "Parts in database",
      desc: " 5000",
    },
    {
      icon: <FaFill />,
      title: "District's we ship",
      desc: " 64",
    },
  ];
  return (
    <div
      id="features"
      className="container mx-auto md:-mt-12 sm:-mt-2 flexCenter flex-wrap md:gap-4 sm:gap-1 "
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className=" md:p-8 sm:p-2 md:py-12 sm:py-4 rounded-lg drop-shadow-xl backdrop-blur-lg bg-extra space-y-2"
        >
          <div className="text-white text-center md:text-3xl sm:text-lg font-semibold">
            {feature.desc}
          </div>
          <div className="flexCenter gap-2">
            <div className="sm:text-sm md:text-lg uppercase text-green-400 font-semibold">
              {feature.title}
            </div>
            <div className="flex items-center text-green-400">
              {feature.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Focus;
