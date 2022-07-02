import React, { useState } from "react";
// import "./LoginForm.css";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { RegEmail } from "../../components/Regex/Regex";
import axios from "axios";

function LoginForm() {
  let location = useLocation();
  let navigate = useNavigate();
  const [EmailError, setEmailError] = React.useState(false);
  const [EmailErrorMessage, setEmailErrorMessage] = React.useState(false);
  const [PasswordError, setPasswordError] = React.useState(false);
  const [PasswordErrorMessage, setPasswordErrorMessage] = React.useState(false);

  console.log("params =", location.pathname);

  const EmailValidation = () => {
    if (!RegEmail.test(Email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const emptyEmail = () => {
    if (Email == "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const emptyPassword = () => {
    if (Password == "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const check = () => {
    emptyEmail();
    emptyPassword();
  };
  const HandleSubmit = () => {
    check();

    if (!EmailError && !PasswordError) {
      let DATA = new FormData();

      DATA.append("email", Email);
      DATA.append("password", Password);

      axios
        .post("http://localhost:3000/user/login", DATA)
        .then((res) => {
          console.log("Res =", res);

          if (res.data.status == 200) {
            console.log("res =", res);

            let keys = [];
            Object.keys(res.data.UserData).map((vkey, index) => {
              keys.push(vkey);
            });

            let values = [];
            Object.values(res.data.UserData).map((vitem, index) => {
              // console.log("item = ", vitem);
              values.push(vitem);
            });

            for (let i = 0; i < values.length; i++) {
              localStorage.setItem(keys[i], values[i]);
            }
            localStorage.setItem("token", res.data.token);
            alert(res.data.message);

            // localStorage.setItem("userData", JSON.stringify(res.data.UserData));

            window.scrollTo(0, 0);
            console.log("keys =", res);

            if (location.pathname == "/login-admin") {
              localStorage.setItem("admin", "true");
            }

            navigate(
              location.pathname == "/login-admin"
                ? "/dashboard-admin"
                : "/dashboard"
            );
          }
          // if (res.data.status == 401) {
          //   alert(res.data.message);
          // }
        })
        .catch((error) => {
          console.error("error");
          // alert(error.message);
          if (error.message.includes("401")) {
            // alert(error.message);

            setPasswordError(true);
            setPasswordErrorMessage(
              "Invalid credentials either email or password is incorrect!"
            );
          }
          if (error.message.includes("402")) {
            // alert(error.message);

            setEmailError(true);
            setEmailErrorMessage("Valid Email Required");
          }
        });
    }
  };

  return (
    <section className="account-section padding-bottom">
      <div className="container">
        <div className="account-wrapper mt--100 mt-lg--440">
          <div className="left-side">
            <div className="section-header">
              <h2 className="title">HI, THERE</h2>
              <p>You can log in to your account here.</p>
            </div>
            <div className="login-form">
              <div className="group mb-30">
                <label htmlFor="email"> Email Address:</label>
                <input
                  preventDefault
                  type="email"
                  value={Email}
                  onKeyDown={emptyEmail}
                  onInput={() => EmailValidation()}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  name="email"
                  placeholder="Enter Email address"
                />{" "}
                {EmailError && (
                  <span className="error">
                    {EmailErrorMessage == ""
                      ? "Please Enter A Valid Email"
                      : EmailErrorMessage}
                  </span>
                )}
              </div>
              <div className="group mb-30">
                <label htmlFor="password"> Password:</label>
                <input
                  onKeyDown={emptyPassword}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />{" "}
                {PasswordError && (
                  <span className="error">
                    {" "}
                    {PasswordErrorMessage == ""
                      ? "Valid Password Required"
                      : PasswordErrorMessage}
                  </span>
                )}
              </div>
              <div className="form-group">
                <a href="#0">Forgot Password?</a>
              </div>
              <div className="form-group mb-0">
                <button
                  type="submit"
                  className="custom-button"
                  onClick={HandleSubmit}
                >
                  <a>LOG IN</a>
                </button>
              </div>
            </div>
          </div>
          <div className="right-side cl-white">
            <div className="section-header mb-0">
              <h3 className="title mt-0">NEW HERE?</h3>
              <p>Sign up and create your Account</p>
              <a href="/register" className="custom-button transparent">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
