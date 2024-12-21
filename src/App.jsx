// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Products from "./pages/Products";
import Verify from "./pages/Authentication/Verify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
import Layout from "./pages/Home/Layout";
import SearchPage from "./components/SearchPage";
import CurrentProduct from "./pages/Products/currentProduct";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import DashboardRouter from "./pages/Admin/Dashboard";
import Orders from "./pages/Admin/components/orders/Orders";
import Checkout from "./pages/Checkout";
import DashboardHome from "./pages/Admin/components/home/Dashboad-Home";
import Customers from "./pages/Admin/components/customers/Customers";
import AdminProducts from "./pages/Admin/components/products/Products";
import EditProduct from "./pages/Admin/components/products/EditProduct";
import AddProduct from "./pages/Admin/components/products/AddProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <ToastContainer position="bottom-right" theme="dark" />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/current-product" element={<CurrentProduct />} />
        {/* <Route path="*" element={<NotFound />} />{" "} */}
        {/* Catch-all route for 404 */}
        {/* Authenticatins  */}

        {/* Protecting Dashboard routes */}
        <Route
          path="/dashboard/*"
          element={
            <AuthRoute>
              <DashboardRouter />
            </AuthRoute>
          }
        >
          {/* Nested route */}
          <Route path="dash" element={<DashboardHome />} />{" "}
          {/* 
          <Route path="analytics" element={<Analytics />} />
          <Route path="sales" element={<Sales />} />
          <Route path="users" element={<Users />} />*/}
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/edit/:productId" element={<EditProduct />} />
          <Route path="products/new/" element={<AddProduct />} />
          <Route path="customers" element={<Customers />} />
          <Route path="Orders" element={<Orders />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
