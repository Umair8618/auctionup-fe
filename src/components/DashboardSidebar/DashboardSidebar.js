import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../../assets/images/dashboard/user.png";
const DashboardSidebar = (props) => {
  let navigate = useNavigate();
  let activePage = props.activePage;
  const HandleLogout = () => {
    // if (localStorage.getItem("token")) {
    //   get(UserLogoutEndPoint, "LOCAL", "", true, localStorage.getItem("token"))
    //     .then((res) => {
    //       if (res.data.status === 200) {
    //         alert(res.data.message);
    //       }
    //     })
    //     .catch((err) => {
    //       alert(err);
    //     });

    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
    // } else {
    //   alert("User not logged in!");
    // }
  };

  return (
    <div className="col-sm-10 col-md-7 col-lg-4 ">
      <div className="dashboard-widget mb-30 mb-lg-0">
        <div className="user">
          <div className="thumb-area">
            <div className="thumb">
              <img src={localStorage.getItem("avatar")} alt="user" />
            </div>
            {/* <label for="profile-pic" className="profile-pic-edit">
              <i className="flaticon-pencil"></i>
            </label> */}
            <input type="file" id="profile-pic" className="d-none" />
          </div>
          <div className="content">
            <h5 className="username">
              <p href="#0">{localStorage.getItem("username")}</p>
            </h5>
            {/* <span className="username">
              <a href="mailto:umair8618@gmail.com">[email&#160;protected]</a>
            </span> */}
          </div>
        </div>
        <ul className="dashboard-menu">
          <li>
            <a
              href="/dashboard"
              className={activePage === "dashboard" ? "active" : ""}
            >
              <i className="flaticon-dashboard"></i>Dashboard
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className={activePage === "profile" ? "active" : ""}
            >
              <i className="flaticon-settings"></i>My Profile{" "}
            </a>
          </li>
          <li>
            <a
              href="/mybids"
              className={activePage === "mybids" ? "active" : ""}
            >
              <i className="flaticon-auction"></i>My Bids
            </a>
          </li>
          <li>
            <a
              href="/winningbids"
              className={activePage === "winningbids" ? "active" : ""}
            >
              <i className="flaticon-best-seller"></i>Winning Bids
            </a>
          </li>
          <li>
            <a
              href="/listing"
              className={activePage === "listing" ? "active" : ""}
            >
              <i className="flaticon-shopping-basket"></i>My Listing
            </a>
          </li>
          <li>
            <a
              href="/addItem"
              className={activePage === "addItem" ? "active" : ""}
            >
              <i className="flaticon-time"></i>Add Item for Auction
            </a>
          </li>
          <li>
            <a
              onClick={HandleLogout}
              href="/login"
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

export default DashboardSidebar;
