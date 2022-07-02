import React, { useState } from "react";
import user from "../../assets/images/dashboard/user.png";
import axios from "axios";
import product from "../../assets/images/auction/car/auction-1.jpg";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

import Modal from "react-bootstrap/Modal";
import {
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "react-bootstrap";

const ListingComp = (props) => {
  const [products, setproducts] = useState(null);
  const [user, setUser] = useState(null);
  const [DeleteID, setDeleteID] = useState(null);
  const [EditID, setEditID] = useState(null);

  const [NumOfProducts, setNumOfProducts] = useState(0);

  //Data
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  //for Modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const DataArrived = () => {
    console.log("props.data =", props.data);
    let data = [];
    props.data.map((value, index) => {
      console.log(
        'value.sellerId == localStorage.getItem("userId")',
        value.sellerId == localStorage.getItem("userId")
      );
      if (value.sellerId == localStorage.getItem("userId")) {
        data.push(value);
      }
    });
    setproducts(data);
    setNumOfProducts(data.length);
  };

  if (props.data != null && products == null) {
    DataArrived();
  }

  // edit product
  const HandleEdit = () => {
    let DATA = new FormData();

    if (city != "") {
      DATA.append("city", city);
    }
    if (street != "") {
      DATA.append("street", street);
    }
    if (zipCode != "") {
      DATA.append("zip", zipCode);
    }
    if (basePrice != "") {
      DATA.append("basePrice", basePrice);
    }
    if (finalPrice != "") {
      DATA.append("finalPrice", finalPrice);
    }
    if (startDate != "") {
      DATA.append("startDate", startDate);
    }
    if (endDate != "") {
      DATA.append("endDate", endDate);
    }

    axios
      .put("http://localhost:3000/products/" + EditID, DATA)
      .then((res) => {
        if (res.status == 200) {
          // alert(res.data);
          window.scrollTo(0, 0);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("error");
      });
  };

  // delete product
  const DeleteProduct = () => {
    axios.delete("http://localhost:3000/products/" + DeleteID).then((res) => {
      alert(res.data.message);
      window.location.reload();
    });
  };

  if (DeleteID != null) {
    DeleteProduct();
  }
  console.log("edit id =", EditID);
  if (EditID != null) {
    HandleEdit();
  }

  return (
    <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
      <div className="container">
        <div className="row justify-content-center">
          <DashboardSidebar activePage={"listing"} />
          <div className="col-lg-8">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="upcoming">
                <div className="row mb-30-none justify-content-center">
                  {products == null || NumOfProducts == 0 ? (
                    <div className="pointer">No Products Found!</div>
                  ) : (
                    products.map((value, index) => (
                      <div className="col-sm-10 col-md-6">
                        {/* {console.log("value ----", value)} */}
                        <div className="auction-item-2">
                          <div className="auction-thumb">
                            <a href={"/productDetails/" + value._id}>
                              <img
                                style={{ width: 200, height: 200 }}
                                src={value.productImage[0]}
                                alt={value.category}
                              />
                            </a>
                            <a
                              href={"/productDetails/" + value._id}
                              className="rating"
                            >
                              <i className="far fa-star" />
                            </a>
                            {/* <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a> */}
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
                                  <i className="flaticon-money" />
                                </div>
                                <div className="amount-content">
                                  <div className="current">Initial Amount</div>
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
                            <div className="bid-area">
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
                                  <div className="amount">{value.endDate}</div>
                                </div>
                              </div>
                              <div className="bid-amount">
                                <div className="icon">
                                  <i className="flaticon-money" />
                                </div>
                                <div className="amount-content">
                                  <div className="current">Current Bid</div>
                                  <div className="amount">
                                    PKR {value.basePrice}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bid-area">
                              <div className="bid-amount">
                                <div className="text-center">
                                  <button
                                    variant="primary"
                                    onClick={handleShow}
                                    className="custom-button"
                                  >
                                    Update
                                  </button>
                                  <Modal
                                    scrollable
                                    show={show}
                                    onHide={handleClose}
                                  >
                                    <Modal.Header>
                                      <Modal.Title>
                                        Update product details
                                      </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      <div className="dash-pro-item mb-30 dashboard-widget">
                                        <div className="section">
                                          {/* Headline */}
                                          <div className="dashboard-title mb-30">
                                            <h4>
                                              <i className="fa fa-map-marker" />{" "}
                                              Location Information
                                            </h4>
                                          </div>
                                          {/* Title */}
                                          <div className="row forms">
                                            <div class="col-md-12 mb-30">
                                              <h5>City</h5>
                                              <input
                                                type="String"
                                                placeholder="e.g. Islamabad"
                                                value={city}
                                                onChange={(e) =>
                                                  setCity(e.target.value)
                                                }
                                              />{" "}
                                              {/* {CityError && (
                                              <span className="error">
                                                Please Enter City
                                              </span>
                                            )} */}
                                            </div>
                                            <div className="col-md-12 mb-30">
                                              <h5>Street</h5>
                                              <input
                                                type="String"
                                                placeholder="e.g. 964 School Street"
                                                value={street}
                                                onChange={(e) =>
                                                  setStreet(e.target.value)
                                                }
                                              />{" "}
                                              {/* {StreetError && (
                                              <span className="error">
                                                Please Enter Street
                                              </span>
                                            )} */}
                                            </div>

                                            <div className="col-md-12">
                                              <h5>Zip-Code</h5>
                                              <input
                                                type="String"
                                                value={zipCode}
                                                onChange={(e) =>
                                                  setZipCode(e.target.value)
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="dash-pro-item mb-30 dashboard-widget">
                                        {/* Section */}
                                        <div className="section">
                                          {/* Headline */}
                                          <div className="dashboard-title mb-30">
                                            <h4>
                                              <i className="fa fa-money-bill-wave" />{" "}
                                              Pricing Information
                                            </h4>
                                          </div>
                                          {/* Title */}
                                          <div className="row forms">
                                            <div class="col-md-6 mb-30">
                                              <h5>Base price</h5>
                                              <input
                                                type="number"
                                                placeholder="e.g. PKR 1000"
                                                value={basePrice}
                                                onChange={(e) =>
                                                  setBasePrice(e.target.value)
                                                }
                                              />{" "}
                                              {/* {BasePriceError && (
                                                <span className="error">
                                                  Please Enter Base Price for
                                                  item to be placed
                                                </span>
                                              )} */}
                                            </div>
                                            <div class="col-md-6 mb-30">
                                              <h5>Final price</h5>
                                              <input
                                                type="number"
                                                placeholder="e.g. PKR 1000"
                                                value={finalPrice}
                                                onChange={(e) =>
                                                  setFinalPrice(e.target.value)
                                                }
                                              />{" "}
                                              {/* {FinalPriceError && (
                                                <span className="error">
                                                  Please Enter Final Price
                                                </span>
                                              )} */}
                                            </div>
                                          </div>
                                        </div>
                                        {/* Section / End */}
                                      </div>
                                      <div className="dash-pro-item mb-30 dashboard-widget">
                                        {/* Section */}
                                        <div className="section">
                                          {/* Headline */}
                                          <div className="dashboard-title mb-30">
                                            <h4>
                                              <i className="fa fa-calendar" />
                                              Date
                                            </h4>
                                          </div>
                                          {/* Title */}
                                          <div className="row forms">
                                            <div class="col-md-6 mb-30">
                                              <h5>Start Date</h5>
                                              <input
                                                type="date"
                                                value={startDate}
                                                onChange={(e) => {
                                                  setStartDate(e.target.value);
                                                }}
                                              />{" "}
                                              {/* {StartDateError && (
                                                <span className="error">
                                                  Please Enter Start Date
                                                </span>
                                              )} */}
                                            </div>
                                            <div class="col-md-6 mb-30">
                                              <h5>End Date</h5>
                                              <input
                                                type="date"
                                                value={endDate}
                                                onChange={(e) =>
                                                  setEndDate(e.target.value)
                                                }
                                              />{" "}
                                              {/* {EndDateError && (
                                                <span className="error">
                                                  Please Enter End Date
                                                </span>
                                              )} */}
                                            </div>
                                          </div>
                                        </div>
                                        {/* Section / End */}
                                      </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <button
                                        variant="secondary"
                                        onClick={handleClose}
                                        className="custom-button white"
                                      >
                                        Close
                                      </button>
                                      <button
                                        className="custom-button"
                                        variant="primary"
                                        // onClick={handleClose}
                                        onClick={(e) => {
                                          setEditID(value._id);
                                        }}
                                      >
                                        Save Changes
                                      </button>
                                    </Modal.Footer>
                                  </Modal>
                                </div>
                              </div>
                              <div className="bid-amount">
                                <div className="text-center">
                                  <button
                                    onClick={(e) => {
                                      setDeleteID(value._id);
                                    }}
                                    className="custom-button pointer"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  {/* <div className="col-sm-10 col-md-6">
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        <a href="/productDetails">
                          <img src={product} alt="car" />
                        </a>
                      </div>
                      <div className="auction-content">
                        <h6 className="title">
                          <a href="/productDetails">2018 Hyundai Sonata</a>
                        </h6>
                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Initial Amount</div>
                              <div className="amount">PKR 600000</div>
                            </div>
                          </div>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Buy Now</div>
                              <div className="amount">PKR 100000</div>
                            </div>
                          </div>
                        </div>
                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">PKR 750000</div>
                            </div>
                          </div>
                        </div>
                        <div className="countdown-area">
                          <div className="countdown">
                            <div id="bid_counter23">0d : 12h : 60m : 60s</div>
                          </div>
                          <span className="total-bids">30 Bids</span>
                        </div>

                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="text-center">
                              <a href="/login" className="custom-button">
                                Update
                              </a>
                            </div>
                          </div>
                          <div className="bid-amount">
                            <div className="text-center">
                              <a href="/login" className="custom-button">
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* <div className="row mb-30-none justify-content-center">
                  <div className="col-sm-10 col-md-6">
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        <a href="/productDetails">
                          <img src={product} alt="car" />
                        </a>
                      </div>
                      <div className="auction-content">
                        <h6 className="title">
                          <a href="/productDetails">2018 Hyundai Sonata</a>
                        </h6>
                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Initial Amount</div>
                              <div className="amount">PKR 600000</div>
                            </div>
                          </div>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Buy Now</div>
                              <div className="amount">PKR 100000</div>
                            </div>
                          </div>
                        </div>
                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">PKR 750000</div>
                            </div>
                          </div>
                        </div>
                        <div className="countdown-area">
                          <div className="countdown">
                            <div id="bid_counter23">0d : 12h : 60m : 60s</div>
                          </div>
                          <span className="total-bids">30 Bids</span>
                        </div>

                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="text-center">
                              <a href="/login" className="custom-button">
                                Update
                              </a>
                            </div>
                          </div>
                          <div className="bid-amount">
                            <div className="text-center">
                              <a href="/login" className="custom-button">
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div className="tab-pane fade" id="past">
                <div className="row justify-content-center mb-30-none">
                  <div className="col-sm-10 col-md-6">
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/images/auction/jewelry/auction-1.jpg"
                            alt="jewelry"
                          />
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
                          <a href="product-details.html">
                            Gold Ring With Clear Stones
                          </a>
                        </h6>
                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Buy Now</div>
                              <div className="amount">$5,00.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="countdown-area">
                          <div className="countdown">
                            <div id="bid_counter23" />
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
                  <div className="col-sm-10 col-md-6">
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/images/auction/jewelry/auction-2.jpg"
                            alt="jewelry"
                          />
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
                          <a href="product-details.html">
                            Ring With Clear Stone Accents
                          </a>
                        </h6>
                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Buy Now</div>
                              <div className="amount">$5,00.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="countdown-area">
                          <div className="countdown">
                            <div id="bid_counter24" />
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
                  <div className="col-sm-10 col-md-6">
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/images/auction/jewelry/auction-3.jpg"
                            alt="jewelry"
                          />
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
                          <a href="product-details.html">
                            Gold Ring With Clear Stones
                          </a>
                        </h6>
                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Buy Now</div>
                              <div className="amount">$5,00.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="countdown-area">
                          <div className="countdown">
                            <div id="bid_counter25" />
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
                  <div className="col-sm-10 col-md-6">
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/images/auction/product/04.png"
                            alt="jewelry"
                          />
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
                          <a href="product-details.html">
                            Gold Ring With Clear Stones
                          </a>
                        </h6>
                        <div className="bid-area">
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-money" />
                            </div>
                            <div className="amount-content">
                              <div className="current">Buy Now</div>
                              <div className="amount">$5,00.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="countdown-area">
                          <div className="countdown">
                            <div id="bid_counter30" />
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
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingComp;
