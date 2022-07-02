import React from "react";
import Header from "../components/Header/Header";
import HeroSection1 from "../components/HeroSection1/HeroSection1";
import Footer from "../components/Footer/Footer";
import DashboardComp from "../components/DashboardComp/DashboardComp";

const Dashboard = () => {
  return (
    <>
      <Header />
      <HeroSection1 />
      <DashboardComp />
      <Footer />
    </>
  );
};

export default Dashboard;
