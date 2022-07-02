import React from "react";
import background from "../../assets/images/banner/banner-bg-2.png";
import bgImage2 from "../../assets/images/banner/banner-2.png";
import bannerShape from "../../assets/css/img/banner-shape-2.png";

const Banner = () => {
  return (
    // <section
    //   className="banner-section-2 bg_img"
    //   style={{ backgroundImage: `url(${background})` }}
    // >
    //   {/* <img src={bgImage} alt="banner" /> */}
    //   <div className="container">
    //     <div className="row align-items-center justify-content-between align-items-center">
    //       <div className="col-lg-6 col-xl-6">
    //         <div className="banner-content cl-white">
    //           <h5 className="cate">Next Generation Auction</h5>
    //           <h1 className="title">Find Your Next Deal!</h1>
    //           <p>
    //             Online Auction is where everyone goes to shop, sell,and give,
    //             while discovering variety and affordability.
    //           </p>
    //           <a href="#0" className="custom-button yellow btn-large">
    //             Get Started
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col-lg-6 col-xl-6 d-none d-lg-block">
    //         <div className="banner-thumb">
    //           <img src={bgImage2} alt="banner" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="banner-shape-2 d-none d-lg-block">
    //     <img src={bannerShape} alt="css" />
    //   </div>
    // </section>

    <section
      className="banner-section-2 bg_img"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-6">
            <div className="banner-content cl-white">
              <h5 className="cate">Next Generation Auction</h5>
              <h2 className="title">Find Your Next Deal!</h2>
              <p>
                Online Auction is where everyone goes to shop, sell,and give,
                while discovering variety and affordability.
              </p>
              <a href="/products" className="custom-button white btn-large">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 d-none d-lg-block">
            <div className="banner-thumb">
              {/* <img src="assets/images/banner/banner-2.png" alt="banner" /> */}
              <img src={bgImage2} alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-2 d-none d-lg-block">
        {/* <img src="assets/css/img/banner-shape-2.png" alt="css" /> */}

        {/* <img src={bannerShape} alt="css" /> */}
      </div>
    </section>
  );
};

export default Banner;
