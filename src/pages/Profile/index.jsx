import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import profile from "./default.png";
import { getOrders } from "../../Features/orderSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { orders, status } = useSelector((state) => state.orders);
  const [user, setUser] = React.useState(null);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  // Retrieve user from local storage
  const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  };

  // Call getUser
  useEffect(() => {
    getUser();
  }, [location]);

  // Format the member_since date to "YYYY-MM-DD"
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // filter with user.name & orders.user.name
  const filteredOrders = orders.filter((order) =>
    order.user.name.toLowerCase().includes(user?.name.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      {/* Profile Card */}
      <div className="w-full max-w-md bg-extra shadow-lg rounded-lg p-6">
        <div className="text-center mb-4">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={profile}
            alt="Profile Avatar"
          />
        </div>
        <div className="text-center text-2xl font-bold mb-1">
          {user?.name || "Guest User"}
        </div>
        <a
          href={`mailto:${user?.email}`}
          className=" flexCenter text-gray-500 mb-1"
        >
          {user?.email}
        </a>
        <div className="text-center text-gray-500 font-semibold uppercase">
          Type: {user?.role || "User"}
        </div>

        {/* Optional Profile Details */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Member Since:</span>
            <span>{formatDate(user?.member_since) || "2024-01-01"}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Account Status:</span>
            <span>Active</span>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="w-full max-w-4xl mt-10">
        <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>
        <div className="overflow-x-auto bg-extra shadow-lg rounded-lg">
          <table className="min-w-full ">
            <thead>
              <tr className="w-full bg-section ">
                <th className="py-3 px-6 text-left">Order ID</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders?.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.orderId} className="border-b">
                    <td className="py-3 px-6">{order._id}</td>
                    <td className="py-2 px-4 text-sm ">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 text-sm">
                      <span
                        className={`inline-block px-2 py-1 font-semibold text-sm rounded-full ${
                          order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.status === "Processing"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-sm ">
                      {order.totalPrice.toFixed(2)}TK
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-3 px-6 text-center">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
