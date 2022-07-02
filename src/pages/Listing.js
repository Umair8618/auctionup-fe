import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection1 from "../components/HeroSection1/HeroSection1";
import ListingComp from "../components/ListingComp/ListingComp";

const Listing = () => {
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
      <ListingComp data={productData} />
      <Footer />
    </>
  );
};

export default Listing;
