import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection1 from "../components/HeroSection1/HeroSection1";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  let params = useParams();
  let location = useLocation();
  console.log("locaiton =", params.id);
  const [productDetailsData, setproductDetailsData] = useState(null);
  const [sellerId, setSellerId] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${params.id}`).then((res) => {
      setproductDetailsData(res.data.product);
      setSellerId(res.data.product.sellerId);
      console.log("data =", res.data.product.sellerId);
    });
  }, []);

  console.log("data =", productDetailsData);

  return (
    <>
      <Header />
      <HeroSection1 />
      <ProductDetail
        sellerId={sellerId}
        data={productDetailsData == null ? null : productDetailsData}
        productID={params.id}
      />
      <Footer />
    </>
  );
};

export default ProductDetails;
