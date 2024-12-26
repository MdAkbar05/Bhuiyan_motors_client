import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/testimonials/1.png";
import img2 from "../../assets/testimonials/2.png";
import img3 from "../../assets/testimonials/3.png";

const Testimonials = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [window.innerWidth]);
  const data = [
    { image: img1, name: "John Doe", desc: "Excellent service and quality!" },
    {
      image: img2,
      name: "Jane Smith",
      desc: "Highly recommend Bhuiyan Motors!",
    },
    {
      image: img3,
      name: "Alice Johnson",
      desc: "Fast delivery and great support!",
    },
  ];

  const settings = {
    centerMode: true, // Enables center mode
    centerPadding: "50px", // Padding on the sides of the center slide
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 736 ? 1 : 3, // Number of slides visible
    slidesToScroll: 1,

    arrows: false,
  };

  return (
    <div id="testimonials" className="container mx-auto my-12 px-4">
      <h2 className="text-3xl text-center font-semibold py-8 uppercase">
        Testimonials
      </h2>
      <Slider {...settings} className="">
        {data.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-wrap md:flex-nowrap items-center justify-center  bg-extra p-6 rounded-lg shadow-md  space-y-4 transition-transform duration-500"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-24 h-24 object-cover shadow-lg mx-auto"
            />
            <h3 className="text-xl font-semibold text-white text-center">
              {testimonial.name}
            </h3>
            <p className="text-lightGray text-center italic">
              "{testimonial.desc}"
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
