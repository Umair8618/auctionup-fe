import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo/logo.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import logo from "../../assets/logo/au-logo-1.png";

// import logo from "../../assets/images/logo/logo.png";
const Header = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const HandleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    if (localStorage.getItem("admin")) {
      localStorage.removeItem("admin");
    }
    window.location.replace("/");
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const [NAVBAR_DROPDOWN, setNAVBAR_DROPDOWN] = React.useState(false);
  const OpenDropDownMenu = () => {
    setNAVBAR_DROPDOWN(!NAVBAR_DROPDOWN);
  };

  return (
    <header className="header-top">
      {/* <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="customer-support">
              <li>
                <a href="#0" className="mr-3">
                  <i className="fas fa-phone-alt" />
                  <span className="ml-2 d-none d-sm-inline-block">
                    Customer Support
                  </span>
                </a>
              </li>
              <li>
                <i className="fas fa-globe" />
                <select name="language" className="select-bar">
                  <option value="en">En</option>
                  <option value="Bn">Bn</option>
                  <option value="Rs">Rs</option>
                  <option value="Us">Us</option>
                  <option value="Pk">Pk</option>
                  <option value="Arg">Arg</option>
                </select>
              </li>
            </ul>
            <ul className="cart-button-area">
              <li>
                <a href="#0" className="cart-button">
                  <i className="flaticon-shopping-basket" />
                  <span className="amount">08</span>
                </a>
              </li>
              <li>
                <a href="sign-in.html" className="user-button">
                  <i className="flaticon-user" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/home" onClick={closeMobileMenu}>
                <img src={logo} alt="logo" />
              </Link>
              {/* <a href="/home">
                <img src={logo} alt="logo" />
              </a> */}
            </div>
            {/* <div className="logo">
              <Link to="/home" onClick={closeMobileMenu}>
                <h1>Auction Up</h1>
              </Link>
            </div> */}
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            {/* className={click ? "nav-menu active" : "nav-menu"} */}
            <ul className={click ? "menu ml-auto active" : "menu"}>
              <li>
                <Link to="/home" onClick={closeMobileMenu}>
                  Home
                </Link>
                {/* <a href="/home">Home</a> */}
              </li>
              <li>
                <Link to="/products" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              {/* <li>
                <Link to="/register" onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li> */}
              {/* <li>
                <a
                  href="/login"
                  className="custom-button "
                  onClick={closeMobileMenu}
                >
                  Login / Register
                </a>
              </li> */}
              <li>
                <DropdownButton
                  id="dropdown-basic-button"
                  className="background-auciton-up"
                  title=""
                >
                  <Dropdown.Item
                    href={
                      localStorage.getItem("token") == undefined
                        ? "/login"
                        : localStorage.getItem("admin")
                        ? "/dashboard-admin"
                        : "/dashboard"
                    }
                  >
                    {localStorage.getItem("token") == undefined
                      ? "Login"
                      : "Dashboard"}
                  </Dropdown.Item>
                  {localStorage.getItem("token") == undefined ||
                  localStorage.getItem("admin") ? (
                    ""
                  ) : (
                    <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                  )}{" "}
                  {localStorage.getItem("userId") && (
                    <Dropdown.Item onClick={HandleLogout}>Logout</Dropdown.Item>
                  )}
                </DropdownButton>
                {/* <i className="flaticon-user" /> */}

                {/* <a
                  href={
                    localStorage.getItem("token") == undefined
                      ? "/login"
                      : "/dashboard"
                  }
                  // className="user-button"
                  onClick={closeMobileMenu}
                > */}
                {/* login or signup */}
                {/* </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
