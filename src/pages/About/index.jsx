import React from "react";
import HelmetPage from "../../components/Helmet";

const About = () => {
  return (
    <>
      <HelmetPage
        title="Bhuiyan Motors | Abouts Page"
        desc="Get know the Bhuiyan Motors Shop and contact with us for necessary parts"
        link="http://localhost:3000/"
      />
      <div className="container mx-auto p-4 h-[70vh]">About</div>
    </>
  );
};

export default About;
