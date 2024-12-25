import React from "react";

const Info = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="bg-extra shadow-md rounded-lg p-6 mb-10  flexCenter flex-col">
        <h2 className="text-2xl font-semibold text-textColor mb-4">
          Contact Us
        </h2>
        <p className="text-lightGray mb-2">
          <strong>Address:</strong> 314, Tijarat Bhavan, Ground Floor,
          Chowmuhani, Sheikh Mujib Road, Agrabad, Chiattagong 4100
        </p>
        <p className="text-lightGray mb-2">
          <strong>Email:</strong> tonmoy2b@gmail.com
        </p>
        <p className="text-lightGray mb-2">
          <strong>Phone:</strong> +123 456 7890
        </p>
      </div>

      {/* Map Section */}
      <div className="bg-extra shadow-md rounded-lg overflow-hidden">
        <h2 className="text-2xl font-semibold text-textColor mb-4 px-6 pt-6">
          Our Location
        </h2>
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834.9253741506751!2d91.8116407695492!3d22.33510483922032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8c8025ac3c9%3A0x4208f57417a8d31e!2sM%2FS%20Bhuiyan%20Motors!5e1!3m2!1sen!2sbd!4v1735154691267!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Info;
