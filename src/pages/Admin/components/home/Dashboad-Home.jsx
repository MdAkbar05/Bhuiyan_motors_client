import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../features/userSlice";
import { getProducts } from "../../../../features/productSlice";
// import Charts from "./components/Charts";
import { getOrders } from "../../../../features/orderSlice";
import {
  FaCalendarTimes,
  FaDollarSign,
  FaDownload,
  FaInfo,
  FaUser,
} from "react-icons/fa";
import Charts from "./components/Charts";
import LineChart from "./components/LineChart";
import LineCharts from "./components/LineChart";
import PieCharts from "./components/PieCharts";
import TopCustomers from "./components/TopCustomers";
import CustomerReviews from "./components/Reviews";

const DashboardHome = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [isNightMode] = useOutletContext();
  console.log(isNightMode);

  const { users } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.orders);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()).then(() => {
      setTotalUsers(users?.length);
    });
    dispatch(getProducts()).then(() => {
      setTotalProducts(products?.length);
      let renvue = 0;
      products?.forEach((product) => {
        console.log(product.price);
        renvue += product.price;
      });
      setTotalRevenue(renvue);
    });
    dispatch(getOrders()).then(() => {
      setTotalOrders(orders?.length);
    });
  }, [dispatch, navigate, location]);

  return (
    <div className=" md:px-2 py-2 h-fit flex flex-col gap-8 w-full">
      {/* Date Export heading  */}
      <div className="flex justify-between item-center">
        <div
          className={
            isNightMode
              ? "text-lightGray text-sm font-medium myBorder rounded-md flexCenter gap-2"
              : "text-blackBG text-sm font-medium myBorder rounded-md flexCenter gap-2"
          }
        >
          <FaCalendarTimes /> {new Date().toLocaleDateString()}
        </div>
        {/* Stats Title */}
        <div
          className={
            isNightMode
              ? "text-lightGray text-sm font-medium myBorder rounded-md flexCenter gap-2 cursor-pointer"
              : "text-blackBG text-sm font-medium myBorder rounded-md flexCenter gap-2 cursor-pointer"
          }
        >
          <FaDownload /> Export
        </div>
      </div>
      {/* Stats Boxes */}
      <div className="flex items-center gap-6 flex-wrap">
        {/* Total Renvue */}
        <div
          className={
            isNightMode
              ? "bg-secondaryBlack p-4 rounded-md min-w-60 w-3/12 space-y-4 py-6"
              : "bg-white drop-shadow-md p-4 rounded-md w-3/12 space-y-4 py-6 text-blackBG"
          }
        >
          <div className="flex justify-between item-center ">
            <div className="flex gap-4">
              <div className="bg-blackBG rounded-full myBorderNoPad p-2">
                <FaUser color="white" />
              </div>
              <h2 className=" text-xl font-medium">Total Renvue</h2>
            </div>
            <div className=" rounded-full myBorderNoPad size-4 flexCenter">
              <FaInfo color="#9A7E6F" size={10} />
            </div>
          </div>
          <div className="font-medium text-xl">
            <span>{totalRevenue}TK</span>{" "}
            <span className="text-sm text-green-600">15% +</span>
          </div>
        </div>

        {/* Total Users */}
        <div
          className={
            isNightMode
              ? "bg-secondaryBlack p-4 rounded-md min-w-60 w-4/12 space-y-4 py-6"
              : "bg-white drop-shadow-md p-4 rounded-md w-4/12 space-y-4 py-6"
          }
        >
          <div className="flex justify-between item-center ">
            <div className="flex gap-4">
              <div className="bg-blackBG rounded-full myBorderNoPad p-2">
                <FaUser color="white" />
              </div>
              <h2 className=" text-xl font-medium">Total Users</h2>
            </div>
            <div className=" rounded-full myBorderNoPad size-4 flexCenter">
              <FaInfo color="#9A7E6F" size={10} />
            </div>
          </div>
          <div className=" font-medium text-xl">
            <span>
              {totalUsers} <sup>person</sup>{" "}
            </span>{" "}
            <span className="text-sm text-green-600">12% +</span>
          </div>
        </div>

        {/* Total Orders */}
        <div
          className={
            isNightMode
              ? "bg-secondaryBlack p-4 rounded-md min-w-60 w-4/12 space-y-4 py-6"
              : "bg-white drop-shadow-md  p-4 rounded-md w-4/12 space-y-4 py-6"
          }
        >
          <div className="flex justify-between item-center ">
            <div className="flex gap-4">
              <div className="bg-blackBG rounded-full myBorderNoPad p-2">
                <FaUser color="white" />
              </div>
              <h2 className=" text-xl font-medium">Total Orders</h2>
            </div>
            <div className=" rounded-full myBorderNoPad size-4 flexCenter">
              <FaInfo color="#9A7E6F" size={10} />
            </div>
          </div>
          <div className=" font-medium text-xl">
            <span>
              {totalOrders} <sup>ordered</sup>
            </span>{" "}
            <span className="text-sm text-green-600">12%+ last 7 days</span>
            <Link className="text-sm text-blue-600 ml-4" to="dashboard/orders">
              See more...
            </Link>
          </div>
        </div>

        <Charts />
        <PieCharts />
        <LineCharts />
        <TopCustomers />
        <CustomerReviews />
      </div>

      {/* Charts */}
    </div>
  );
};

export default DashboardHome;
