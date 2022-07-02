import React from "react";
import Header from "../components/Header/Header";
import HeroSection1 from "../components/HeroSection1/HeroSection1";
import Footer from "../components/Footer/Footer";
import DashboardAdminComp from "../components/DashboardAdminComp/DashboardAdminComp";

const DashboardAdmin = () => {
  return (
    <>
      <Header />
      <HeroSection1 />
      <DashboardAdminComp />
      <Footer />
    </>
  );
};

export default DashboardAdmin;
