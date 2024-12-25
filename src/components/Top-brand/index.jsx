import React from "react";
import brembo from "../../assets/topbrand/brembo.png";
import elofic from "../../assets/topbrand/elofic.png";
import exedy from "../../assets/topbrand/exedy.png";
import fag from "../../assets/topbrand/fag.png";
import mahindra from "../../assets/topbrand/mahindra.png";
import monroe from "../../assets/topbrand/monroe.png";
import talbros from "../../assets/topbrand/talbros.png";
import valeo from "../../assets/topbrand/valeo.png";
// Link import
import { Link } from "react-router-dom";

const Topbrand = () => {
  const topBrand = [
    { img: brembo, title: "brembo" },
    { img: elofic, title: "elofic" },
    { img: exedy, title: "exedy" },
    { img: fag, title: "fag" },
    { img: mahindra, title: "Mahindra" },
    { img: monroe, title: "Monroe" },
    { img: talbros, title: "Talbros" },
    { img: valeo, title: "Valeo" },
  ];
  const handleBrand = (title) => () => {
    console.log(`You have selected ${title} category`);
  };
  return (
    <div id="brand" className="container mx-auto my-8 space-y-6">
      {/* Here have a title and somes category with image and title design with tailwind and flexbox*/}
      {/* Example */}
      <h2 className="text-2xl text-center font-semibold py-4 uppercase">
        Top brand
      </h2>{" "}
      <div className="flex flex-wrap justify-center gap-2">
        {topBrand?.map((item) => (
          <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-all  "
            onClick={handleBrand(item.title)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full lg:h-60 md:h-44 sm:h-32"
            />
            <h3 className="text-lg uppercase text-slate-300 font-semibold">
              {item.title}
            </h3>
          </div>
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

export default Topbrand;
