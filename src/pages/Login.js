import React from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection1 from "../components/HeroSection1/HeroSection1";
import LoginForm from "../components/LoginForm/LoginForm";

function Login() {
  return (
    <>
      <Header />
      <HeroSection1 />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
