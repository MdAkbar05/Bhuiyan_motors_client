import React from "react";
import { Link } from "react-router-dom";
import freeShipping from "../../assets/free-shipping.png";
import cashOnDelivery from "../../assets/cash-on-delivery.png";
import ShockAbsorbers from "../../assets/Shock-absorbers.png";

const Specials = () => {
  return (
    <div id="Specials" className="container mx-auto my-8 space-y-6">
      {/* Here have a title and somes category with image and title design with tailwind and flexbox*/}
      {/* Example */}
      <h2 className="text-2xl text-center font-semibold py-4 uppercase">
        Why choose us?
      </h2>{" "}
      <div className="flex flex-wrap justify-center gap-4 ">
        <div className="flex flex-col items-center space-y-2 hover:scale-105 transition-all cursor-pointer ">
          <img src={freeShipping} alt="free shipping" className="size-5/6" />
          <h3 className="text-xl sm:font-normal md:font-semibold">
            Free Shipping
          </h3>
          <p className="sm:text-base md:text-lg">On orders over $99</p>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:scale-105 transition-all cursor-pointer ">
          <img
            src={cashOnDelivery}
            alt="cash on delivery"
            className="size-5/6"
          />
          <h3 className="text-xl sm:font-normal md:font-semibold">
            Cash on Delivery
          </h3>
          <p className="sm:text-base md:text-lg">
            All orders are delivered within 3-5 business days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specials;
