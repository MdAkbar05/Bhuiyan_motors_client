import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { verifyUser } from "../../Features/userSlice";
import { toastMsg } from "../../utility/ToastMessage";

const Verify = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    // Send OTP to the entered email and verify it
    // If verified, redirect to dashboard else show error message
    try {
      dispatch(verifyUser(otp)).then((res) => {
        console.log(res);
        if (res.type === "user/verifyUser/fulfilled") {
          // Redirect to dashboard
          toastMsg("success", "User registered successfully");
          window.location.href = "/";
        } else {
          // Show error message
          toastMsg("error", "Failed to verify user");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-6 flex items-center justify-center bg-section-100 h-[90vh]">
      <div className="max-w-md w-full p-6 bg-secondary rounded shadow-md">
        <h1 className="text-3xl font-bold text-center">Email Verification</h1>
        <p className="mt-4 text-center text-gray-600">
          We've sent a verification link to your email address. Please check
          your inbox and click the link to complete the registration process.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="otp"
            >
              OTP Verififcation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              name="otp"
              placeholder="OTP"
            />
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Verify
          </button>
          <Link to="/login" className="text-primary hover:underline">
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Verify;
