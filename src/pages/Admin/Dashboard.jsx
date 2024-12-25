import React, { useState } from "react";
import {
  MdDashboard,
  MdAnalytics,
  MdProductionQuantityLimits,
  MdPeopleAlt,
  MdCategory,
  MdCircleNotifications,
  MdAdminPanelSettings,
  MdMessage,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md";
import { GiBuyCard } from "react-icons/gi";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaSellsy, FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/brand.png";

const DashboardRouter = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar collapse state
  const [isNightMode, setIsNightMode] = useState(false); // Day/Night mode state

  const toggleSidebar = () => setIsCollapsed(!isCollapsed); // Toggle sidebar
  const toggleTheme = () => setIsNightMode(!isNightMode); // Toggle theme

  const menu = [
    { label: "Overview", path: "/dashboard/dash", icon: <MdDashboard /> },
    // { label: "Analytics", path: "/dashboard/analytics", icon: <MdAnalytics /> },
  ];

  const management = [
    {
      label: "Products",
      path: "/dashboard/products",
      icon: <MdProductionQuantityLimits />,
    },
    { label: "Customers", path: "/dashboard/customers", icon: <MdPeopleAlt /> },
    { label: "Orders", path: "/dashboard/orders", icon: <GiBuyCard /> },
    {
      label: "Categories",
      path: "/dashboard/categories",
      icon: <MdCategory />,
    },
  ];

  const preferences = [
    {
      label: "Transactions",
      path: "/dashboard/transactions",
      icon: <AiOutlineTransaction />,
    },
    {
      label: "Notifications",
      path: "/dashboard/notifications",
      icon: <MdCircleNotifications />,
    },
    { label: "Messages", path: "/dashboard/messages", icon: <MdMessage /> },
    {
      label: "Settings",
      path: "/dashboard/settings",
      icon: <MdAdminPanelSettings />,
    },
  ];

  return (
    <div
      className={`flex h-screen transition-all duration-300 ${
        isNightMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`relative ${isCollapsed ? "w-16" : "w-64"} ${
          isNightMode
            ? "bg-blackBG-800 text-gray-300"
            : "bg-section text-blackBG"
        } transition-all duration-300 p-4 flex flex-col space-y-2`}
      >
        {/* Collapse Button */}
        <button
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-gray-600 rounded-full shadow-md text-white hover:bg-gray-400 transition-colors"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <MdArrowForward size={20} />
          ) : (
            <MdArrowBack size={20} />
          )}
        </button>

        {/* Logo */}
        {!isCollapsed && (
          <div className="flex items-center gap-1 mb-4">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 p-1 bg-secondaryBlack rounded-full"
            />
            <h1 className="text-xl font-bold font-serif uppercase">
              BM Motors
            </h1>
          </div>
        )}

        {/* Search Bar */}
        {!isCollapsed && (
          <div
            className={`flex gap-1 items-center ${
              isNightMode
                ? "bg-gray-700 text-gray-400"
                : "bg-gray-200 text-gray-600"
            } rounded-lg p-2`}
          >
            <FaSearch className="cursor-pointer" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none"
            />
          </div>
        )}

        {/* Menu Section */}
        <div className="space-y-2">
          {menu.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`flex items-center gap-2 p-2 rounded-lg text-sm hover:bg-gray-400 hover:text-black ${
                location.pathname === nav.path
                  ? isNightMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-300 text-black"
                  : ""
              }`}
              title={isCollapsed ? nav.label : ""}
            >
              {nav.icon}
              {!isCollapsed && <span>{nav.label}</span>}
            </Link>
          ))}
        </div>

        {/* Management Section */}
        <div className="space-y-2">
          <hr className="h-[1px] border-gray-600" />
          {management.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`flex items-center gap-2 p-2 rounded-lg text-sm hover:bg-gray-400 hover:text-black ${
                location.pathname === nav.path
                  ? isNightMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-300 text-black"
                  : ""
              }`}
              title={isCollapsed ? nav.label : ""}
            >
              {nav.icon}
              {!isCollapsed && <span>{nav.label}</span>}
            </Link>
          ))}
        </div>

        {/* Preferences Section */}
        <div className="space-y-2">
          <hr className="h-[1px] border-gray-600" />
          {preferences.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`flex items-center gap-2 p-2 rounded-lg text-sm hover:bg-gray-400 hover:text-black ${
                location.pathname === nav.path
                  ? isNightMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-300 text-black"
                  : ""
              }`}
              title={isCollapsed ? nav.label : ""}
            >
              {nav.icon}
              {!isCollapsed && <span>{nav.label}</span>}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 myBorder rounded-2xl mt-4 overflow-y-scroll">
        <div className="flex justify-between p-2">
          <h2 className="text-4xl font-semibold">
            E-commerce <span className="text-red-500">Dashboard</span>
          </h2>

          {/* Day/Night Mode Toggle */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 rounded-full ${
                isNightMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={toggleTheme}
            >
              {isNightMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              className={`p-2 rounded-full ${
                isNightMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <IoNotifications size={24} />
            </button>
          </div>
        </div>
        <hr className="h-[1px] border-gray-600" />
        <Outlet context={[isNightMode]} />
      </div>
    </div>
  );
};

export default DashboardRouter;
