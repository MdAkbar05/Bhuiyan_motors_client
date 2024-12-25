import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers } from "../../../../../features/userSlice";
import { getOrders } from "../../../../../Features/orderSlice";

const TopCustomers = () => {
  const [search, setSearch] = useState("");
  const [isNightMode] = useOutletContext();
  const dispatch = useDispatch();
  const { orders, status } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const customers = {};

  for (let i = 0; i < orders.length; i++) {
    customers[i] = orders[i]; // Assign index as the key and element as the value
  }

  const userOrderCount = {};

  orders.forEach((order) => {
    const userId = order.user._id;
    if (!userOrderCount[userId]) {
      userOrderCount[userId] = { name: order.user.name, totalOrders: 0 };
    }
    userOrderCount[userId].totalOrders += 1;
  });

  // Convert userOrderCount object to a separate array of objects
  let userOrderCountArray = Object.values(userOrderCount);

  // Filter customers based on search input
  userOrderCountArray = userOrderCountArray.filter((customer) =>
    customer?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={
        isNightMode
          ? "bg-secondaryBlack p-4 rounded-md min-w-60 w-6/12 space-y-4 py-6 cursor-pointer"
          : "bg-white drop-shadow-md p-4 rounded-md w-6/12 space-y-4 py-6 text-blackBG cursor-pointer"
      }
    >
      {/* Title and Search Bar */}
      <div className="flex items-center justify-between mb-4">
        <h2
          className={
            isNightMode
              ? "text-white text-lg font-bold"
              : "text-blackBG text-lg font-bold"
          }
        >
          Top Customers
        </h2>
        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={
            isNightMode
              ? "bg-gray-800 text-white p-2 rounded-md border border-gray-700"
              : "bg-gray-100 text-black p-2 rounded-md border border-gray-300"
          }
        />
      </div>

      {/* Customer List */}
      <div className="flex gap-2 flex-wrap">
        {userOrderCountArray.map((customer) => (
          <div
            key={customer?.name}
            className="flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {/* Customer Image */}
            <div className="size-8 rounded-full bg-slate-400 flexCenter">
              {(customer?.name).slice(0, 1)}
            </div>
            {/* Customer Details */}
            <div className="ml-4">
              <p
                className={
                  isNightMode
                    ? "text-white font-medium"
                    : "text-black font-medium"
                }
              >
                {customer?.name}
              </p>
              <p
                className={
                  isNightMode
                    ? "text-gray-400 text-sm"
                    : "text-gray-600 text-sm"
                }
              >
                Purchases: {customer.totalOrders}
              </p>
            </div>
          </div>
        ))}
        {userOrderCountArray.length === 0 && (
          <p
            className={
              isNightMode
                ? "text-gray-400 text-center"
                : "text-gray-600 text-center"
            }
          >
            No customers found.
          </p>
        )}
      </div>
    </div>
  );
};

export default TopCustomers;
