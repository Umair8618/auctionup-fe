import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection1 from "../components/HeroSection1/HeroSection1";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import AdminProduct from "../components/AdminProduct/AdminProduct";

const adminProduct = () => {
  return (
    <>
      <Header />
      <HeroSection1 />
      <AdminProduct />
      <Footer />
    </>
  );
};

export default adminProduct;
