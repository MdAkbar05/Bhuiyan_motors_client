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

const Layout = () => {
  return (
    <>
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
