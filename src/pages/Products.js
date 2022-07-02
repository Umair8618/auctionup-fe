import React, { useEffect, useState } from "react";
import "../App.css";

import Cards from "../components/Cards/Cards";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Feature from "../components/Feature/Feature";
import Banner from "../components/Banner/Banner";
import HeroSection1 from "../components/HeroSection1/HeroSection1";
import Feature1 from "../components/Feature1/Feature1";
import Auction from "../components/Auction/Auction";
import axios from "axios";

function Products() {
  const [productData, setproductData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setproductData(res.data.products);
      // console.log("data =", res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <HeroSection1 />
      <Feature1 data={productData} />
      <Auction data={productData} />
      <Footer />
      {/* <Banner /> */}
      {/* <Feature /> */}
      {/* <Cards />
      <Footer /> */}
    </>
  );
}

export default Products;
