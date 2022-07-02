import React from "react";
import AddItemComp from "../components/AddItemComp/AddItemComp";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection1 from "../components/HeroSection1/HeroSection1";

const AddItem = () => {
  return (
    <>
      <Header />
      <HeroSection1 />
      <AddItemComp />
      <Footer />
    </>
  );
};

export default AddItem;
