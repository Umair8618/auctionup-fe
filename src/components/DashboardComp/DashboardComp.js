import React, { useEffect, useState } from "react";
import "../../assets/css/main.css";

import user from "../../assets/images/dashboard/user.png";

import dashboard from "../../assets/images/dashboard/01.png";
import dashboard2 from "../../assets/images/dashboard/02.png";
import dashboard3 from "../../assets/images/dashboard/03.png";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

import axios from "axios";
function DashboardComp() {
  return (
    <section className="dashboard-section padding-bottom mt--240 mt-lg--325 pos-rel">
      <div className="container">
        <div className="row justify-content-center ">
          {/* Dashboard SideBar Menu */}
          <DashboardSidebar activePage={"dashboard"} />

          <div className="col-lg-8">
            <div className="dashboard-widget mb-40">
              <div className="dashboard-title mb-30">
                <h5 className="title">My Activity</h5>
              </div>
              <div className="row justify-content-center mb-30-none">
                <div className="col-md-4 col-sm-6">
                  <div className="dashboard-item">
                    <div className="thumb">
                      <img src={dashboard} alt="dashboard" />
                    </div>
                    <div className="content">
                      <h2 className="title">
                        {/* <span className="counter">80</span> */}
                      </h2>
                      <h6 className="info">Active Listing</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="dashboard-item">
                    <div className="thumb">
                      <img src={dashboard2} alt="dashboard" />
                    </div>
                    <div className="content">
                      <h2 className="title">
                        {/* <span className="counter">15</span> */}
                      </h2>
                      <h6 className="info">Items Won</h6>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-4 col-sm-6">
                  <div className="dashboard-item">
                    <div className="thumb">
                      <img src={dashboard3} alt="dashboard" />
                    </div>
                    <div className="content">
                      <h2 className="title">
                        <span className="counter">115</span>
                      </h2>
                      <h6 className="info">Favorites</h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="dashboard-widget">
              <h5 className="title mb-10">Purchasing</h5>
              <div className="dashboard-purchasing-tabs">
                <ul className="nav-tabs nav">
                  <li>
                    <a href="#current" className="active" data-toggle="tab">
                      Current
                    </a>
                  </li>
                  <li>
                    <a href="#pending" data-toggle="tab">
                      Pending
                    </a>
                  </li>
                  <li>
                    <a href="#history" data-toggle="tab">
                      History
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane show active fade" id="current">
                    <table className="purchasing-table">
                      <thead>
                        <th>Item</th>
                        <th>Bid Price</th>
                        <th>Highest Bid</th>
                        <th>Lowest Bid</th>
                        <th>Expires</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane show fade" id="pending">
                    <table className="purchasing-table">
                      <thead>
                        <th>Item</th>
                        <th>Bid Price</th>
                        <th>Highest Bid</th>
                        <th>Lowest Bid</th>
                        <th>Expires</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-purchase="item">2018 </td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane show fade" id="history">
                    <table className="purchasing-table">
                      <thead>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                        <tr>
                          <td data-purchase="item">2018 Hyundai Sonata</td>
                          <td data-purchase="bid price">$1,775.00</td>
                          <td data-purchase="highest bid">$1,775.00</td>
                          <td data-purchase="lowest bid">$1,400.00</td>
                          <td data-purchase="expires">7/2/2021</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardComp;
