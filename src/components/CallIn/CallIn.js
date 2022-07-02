import React from "react";
import background from "../../assets/images/call-in/call-bg.png";
const CallIn = () => {
  return (
    <section className="call-in-section padding-top">
      <div className="container">
        <div
          className="call-wrapper cl-white bg_img"
          style={{ backgroundImage: `url(${background})` }}
          //   data-background="assets/images/call-in/call-bg.png"
        >
          <div className="section-header">
            <h3 className="title">
              Register for Free &amp; Start Bidding Now!
            </h3>
            <p>From cars to diamonds to iPhones, we have it all.</p>
          </div>
          <a href="/register" className="custom-button white">
            Register
          </a>
          <a href="/login" className="custom-button">
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallIn;
