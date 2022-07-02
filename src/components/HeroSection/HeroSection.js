import React from "react";
import { RegisterButton } from "../Button/RegisterButton/RegisterButton";
import { LoginButton } from "../Button/LoginButton/LoginButton";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Welcome to Auction Up</h1>
      <p>Here you find product of your own choice!</p>
      <div className="hero-btns">
        <RegisterButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Create Your Account
        </RegisterButton>
        <LoginButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Already a user Log In
        </LoginButton>
      </div>
    </div>
  );
}

export default HeroSection;
