import React from "react";
import Home from ".";
import Category from "../../components/Categories";
import Topbrand from "../../components/Top-brand";
import Testimonials from "../../components/Testimonials";
import Features from "../../components/Features";
import OurProducts from "../../components/OurProducts";
import Focus from "../../components/FocusingInfo";
import Specials from "../../components/Specials";
import Info from "../../components/BottomsAbouts";
import { useSelector } from "react-redux";
import ServerDown from "../../components/Server-down";

const Layout = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <>
      {/* if server off then call the ServerDown component  */}

      <Home />
      <Focus />
      <Features />
      <Category />
      <OurProducts />
      <Topbrand />
      <Specials />
      <Testimonials />
      <Info />
    </>
  );
};

export default Layout;
