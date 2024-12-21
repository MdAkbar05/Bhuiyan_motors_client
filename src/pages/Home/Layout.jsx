import React from "react";
import Home from ".";
import Category from "../../components/Categories";
import Carmake from "../../components/Car-make";
import Topbrand from "../../components/Top-brand";
import Testimonials from "../../components/Testimonials";
import NidCard from "../../components/NID";
import Features from "../../components/Features";
import OurProducts from "../../components/OurProducts";
import Focus from "../../components/FocusingInfo";

const Layout = () => {
  return (
    <>
      <Home />
      <Focus />
      <Features />
      {/* <NidCard /> */}
      <Category />
      <OurProducts />
      <Carmake />
      <Topbrand />
      <Testimonials />
    </>
  );
};

export default Layout;
