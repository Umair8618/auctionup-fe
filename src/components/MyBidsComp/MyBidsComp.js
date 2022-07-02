import React, { useEffect, useState } from "react";
import user from "../../assets/images/dashboard/user.png";

import product from "../../assets/images/auction/car/auction-1.jpg";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import axios from "axios";
const MyBidsComp = () => {
  const [AllProduct, setAllProduct] = useState(null);
  const [AllBids, setAllBids] = useState(null);
  const [MyBidsData, setMyBidsData] = useState(null);

  const GetData = () => {
    console.log("all product =", AllProduct);
    console.log("all bids =", AllBids);

    let temp_all_bids_data = [];
    let dt = {
      product: null,
      bid: null,
    };

    AllProduct.map((value, index) => {
      console.log(value._id);
      AllBids.map((valbid, index) => {
        if (valbid.productId == value._id) {
          console.log("check1 == ", valbid.productId);
          console.log("check2 == ", value._id);
          console.log("check3 == ", valbid.productId == value._id);
          console.log("check includes  = ", temp_all_bids_data.includes(value));
          console.log(
            "user id check = ",
            localStorage.getItem("userId") == valbid.userId
          );
          if (localStorage.getItem("userId") == valbid.userId) {
            temp_all_bids_data.push(value);
          }
          // if()
          // dt.product = value;
          // dt.bid = valbid;
        }
      });
    });

    console.log("temp_all_bids_data =", temp_all_bids_data);
    setMyBidsData(temp_all_bids_data);
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/products`).then((res) => {
      setAllProduct(res.data.products);
    });
    axios.get(`http://localhost:3000/bid/get-bids`).then((res) => {
      setAllBids(res.data.bids);
    });
  }, []);

  if (AllProduct != null && AllBids != null && MyBidsData == null) {
    GetData();
  }

  console.log("mybidsdata =", MyBidsData);

  return (
    <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
      <div className="container">
        <div className="row justify-content-center">
          {/* Dashboard SideBar Menu */}
          <DashboardSidebar activePage={"mybids"} />
          <div className="col-lg-8">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="upcoming">
                <div className="row mb-30-none justify-content-center">
                  {MyBidsData == null
                    ? "No Bids Found"
                    : MyBidsData.map((value, index) => (
                        <div
                          key={index}
                          className="col-sm-10 col-md-6 col-lg-6"
                        >
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
                                    <div className="amount">
                                      PKR {value.basePrice}
                                    </div>
                                  </div>
                                </div>
                                <div className="bid-amount">
                                  <div className="icon">
                                    <i className="flaticon-money" />
                                  </div>
                                  <div className="amount-content">
                                    <div className="current">Buy Now</div>
                                    <div className="amount">
                                      PKR {value.finalPrice}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="bid-area">
                                <div className="bid-amount">
                                  <div className="icon">
                                    <i className="flaticon-date" />
                                  </div>
                                  <div className="amount-content">
                                    <div className="current">Start Date</div>
                                    <div className="amount">
                                      {value.startDate}
                                    </div>
                                  </div>
                                </div>
                                <div className="bid-amount">
                                  <div className="icon">
                                    <i className="flaticon-date" />
                                  </div>
                                  <div className="amount-content">
                                    <div className="current">End Date</div>
                                    <div className="amount">
                                      {value.endDate}
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              <div className="countdown-area">
                                {/* <span className="total-bids">30 Bids</span> */}
                              </div>
                              {/* <div className="text-center">
                                <a href="#0" className="custom-button">
                                  Submit a bid
                                </a>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBidsComp;
