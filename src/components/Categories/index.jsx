import React from "react";
import brakePads from "../../assets/category/brake-pads.png";
import brakeShoes from "../../assets/category/brake-shoes.png";
import clutch from "../../assets/category/clutch-set.png";
import discRotors from "../../assets/category/disc-rotors.png";
import filters from "../../assets/category/filters.png";
import sparkPlug from "../../assets/category/spark-plug.png";

const Category = () => {
  const categories = [
    { img: brakePads, title: "Brake Pads" },
    { img: brakeShoes, title: "Brake Shoes" },
    { img: clutch, title: "Clutch Set" },
    { img: discRotors, title: "Disc Rotors" },
    { img: filters, title: "Filters" },
    { img: sparkPlug, title: "Spark Plug" },
  ];
  const handleCategories = (title) => () => {
    console.log(`You have selected ${title} category`);
  };
  return (
    <div id="category" className="container mx-auto py-8  ">
      {/* Here have a title and somes category with image and title design with tailwind and flexbox*/}
      {/* Example */}
      <h2 className="text-2xl text-center font-semibold  pt-4 uppercase">
        Categories
      </h2>{" "}
      <p className="text-lg text-center text-lightGray   pb-4">
        Select a category to see related products. The products are organized
      </p>{" "}
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {categories?.map((category) => (
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={handleCategories(category.title)}
          >
            <img
              src={category.img}
              alt={category.title}
              className="object-cover w-full lg:h-60 md:h-44 sm:h-32"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
