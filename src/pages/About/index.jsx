import React from "react";
import HelmetPage from "../../components/Helmet";

const About = () => {
  return (
    <>
      <HelmetPage
        title="Bhuiyan Motors | Abouts Page"
        desc="Get know the Bhuiyan Motors Shop and contact with us for necessary parts"
        link="http://localhost:3000/"
      />
      <div className="container mx-auto p-4 ">
        <div className="container mx-auto ">
          <div className="text-center mb-10">
            <h1 className="sm:text-xl md:text-2xl text-center font-semibold  pt-4 uppercase">
              About Bhuiya Motors Shop
            </h1>
            <p className="sm:text-base md:text-lg text-center text-lightGray   pb-4">
              Welcome to Bhuiya Motors Shop, your one-stop destination for
              quality car parts. We are committed to providing the best products
              and exceptional service to our customers.
            </p>
          </div>

          <div className="flex sm:flex-col md:flex-row justify-around items-center flex-wrap gap-2">
            {/* Mission Section */}
            <div className="bg-extra shadow-md rounded-lg p-6 mb-10 sm:w-auto md:w-5/12 h-auto flexCenter flex-col">
              <h2 className="text-2xl font-semibold text-textColor-800 mb-4">
                Our Mission
              </h2>
              <p className="text-lightGray ">
                At Bhuiya Motors Shop, our mission is to deliver premium car
                parts to meet all your automotive needs. We aim to ensure your
                vehicles run smoothly with reliable and high-quality components.
                Customer satisfaction is at the heart of everything we do.
              </p>
            </div>

            {/* Features Section */}
            <div className="bg-extra shadow-md rounded-lg p-6 mb-10 sm:w-auto md:w-5/12 h-auto   flexCenter flex-col">
              <h2 className="text-2xl font-semibold text-textColor mb-4">
                Our Features
              </h2>
              <ul className=" list-inside text-lightGray space-y-2 list-none">
                <li className="bg-extra p-1 rounded-lg">
                  High-quality car parts sourced from trusted manufacturers.
                </li>
                <li className="bg-extra p-1 rounded-lg">
                  Competitive pricing with excellent value for money.
                </li>
                <li className="bg-extra p-1 rounded-lg">
                  Fast and reliable shipping to your doorstep.
                </li>
                <li className="bg-extra p-1 rounded-lg">
                  Expert customer support for all your automotive needs.
                </li>
                <li className="bg-extra p-1 rounded-lg">
                  Easy-to-navigate online shop with secure checkout.
                </li>
              </ul>
            </div>

            {/* Contact Information Section */}
            <div className="bg-extra shadow-md rounded-lg p-6 mb-10 ">
              <h2 className="text-2xl font-semibold text-textColor mb-4 text-center">
                Contact Us
              </h2>
              <p className="text-lightGray mb-2">
                <strong>Address:</strong> 314 Sheik Mujib Road, Chumhuni,
                Chattagram Country
              </p>
              <p className="text-lightGray mb-2">
                <strong>Email:</strong> tonmoy2b@gmail.com
              </p>
              <p className="text-lightGray mb-2">
                <strong>Phone:</strong> +123 456 7890
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-extra shadow-md rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-textColor mb-4 px-6 pt-6">
              Our Location
            </h2>
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8367006891346!2d144.95592831531845!3d-37.81720997975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776964ef1e8b69!2sYour%20Business%20Address!5e0!3m2!1sen!2sbd!4v1692739328232!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
