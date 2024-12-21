import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const customers = [
  {
    id: 1,
    name: "John Doe",
    purchases: 15,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    purchases: 12,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Sam Wilson",
    purchases: 10,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "Lisa Brown",
    purchases: 8,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "Mark Johnson",
    purchases: 7,
    image: "https://via.placeholder.com/50",
  },
];

const TopCustomers = () => {
  const [search, setSearch] = useState("");
  const [isNightMode] = useOutletContext();

  // Filter customers based on search input
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
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
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {/* Customer Image */}
            <img
              src={customer.image}
              alt={`${customer.name}'s profile`}
              className="w-12 h-12 rounded-full"
            />
            {/* Customer Details */}
            <div className="ml-4">
              <p
                className={
                  isNightMode
                    ? "text-white font-medium"
                    : "text-black font-medium"
                }
              >
                {customer.name}
              </p>
              <p
                className={
                  isNightMode
                    ? "text-gray-400 text-sm"
                    : "text-gray-600 text-sm"
                }
              >
                Purchases: {customer.purchases}
              </p>
            </div>
          </div>
        ))}
        {filteredCustomers.length === 0 && (
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
