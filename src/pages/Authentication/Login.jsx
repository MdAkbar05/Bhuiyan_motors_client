// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Features/userSlice";
import { toastMsg } from "../../utility/ToastMessage";
// import GoogleLogin from "./GoogleLogin";
// import FacebookLogin from "./FacebookLogin";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(loginUser(formData)).then((res) => {
      console.log(res);
      if (res.type === "user/loginUser/rejected") {
        toastMsg("error", res.payload.message);
      } else {
        toastMsg("success", "Login successful");
        navigate("/");
      }
    });
  };
  return (
    <div className="h-[70vh] flex items-center justify-center bg-section-100">
      <div className="max-w-md w-full p-6 bg-secondary rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
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
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {status === "loading" ? "Logging" : "Login"}
          </button>
        </form>
        <p className="text-gray-600 text-center text-sm">
          Don't have an account? <Link to="/signup">Sing up</Link>
        </p>
        <p className="text-gray-600 text-sm mt-4">Or login with:</p>
        <div className="flex justify-center mb-4">
          {/* <GoogleLogin />
          <FacebookLogin /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
