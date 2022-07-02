import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../../assets/images/dashboard/user.png";
const DashboardAdminSidebar = (props) => {
  let navigate = useNavigate();
  let activePage = props.activePage;
  const HandleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <div className="col-sm-10 col-md-7 col-lg-4 ">
      <div className="dashboard-widget mb-30 mb-lg-0">
        <div className="user">
          <div className="thumb-area">
            <div className="thumb">
              <img src={localStorage.getItem("avatar")} alt="user" />
            </div>
            <input type="file" id="profile-pic" className="d-none" />
          </div>
          <div className="content">
            <h5 className="username">
              <p href="#0">{localStorage.getItem("username")}</p>
            </h5>
          </div>
        </div>
        <ul className="dashboard-menu">
          <li>
            <a
              href="/dashboard-admin"
              className={activePage === "dashboard-admin" ? "active" : ""}
            >
              <i className="flaticon-dashboard"></i>Dashboard
            </a>
          </li>
          <li>
            <a
              href="/adminUser"
              className={activePage === "adminUser" ? "active" : ""}
            >
              <i className="flaticon-user"></i>Users
            </a>
          </li>
          <li>
            <a
              href="/adminProduct"
              className={activePage === "adminProduct" ? "active" : ""}
            >
              <i className="flaticon-shopping-basket"></i>Products{" "}
            </a>
          </li>
          <li>
            <a
              onClick={HandleLogout}
              href="/"
              className={activePage === "/" ? "active" : ""}
            >
              <i className="flaticon-user"></i>Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardAdminSidebar;
