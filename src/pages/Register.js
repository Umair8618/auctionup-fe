import React from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection1 from "../components/HeroSection1/HeroSection1";
import RegisterForm from "../components/RegisterForm/RegisterForm";

function Register() {
  return (
    <>
      <Header />
      <HeroSection1 />
      <RegisterForm />
      <Footer />
    </>
  );
}

export default Register;
