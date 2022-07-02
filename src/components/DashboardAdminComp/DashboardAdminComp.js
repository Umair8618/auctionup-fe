import React, { useEffect, useState } from "react";
import "../../assets/css/main.css";

import user from "../../assets/images/dashboard/user.png";

import dashboard from "../../assets/images/dashboard/02.png";
import dashboard2 from "../../assets/images/dashboard/03.png";
import dashboard3 from "../../assets/images/dashboard/03.png";
import DashboardAdminSidebar from "../DashboardAdminSidebar/DashboardAdminSidebar";
import axios from "axios";

function DashboardAdminComp() {
  const [product, setProduct] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      if (res.status == 200) {
        setProduct(res.data.products);
      }
    });
    axios.get("http://localhost:3000/user").then((res) => {
      if (res.status == 200) {
        setUser(res.data.user);
      }
    });
  }, []);

  console.log("user=", user.length);

  return (
    <section className="dashboard-section padding-bottom mt--240 mt-lg--325 pos-rel">
      <div className="container">
        <div className="row justify-content-center ">
          {/* Dashboard SideBar Menu */}
          <DashboardAdminSidebar activePage={"dashboard-admin"} />

          <div className="col-lg-8">
            <div className="dashboard-widget mb-40">
              <div className="dashboard-title mb-30">
                <h5 className="title">Admin Dashboard</h5>
              </div>
              <div className="row justify-content-center mb-30-none">
                <div className="col-md-4 col-sm-6">
                  <div className="dashboard-item">
                    <div className="thumb">
                      <img src={dashboard} alt="dashboard" />
                    </div>
                    <div className="content">
                      <h2 className="title">
                        <span className="counter">
                          {user != "" ? `${user.length}` : "loading.."}
                        </span>
                      </h2>
                      <h6 className="info">USERS</h6>
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
                        <span className="counter">
                          {product != "" ? `${product.length}` : "loading.."}
                        </span>
                      </h2>
                      <h6 className="info">PRODUCTS</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardAdminComp;
