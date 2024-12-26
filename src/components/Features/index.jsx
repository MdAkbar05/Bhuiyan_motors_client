import React from "react";
// get all icon from react icon

import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
  // why choose us, some features data in array
  const features = [
    {
      icon: <FaCheckCircle />,
      title: "Fast Delivery",
      desc: "We deliver our products in 3-5 days",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Parts",
      desc: "We use only the best quality parts",
    },
    {
      icon: <FaCheckCircle />,
      title: "Customer Support",
      desc: "We provide 24/7 customer support",
    },
    {
      icon: <FaCheckCircle />,
      title: "Secure Payment",
      desc: "We use secure payment methods",
    },
  ];
  return (
    <div id="features" className="container mx-auto my-16 space-y-8  ">
      <h2 className="text-center text-2xl uppercase  font-semibold -mb-8">
        Why Bhuiyan Motors?
      </h2>
      <p className="text-center sm:text-base md:text-lg text-lightGray p-0">
        Our commitment to quality, customer satisfaction, and timely delivery is
        evident in every aspect of our business.
      </p>
      <div className="flexCenter flex-wrap gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" p-8 rounded-md drop-shadow-lg bg-extra space-y-2 hover:scale-105 transition-all cursor-pointer hover:shadow-lg "
          >
            <div className="flexCenter gap-2">
              <div className="flex items-center">{feature.icon}</div>
              <div className="text-xl uppercase font-medium">
                {feature.title}
              </div>
            </div>
            <div className="text-lightGray sm:text-base md:text-lg">
              {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
