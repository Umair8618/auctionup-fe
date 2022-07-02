import React from "react";

// import background from "../../assets/images/error-bg.png";
import background from "../assets/images/error-bg.png";
import bgImage from "../assets/images/error.png";

function Error() {
  return (
    <div
      className="error-section padding-top padding-bottom bg_img"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="error-wrapper">
          <div className="error-thumb">
            <img src={bgImage} alt="error" />
          </div>
          <h4 className="title">
            Return to the <a href="/">homepage</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Error;
