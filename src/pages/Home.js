import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Cards from "../components/Cards/Cards";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Feature from "../components/Feature/Feature";
import How from "../components/How/How";
import CallIn from "../components/CallIn/CallIn";
import Feature1 from "../components/Feature1/Feature1";

function Home() {
  const [productData, setproductData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setproductData(res.data.products);
      console.log("data =", res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {/* <Feature /> */}
      <Feature data={productData} />
      <How />
      <CallIn />
      <Footer />
      {/* <HeroSection />
      <Cards />
      <Footer /> */}
    </>
  );
}

export default Home;
