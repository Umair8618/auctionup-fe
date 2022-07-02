import React from "react";

import background from "../../assets/images/banner/banner-bg-4.png";

const HeroSection1 = () => {
  return (
    <div className="hero-section style-2">
      {/* <div className="container">
        <ul className="breadcrumb">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/products">Pages</a>
          </li>
          <li>
            <span> Jewelry</span>
          </li>
        </ul>
      </div> */}
      <div
        className="bg_img hero-bg bottom_center"
        style={{ backgroundImage: `url(${background})` }}
        // data-background="assets/images/banner/hero-bg.png"
      />
    </div>
  );
};

export default HeroSection1;
