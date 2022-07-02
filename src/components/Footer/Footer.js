import React from "react";
import "./Footer.css";
import background from "../../assets/images/footer/footer-bg.jpg";
import footerTopShape from "../../assets/css/img/footer-top-shape.png";
import newsLatterThumb from "../../assets/images/footer/newslater.png";

import logo from "../../assets/logo/logo.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg_img padding-top oh"
      style={{ backgroundImage: `url(${background})` }}
      // data-background="assets/images/footer/footer-bg.jpg"
    >
      <div className="footer-top-shape">
        <img src={footerTopShape} alt="css" />
      </div>
      <div className="newslater-wrapper">
        <div className="container">
          <div className="newslater-area">
            <div className="newslater-thumb">
              <img src={newsLatterThumb} alt="footer" />
            </div>
            <div className="newslater-content">
              <div className="section-header left-style mb-low">
                <h5 className="cate">Subscribe to Auction Up</h5>
                <h3 className="title">To Get Exclusive Benefits</h3>
              </div>
              <form className="subscribe-form">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                />
                <button type="submit" className="custom-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright-area">
            <div className="footer-bottom-wrapper">
              <div className="copyright">
                <p>
                  © Copyright 2021 | By <a href="/home">Auction Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
