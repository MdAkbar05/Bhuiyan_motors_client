import React from "react";
import brand from "../assets/brand.png";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white overflow-hidden">
      <footer className="container mx-auto p-8">
        {/* Topbar */}
        <div className="flex flex-wrap justify-between gap-8 p-4 border-b border-gray-600">
          {/* Branding */}
          <div className="space-y-4 ">
            <img
              src={brand} // Replace with actual logo path
              alt="Bhuiya Motors Logo"
              className="h-12 w-auto mr-3"
            />
            <div>
              <h3 className="font-bold text-lg mb-2">Bhuiya Motors</h3>
              <p>
                Delivering excellence in <br /> automotive services.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="">
            <h3 className="font-bold text-lg mb-3">Services</h3>
            <ul className="space-y-1">
              <li>Car Sales</li>
              <li>Repairs & Maintenance</li>
              <li>Financing</li>
              <li>Insurance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact & Subscribe */}
          <div className="">
            <h3 className="font-bold text-lg mb-3">Contact & Subscribe</h3>
            <p>123 Motor Avenue, Car City</p>
            <form className="mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded bg-gray-700 text-gray-300"
              />
              <button className="mt-2 w-full bg-green-600 p-2 rounded hover:bg-green-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
          <p>&copy; 2024 Bhuiya Motors. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://github.com/MdAkbar05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400"
            >
              Akbar Hossan
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
