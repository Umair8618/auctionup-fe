import React, { useEffect, useState } from "react";

import user from "../../assets/images/dashboard/user.png";
import win from "../../assets/images/auction/car/auction-3.jpg";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import axios from "axios";
const WinningBidsComp = () => {
  const [AllProduct, setAllProduct] = useState(null);
  const [AllBids, setAllBids] = useState(null);
  const [MyBidsData, setMyBidsData] = useState(null);
  const [MyBidsSellerData, setMyBidsSellerData] = useState(null);
  const [NumOfProducts, setNumOfProducts] = useState(0);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  const closeShow = () => setShow(false);

  let sellerid = [];
  let temp_all_seller_info = [];

  const getSellinfo = async (selled) => {
    // console.log("sellserdfwefw = ", selled);

    for (let i = 0; i < selled.length; i++) {
      await axios
        .get("http://localhost:3000/user/" + sellerid[i])
        .then((res) => {
          console.log("res response in for loop =", res.data.user);
          if (!temp_all_seller_info.includes(res.data.user)) {
            temp_all_seller_info.push(res.data.user);
          }
        })
        .catch((err) => {
          console.log("error getting seller info", err);
        });
    }

    setMyBidsSellerData(temp_all_seller_info);
  };

  const GetData = () => {
    let temp_all_bids_data = [];
    let current_date = new Date();
    AllProduct.map((value, index) => {
      console.log("product id ==", value._id);
      AllBids.map((valbid, index) => {
        if (valbid.productId == value._id) {
          if (localStorage.getItem("userId") == valbid.userId) {
            let enddate = new Date(value.endDate);
            if (enddate < current_date) {
              temp_all_bids_data.push(value);
              sellerid.push(value.sellerId);
              console.log("seller id ==", sellerid);
              // getSellinfo(value.sellerId);
            }
          }
        }
      });
    });
    getSellinfo(sellerid);
    setMyBidsData(temp_all_bids_data);
    setNumOfProducts(temp_all_bids_data.length);
  };

  // if (sellerid.length > 0 && MyBidsSellerData == null) {
  //   console.log("in if");
  //   for (let i = 0; i < sellerid.length; i++) {
  //     console.log("seller id check ke andr =", sellerid[i]);
  //     getSellinfo(sellerid[i]);
  //   }
  //   setsellerid();
  // }

  // const setsellerid = () => {
  //   console.log("in set seller");
  //   setMyBidsSellerData(temp_all_seller_info);
  // };

  useEffect(() => {
    axios.get(`http://localhost:3000/products`).then((res) => {
      setAllProduct(res.data.products);
    });
    axios.get(`http://localhost:3000/bid/get-bids`).then((res) => {
      setAllBids(res.data.bids);
    });
  }, []);

  // useEffect(() => {
  //   console.log("data updated");
  // }, [MyBidsSellerData]);

  if (
    AllProduct != null &&
    AllBids != null &&
    MyBidsData == null &&
    MyBidsSellerData == null
  ) {
    GetData();
  }

  console.log("mybidssellerdata =", MyBidsSellerData);

  // if (MyBidsSellerData == null) {
  //   GetData();
  // }

  return (
    <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
      <div className="container">
        <div className="row justify-content-center">
          <DashboardSidebar activePage={"winningbids"} />
          <div className="col-lg-8">
            <div className="row mb-30-none justify-content-center">
              {MyBidsData == null || NumOfProducts == 0 ? (
                <div className="pointer">You have not won any bids!</div>
              ) : (
                <>
                  {MyBidsData.map((value, index) => (
                    <div key={index} className="col-sm-10 col-md-6">
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
                          <h6 className="title m-25">
                            <a href={"/productDetails/" + value._id}>
                              {value.title}
                            </a>
                          </h6>
                        </div>
                        <button
                          variant="primary"
                          onClick={handleShow}
                          className="custom-button m-25"
                        >
                          Seller Info
                        </button>
                        {show && (
                          <div>
                            {MyBidsSellerData == null ||
                            MyBidsSellerData.length == 0 ? (
                              "No Data"
                            ) : (
                              <div className="side-counter-area">
                                <div className="side-counter-item">
                                  <div className="content">
                                    <h4 className="sellerinfo">
                                      Seller Information
                                    </h4>
                                    <div className="header-top mb-10 p-2">
                                      {MyBidsSellerData[index].phone}
                                    </div>
                                    <div className="header-top p-2">
                                      {MyBidsSellerData[index].email}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}{" "}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinningBidsComp;
