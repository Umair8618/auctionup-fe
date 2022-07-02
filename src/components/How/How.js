import React from "react";

import background from "../../assets/images/auction/popular/popular-bg.png";

import how1 from "../../assets/images/how/how1.png";
import how2 from "../../assets/images/how/how2.png";
import how3 from "../../assets/images/how/how3.png";

const How = () => {
  return (
    <section className="how-video-section pos-rel">
      {/* <div
        className="popular-bg bg_img"
        style={{ backgroundImage: `url(${background})` }}
        // data-background="assets/images/auction/popular/popular-bg.png"
      /> */}
      {/* <div
        className="how-video-shape bg_img d-none d-md-block"
        data-background="assets/css/img/how-video.png"
      /> */}

      <div className="container">
        {/* <div className="how-video-wrapper">
          <div className="how-video-area">
            <a
              href="https://www.youtube.com/watch?v=Mj3QejzYZ70"
              className="popup"
            >
              <h5 className="title">Watch Our Videos</h5>
              <div className="video-button">
                <i className="flaticon-right-arrow-1" />
                <span />
                <span />
              </div>
            </a>
          </div>
        </div> */}
        <div className="how-wrapper section-bg shadow-style">
          <div className="section-header text-lg-left">
            <h2 className="title">How it works</h2>
            <p>Easy 3 steps to win</p>
          </div>
          <div className="row justify-content-center mb--40">
            <div className="col-md-6 col-lg-4">
              <div className="how-item">
                <div className="how-thumb">
                  <img src={how1} alt="how" />
                </div>
                <div className="how-content">
                  <h4 className="title">Sign Up</h4>
                  <p>No Credit Card Required</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="how-item">
                <div className="how-thumb">
                  <img src={how2} alt="how" />
                </div>
                <div className="how-content">
                  <h4 className="title">Bid</h4>
                  <p>Bidding is free Only pay if you win</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="how-item">
                <div className="how-thumb">
                  <img src={how3} alt="how" />
                </div>
                <div className="how-content">
                  <h4 className="title">Win</h4>
                  <p>Fun - Excitement - Great deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
