import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import product from "../../assets/images/auction/product/10.png";

const Auction = (props) => {
  const [products, setproducts] = useState(null);
  const [dropdownSelection, setDropdownSelection] = useState(null);

  const DataArrived = () => {
    setproducts(props.data);
    console.log("props.data =", props.data);
  };
  if (props.data != null && products == null) {
    DataArrived();
  }

  useEffect(() => {
    if (dropdownSelection != null && dropdownSelection != "Select Category") {
      let data = JSON.stringify({
        category: dropdownSelection,
      });

      var config = {
        method: "get",
        url: `http://localhost:3000/products/search/${dropdownSelection}`,
        headers: {},
        // data: data,
      };

      axios(config)
        .then((res) => {
          if (res.status === 200) {
            console.log("res in category=", res.data.length);
            setproducts(res.data);
          }
        })
        .catch((error) => {
          console.log("error =", error);
        });
    }
  }, [dropdownSelection]);

  return (
    <div className="product-auction padding-bottom">
      <div className="container">
        <div className="row mb--50">
          <div className="col-lg-4 mb-50">
            {/* <div className="widget">
              <h5 className="title">Filter by Price</h5>
              <div className="widget-body">
                <div id="slider-range" />
                <div className="price-range">
                  <label htmlFor="amount">Price :</label>
                  <input type="text" id="amount" readOnly />
                </div>
              </div>
              <div className="text-center mt-20">
                <a href="#0" className="custom-button">
                  Filter
                </a>
              </div>
            </div> */}
            {/* <div className="widget">
              <h5 className="title">Auction Type</h5>
              <div className="widget-body">
                <div className="widget-form-group">
                  <input type="checkbox" name="check-by-type" id="check1" />
                  <label htmlFor="check1">Live Auction</label>
                </div>
                <div className="widget-form-group">
                  <input type="checkbox" name="check-by-type" id="check2" />
                  <label htmlFor="check2">Timed Auction</label>
                </div>
                <div className="widget-form-group">
                  <input type="checkbox" name="check-by-type" id="check3" />
                  <label htmlFor="check3">Buy Now</label>
                </div>
              </div>
            </div> */}
            <div className="widget">
              <h5 className="title">Latest Listing</h5>
            </div>
          </div>
          <div className="col-lg-8 mb-50">
            <div className="product-header mb-40 style-2">
              <div className="product-header-item">
                <div className="item">Search: </div>
                <select
                  name="sort-by"
                  onChange={(e) => setDropdownSelection(e.target.value)}
                  className="select-bar"
                >
                  <option label="select">Select Category</option>
                  <option>Vehicle</option>
                  <option>Jewelry</option>
                  <option>Watch</option>
                  <option>Electronics</option>
                  <option>Sports</option>
                </select>
              </div>

              {/* <form className="product-search ml-auto">
                <input type="text" placeholder="Item Name" />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </form> */}
            </div>
            <div className="row mb-30-none justify-content-center">
              {products == null ? (
                ""
              ) : products.length == 0 ? (
                <>No Products Avaliable</>
              ) : (
                products.map((value, index) => (
                  <div className="col-sm-10 col-md-6">
                    {/* {console.log("value ----", value)} */}
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        <a>
                          <Link to={`/productDetails/${value._id}`}>
                            <img
                              style={{ width: 200, height: 200 }}
                              src={value.productImage[0]}
                              alt={value.category}
                            />
                          </Link>
                        </a>
                        <a
                          // href={"/productDetails/" + value._id}
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
                          <a>
                            <Link to={`/productDetails/${value._id}`}>
                              {value.title}
                            </Link>
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
                        <div className="countdown-area"></div>
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
                ))
              )}
            </div>
            {/* <ul className="pagination">
              <li>
                <a href="#0">
                  <i className="flaticon-left-arrow" />
                </a>
              </li>
              <li>
                <a href="#0">1</a>
              </li>
              <li>
                <a href="#0" className="">
                  2
                </a>
              </li>
              <li>
                <a href="#0">3</a>
              </li>
              <li>
                <a href="#0">
                  <i className="flaticon-right-arrow" />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
