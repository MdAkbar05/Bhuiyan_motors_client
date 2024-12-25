import React, { useState } from "react";
import HelmetPage from "../../components/Helmet";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("FAILED...", error);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <HelmetPage
        title="Bhuiyan Motors | Contact Us"
        desc="Get in touch with Bhuiyan Motors Shop for all your car parts needs"
        link="http://localhost:3000/contact"
      />
      <div className="container mx-auto p-4 ">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-textColor">Contact Us</h1>
          <p className="mt-4 text-lightGray">
            Have questions or need assistance? Feel free to reach out to us.
            We're here to help!
          </p>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get In Touch
            </h2>
            {success && (
              <p className="text-green-600 font-medium mb-4">
                Message sent successfully!
              </p>
            )}
            {error && <p className="text-red-600 font-medium mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 px-6 pt-6">
              Our Location
            </h2>
            <iframe
              className="w-full h-80"
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

export default Contact;
