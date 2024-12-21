// Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Features/userSlice";
import { toastMsg } from "../../utility/ToastMessage";

// import GoogleLogin from './GoogleLogin';
// import FacebookLogin from './FacebookLogin';

const Signup = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.users);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Signup logic here
    try {
      dispatch(registerUser(formData)).then((res) => {
        console.log("User response", res);
        // Redirect to login page
        if (res.type === "user/registerUser/fulfilled") {
          window.location.href = "/verify";
        } else {
          toastMsg("error", res.payload.message);
        }
      });
    } catch (error) {
      console.log("Error with registration", error);
    }
  };

  return (
    <div className="container mx-auto p-6 flex items-center justify-center bg-section-100">
      <div className="max-w-md w-full p-6 bg-secondary rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
            />
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Signup
          </button>
        </form>
        <p className="text-gray-600 text-sm mt-4 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p className="text-gray-600 text-sm mt-4 text-center">
          Or signup with:
        </p>
        <div className="flex justify-center mb-4">
          {/* <GoogleLogin />
          <FacebookLogin /> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
