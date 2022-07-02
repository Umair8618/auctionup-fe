import React, { useState } from "react";
import background from "../../assets/images/auction/featured/featured-bg-1.jpg";
import vehicle from "../../assets/images/auction/car/auction-1.jpg";
import jewelry from "../../assets/images/auction/jewelry/auction-2.jpg";
import watch from "../../assets/images/auction/watches/auction-2.jpg";

const Feature = (props) => {
  const [products, setproducts] = useState(null);

  console.log("products  =", props.data);

  const DataArrived = () => {
    setproducts(props.data);
  };

  if (props.data != null && products == null) {
    DataArrived();
  }
  return (
    <section
      className="feature-auction-section padding-bottom padding-top bg_img"
      style={{ backgroundImage: `url(${background})` }}
      //   data-background="assets/images/auction/featured/featured-bg-1.jpg"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="title">Featured Items</h2>
          <p>
            Bid and win great deals,Our auction process is simple, efficient,
            and transparent.
          </p>
        </div>
        <div className="row justify-content-center mb-30-none">
          {products == null ? (
            <></>
          ) : (
            products.map((value, index) =>
              index < 3 ? (
                <div key={index} className="col-sm-10 col-md-6 col-lg-4">
                  {console.log("value ==", value)}
                  <div className="auction-item-2">
                    <div className="auction-thumb">
                      <a href={"/productDetails/" + value._id}>
                        <img
                          style={{ width: 200, height: 200 }}
                          src={value.productImage[0]}
                          alt={value.category}
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href={"/productDetails/" + value._id}>
                          {value.title}
                        </a>
                      </h6>
                      <div className="bid-area">
                        <div className="bid-amount">
                          <div className="icon">
                            <i className="flaticon-auction" />
                          </div>
                          <div className="amount-content">
                            <div className="current">Current Bid</div>
                            <div className="amount">PKR {value.basePrice}</div>
                          </div>
                        </div>
                        <div className="bid-amount">
                          <div className="icon">
                            <i className="flaticon-money" />
                          </div>
                          <div className="amount-content">
                            <div className="current">Buy Now</div>
                            <div className="amount">PKR {value.finalPrice}</div>
                          </div>
                        </div>
                      </div>
                      <div className="bid-area">
                        <div className="bid-amount">
                          <div className="icon">
                            <i className="flaticon-date" />
                          </div>
                          <div className="amount-content">
                            <div className="current">Start Date</div>
                            <div className="amount">{value.startDate}</div>
                          </div>
                        </div>
                        <div className="bid-amount">
                          <div className="icon">
                            <i className="flaticon-date" />
                          </div>
                          <div className="amount-content">
                            <div className="current">End Date</div>
                            <div className="amount">{value.endDate}</div>
                          </div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        {/* <span className="total-bids">30 Bids</span> */}
                      </div>
                      <div className="text-center">
                        <a
                          href={"/productDetails/" + value._id}
                          className="custom-button"
                        >
                          Submit a bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )
          )}{" "}
          {/* <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="/productDetails">
                  <img src={jewelry1} alt="jewelry" />
                </a>
                <a href="#0" className="rating">
                  <i className="far fa-star" />
                </a>
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="/productDetails">Gold Ring With Clear Stones</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">PKR 8700</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">PKR 10000</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter23">0d: 12h: 60m: 60s</div>
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="row justify-content-center mb-30-none">
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="/productDetails">
                  <img src={vehicle} alt="vehicle" />
                </a>
                <a href="#0" className="rating">
                  <i className="far fa-star" />
                </a>
                <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a>
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="/productDetails">2018 Hyundai Sonata</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">
                        PKR <span>1760000</span>
                      </div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">PKR 5000000</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter23">0d: 12h: 60m: 60s</div>
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="/productDetails">
                  <img src={jewelry} alt="jewelry" />
                </a>
                <a href="#0" className="rating">
                  <i className="far fa-star" />
                </a>
                <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a>
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="/productDetails">Ring With Clear Stone Accents</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">PKR 8,700</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">PKR 15,000</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter23">0d: 12h: 60m: 60s</div>
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="/productDetails">
                  <img src={watch} alt="watch" />
                </a>
                <a href="#0" className="rating">
                  <i className="far fa-star" />
                </a>
                <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a>
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="/productDetails">Lady's Vintage Rolex</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">PKR 4000</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">PKR 10,000</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter23">0d: 12h: 60m: 60s</div>
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="load-wrapper">
          <a href="/products" className="normal-button">
            See All Auction
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feature;
