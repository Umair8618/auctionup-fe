import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import axios, { Axios } from "axios";
import { useParams, useNavigate } from "react-router-dom";

import product1 from "../../assets/images/product/product1.png";
import product2 from "../../assets/images/product/product2.png";
import product3 from "../../assets/images/product/product3.png";
import product4 from "../../assets/images/product/product4.png";
import product5 from "../../assets/images/product/product5.png";
import product6 from "../../assets/images/product/product6.png";

import icon from "../../assets/images/product/search-icon.png";
import icon1 from "../../assets/images/product/icon1.png";
import icon2 from "../../assets/images/product/icon2.png";
import icon3 from "../../assets/images/product/icon3.png";

import description from "../../assets/images/product/tab1.png";
import CarouselCompo from "../CarouselCompo";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";

let IMAGES = [];

const ProductDetail = (props) => {
  const { sellerId } = props;

  let params = useParams();
  const navigate = useNavigate();

  const [products, setproducts] = useState(null);
  const [DiffDate, seteDiffDate] = useState(null);
  const [images, setImages] = useState(null);
  const [BidPrice, setBidPrice] = useState(null);
  const [BidData, setBidData] = useState(null);
  const [UserData, setUserData] = useState(null);

  const GetUserData = () => {
    axios
      .get("http://localhost:3000/user/" + localStorage.getItem("userId"))
      .then((res) => {
        console.log("Getting user data =", res);
        if (res.status == 200) {
          setUserData(res.data.user);
        }
      })
      .catch((error) => {
        console.log("error getting user data = ", error);
      });
  };

  const DataArrived = () => {
    setproducts(props.data);
    let s = new Date();
    let e = new Date(props.data.endDate);
    console.log("diff =", e.getDate().toString(), s.getDate().toString());
    if (e < s) {
      seteDiffDate(-1);
    } else {
      seteDiffDate(e.getDate() - s.getDate());
    }
    setImages(props.data.productImage);

    let tmp = [];
    let notfound = true;
    axios
      .get("http://localhost:3000/bid/get-bids")
      .then((res) => {
        // console.log("responsefefw =", res);
        if (res.status == 200) {
          res.data.bids.map((value, index) => {
            if (value.productId == params.id) {
              tmp.push(value);
              notfound = false;
            }
          });
          console.log("notfound ==", notfound);
          setBidData(notfound ? null : tmp);
        }
      })
      .catch((error) => {
        console.log("error getting bids = ", error);
      });

    console.log("tmp ===", tmp.length == 0);
  };
  console.log("biddata ==", BidData);
  if (props.data != null && products == null) {
    DataArrived();
  }

  console.log("params=", params.id);

  const AssignData = () => {
    setproducts(props.data);
  };

  const MakeBid = () => {
    if (BidPrice > products.basePrice) {
      let data = {
        productId: props.productID,
        userId: localStorage.getItem("userId"),
        price: BidPrice,
      };

      let adminData = {
        basePrice: BidPrice,
      };

      axios
        .post("http://localhost:3000/bid/add-bid", data)
        .then((res) => {
          console.log("res.data =", res.data);

          axios
            .post(
              "http://localhost:3000/products/admin/" + params.id,
              adminData
            )
            .then((response) => {
              if (response.data.status == 200) {
                alert("Bid Has Been Placed");
                window.location.reload();
              }
            })
            .catch((error) => {
              console.log("error in admin price update");
            });
        })
        .catch((error) => {
          console.log("error in Adding bid =", error);
        });
    } else {
      alert("Please Make A Bid Greater than :" + products.basePrice);
    }
  };

  const GotoTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (products == null) {
      AssignData();
      GetUserData();
    }
    GotoTop();
  }, [props.data]);

  return (
    <>
      {products == null ? (
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      ) : (
        <section className="product-details padding-bottom mt--240 mt-lg--440">
          <div className="container">
            <div className="product-details-slider-top-wrapper">
              <div className="product-details-slider Swiper" id="sync1">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#FFFFFF",
                    "--swiper-pagination-color": "#FFFFFF",
                  }}
                  zoom={true}
                  navigation={true}
                  autoplay
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Zoom, Navigation, Pagination]}
                  className="swiper"
                >
                  {Object.values(images).map((value, index) => (
                    <>
                      <SwiperSlide>
                        <div className="swiper-zoom-container">
                          <img
                            src={value}
                            alt="product"
                            style={{ width: 400, height: 400 }}
                          />
                        </div>
                      </SwiperSlide>
                    </>
                  ))}
                  {/* foiewj */}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-40-60-80">
              <div className="col-lg-8">
                <div className="product-details-content">
                  <div className="product-details-header">
                    <h2 className="title">{products.title}</h2>
                  </div>
                  {BidData == null ? (
                    <ul className="price-table mb-30">
                      <li className="header">
                        <h5 className="current">No Current Bid</h5>
                        {/* <h3 className="price">PKR {BidData[0].price}</h3> */}
                      </li>
                    </ul>
                  ) : (
                    <ul className="price-table mb-30">
                      <li className="header">
                        <h5 className="current">Current Bid</h5>
                        <h3 className="price">PKR {BidData[0].price}</h3>
                      </li>
                    </ul>
                  )}
                  {sellerId == localStorage.getItem("userId") ? (
                    ""
                  ) : (
                    <div className="product-bid-area">
                      {DiffDate >= 0 ? (
                        <div className="product-bid-form">
                          {localStorage.getItem("token") == null ? (
                            <a href="/login">Please Login To Submit A Bid</a>
                          ) : (
                            <>
                              <div className="search-icon">
                                <img src={icon} alt="product" />
                              </div>
                              <input
                                type="text"
                                onChange={(e) => setBidPrice(e.target.value)}
                                placeholder="Enter bid amount"
                              />
                              <button
                                type="submit"
                                onClick={MakeBid}
                                className="custom-button"
                              >
                                Submit a bid
                              </button>
                            </>
                          )}
                        </div>
                      ) : (
                        <>
                          Auction closed since{" "}
                          {props.data.endDate.split("-").reverse().join("-")}
                        </>
                      )}{" "}
                    </div>
                  )}{" "}
                  {products.basePrice > products.finalPrice ? (
                    <></>
                  ) : sellerId == localStorage.getItem("userId") ? (
                    ""
                  ) : (
                    <div className="buy-now-area">
                      <a href="#0" className="custom-button">
                        Buy Now: PKR {products.finalPrice}
                      </a>
                    </div>
                  )}{" "}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="product-sidebar-area">
                  <div className="product-single-sidebar mb-3">
                    <h6 className="title">Days Remaining For This Auction</h6>
                    <div className="countdown">
                      {/* {products.startDate.split("-").reverse().join("-")} */}
                      <div id="bid_counter1" />
                      <div id="bid_counter1">
                        {" "}
                        {DiffDate >= 0 ? DiffDate + " days" : "Auction Closed"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-tab-menu-area mb-40-60 mt-70-100">
            <div className="container">
              <ul className="product-tab-menu nav nav-tabs">
                <li>
                  <a className="active" data-toggle="tab">
                    <div className="thumb">
                      <img src={description} alt="product" />
                    </div>
                    <div className="content">About Product</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="details">
                <div className="tab-details-content">
                  <div className="header-area">
                    <h1 className="title ">{products.title}</h1>
                    <div className="item">
                      <h3 className="title ">{products.description}</h3>
                      <h5 className="subtitle"></h5>
                      <table className="product-info-table">
                        <tbody>
                          <tr>
                            <th>Category</th>
                            <td>{products.category}</td>
                          </tr>
                          <tr>
                            <th>Condition</th>
                            <td>{products.condition}</td>
                          </tr>
                          <tr>
                            <th>Model</th>
                            <td>{products.manufactureyear}</td>
                          </tr>
                          <tr>
                            <th>Color</th>
                            <td>{products.color}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="item">
                      <table className="product-info-table">
                        <h5 className="subtitle">
                          <span>Location Details</span>
                        </h5>

                        <tbody>
                          <tr>
                            <th>City</th>
                            <td>{products.city}</td>
                          </tr>
                          <tr>
                            <th>Street</th>
                            <td>{products.street}</td>
                          </tr>
                          <tr>
                            <th>Zip-Code</th>
                            <td>{products.zip}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="item">
                      <table className="product-info-table">
                        <h5 className="subtitle">
                          <span>Pricing Details</span>
                        </h5>

                        <tbody>
                          <tr>
                            <th>Base Price</th>
                            <td>{products.basePrice}</td>
                          </tr>
                          {products.basePrice > products.finalPrice ? (
                            <></>
                          ) : (
                            <tr>
                              <th>Final Price</th>
                              <td>{products.finalPrice}</td>
                            </tr>
                          )}{" "}
                        </tbody>
                      </table>
                    </div>
                    <div className="item">
                      <table className="product-info-table">
                        <h5 className="subtitle ">
                          <span>Starting and Ending Details</span>
                        </h5>

                        <tbody>
                          <tr>
                            <th>Start Date</th>
                            <td>
                              {products.startDate
                                .split("-")
                                .reverse()
                                .join("-")}
                            </td>
                          </tr>
                          <tr>
                            <th>End Date</th>
                            <td>
                              {products.endDate.split("-").reverse().join("-")}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
