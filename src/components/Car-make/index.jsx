import React from "react";
import { Link } from "react-router-dom";

const Carmake = () => {
  const carmakes = [
    { name: "Nissan", icon: null },
    { name: "Renauit", icon: null },
    { name: "Skoda", icon: null },
    { name: "Datsun", icon: null },
    { name: "Fiat", icon: null },
    { name: "Ford", icon: null },
    { name: "Audi", icon: null },
    { name: "BMW", icon: null },
    { name: "Chevrolet", icon: null },
    { name: "Tata", icon: null },
    { name: "Toyota", icon: null },
    { name: "Honda", icon: null },
    { name: "Mahindra", icon: null },
    { name: "Maruti", icon: null },
    { name: "Hyundai", icon: null },
    { name: "Mercedes", icon: null },
  ];
  const handleCarmake = (title) => () => {
    console.log(`You have selected ${title} category`);
  };
  return (
    <div id="carmake" className="container mx-auto my-8 space-y-6">
      {/* Here have a title and somes category with image and title design with tailwind and flexbox*/}
      {/* Example */}
      <h2 className="text-2xl text-center font-semibold py-4 uppercase">
        Carmakes
      </h2>{" "}
      <div className="flex flex-wrap justify-center gap-4 mx-24">
        {carmakes?.map((carmake) => (
          <li className="cursor-pointer list-none py-1 px-3 w-28 text-center bg-[#D9D9D9] text-black rounded-xl shadow-md">
            {carmake.name}
          </li>
        ))}
      </div>
      {/* Show more button  */}
      <div className="flex justify-center">
        <Link
          to="/product"
          className="px-4 py-2 text-white border-b-[.5px] hover:bg-primary-dark"
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default Carmake;
