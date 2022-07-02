import React, { useEffect, useState } from "react";

import user from "../../assets/images/dashboard/user.png";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
// import Modal from "react-modal";
import Modal from "react-bootstrap/Modal";
import {
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ReactDom from "react-dom";

const PersonalProfile = (props) => {
  const { profileData } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("profile data=", profileData);

  // const DataArrived = () => {
  //   setusers(props.data);
  // };

  // if (props.data != null && users == null) {
  //   DataArrived();
  // }

  return (
    <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
      <div className="container">
        <div className="row justify-content-center">
          <DashboardSidebar activePage={"profile"} />
          <div className="col-lg-8">
            <div className="row">
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  <div className="header">
                    <h4 className="title">Personal Profile</h4>
                  </div>
                  {profileData == null ? (
                    "loading..."
                  ) : (
                    <ul className="dash-pro-body">
                      <li>
                        <div className="info-name">First Name</div>
                        <div className="info-value">
                          {profileData.firstname}
                        </div>
                      </li>
                      <li>
                        <div className="info-name">Last Name</div>
                        <div className="info-value">{profileData.lastname}</div>
                      </li>
                      <li>
                        <div className="info-name">User Name</div>
                        <div className="info-value">{profileData.username}</div>
                      </li>
                      <li>
                        <div className="info-name">CNIC</div>
                        <div className="info-value">{profileData.cnic}</div>
                      </li>
                      <li>
                        <div className="info-name">Email Address</div>
                        <div className="info-value">{profileData.email}</div>
                      </li>

                      <li>
                        <div className="info-name">Mobile</div>
                        <div className="info-value">{profileData.phone}</div>
                      </li>
                      <li>
                        <div className="info-name">Role</div>
                        <div className="info-value">{profileData.role}</div>
                      </li>
                    </ul>
                  )}{" "}
                  <div className="form-group mb-30">
                    <button
                      className="custom-button white"
                      variant="primary"
                      onClick={handleShow}
                    >
                      Edit Profile
                    </button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header>
                        <Modal.Title>Edit Profile</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="login-form">
                          <div className="group mb-30">
                            <label htmlFor="firstname">
                              {" "}
                              <i className="fa fa-user" /> FirstName Name:
                            </label>
                            <input
                              type="string"
                              className="form-control"
                              name="firstname"
                              placeholder="Enter firstname"
                            />
                          </div>
                          <div className="group mb-30">
                            <label htmlFor="lastname">
                              {" "}
                              <i className="fa fa-user" /> Last Name:
                            </label>
                            <input
                              type="string"
                              className="form-control"
                              name="lastname"
                              placeholder="Enter lastname"
                            />
                          </div>
                          <div className="group mb-30">
                            <label htmlFor="username">
                              {" "}
                              <i className="far fa-user" /> User Name:
                            </label>
                            <input
                              type="string"
                              className="form-control"
                              name="username"
                              placeholder="Enter unique username"
                            />
                          </div>
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
                          onClick={handleClose}
                        >
                          Save Changes
                        </button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
                <div className="dash-pro-item mb-30 dashboard-widget">
                  <div className="header">
                    <h4 className="title">Update Password</h4>
                  </div>
                  <div className="group mb-30">
                    <label htmlFor="password">
                      {" "}
                      <i className="fa fa-lock" /> New Password:
                    </label>
                    <input
                      // onKeyDown={emptyPassword}
                      // type="password"
                      // onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Password"
                      name="password"
                    />{" "}
                    {/* {PasswordError && (
                  <span className="error">Please Enter A Valid Password</span>
                )} */}
                  </div>
                  <div className="group mb-30">
                    <label htmlFor="password_confirmation">
                      {" "}
                      <i className="fas fa-lock" /> Retype New Password:
                    </label>
                    <input
                      // type="password"
                      // onChange={(e) => setRetypePassword(e.target.value)}
                      className="form-control"
                      placeholder="Confirm Password"
                      name="password_confirmation"
                      // onKeyUp={ValidationPassword}
                    />{" "}
                    {/* {ErrorRetypePassword && (
                  <span className="error">Password does not match</span>
                )}{" "} */}
                  </div>
                  <div className="form-group mb-0">
                    <button className="custom-button">Change Password</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProfile;

{
  /* <div className="col-lg-8">
            <div className="row">
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  <div className="header">
                    <h4 className="title">Personal Details</h4>
                    <span className="edit">
                      <i className="flaticon-edit" /> Edit
                    </span>
                  </div>
                  <ul className="dash-pro-body">
                    <li>
                      <div className="info-name">Name</div>
                      <div className="info-value">Umair Ilyas</div>
                    </li>
                    <li>
                      <div className="info-name">Date of Birth</div>
                      <div className="info-value">15-01-1999</div>
                    </li>
                    <li>
                      <div className="info-name">Address</div>
                      <div className="info-value">Islamabad</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  <div className="header">
                    <h4 className="title">Email Address</h4>
                    <span className="edit">
                      <i className="flaticon-edit" /> Edit
                    </span>
                  </div>
                  <ul className="dash-pro-body">
                    <li>
                      <div className="info-name">Email</div>
                      <div className="info-value">
                        <a href="mailto:umair8618@gmail.com">
                          [email&#160;protected]
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  <div className="header">
                    <h4 className="title">Contact</h4>
                    <span className="edit">
                      <i className="flaticon-edit" /> Edit
                    </span>
                  </div>
                  <ul className="dash-pro-body">
                    <li>
                      <div className="info-name">Mobile</div>
                      <div className="info-value">+92 000 000 0000</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="dash-pro-item dashboard-widget">
                  <div className="header">
                    <h4 className="title">Security</h4>
                    <span className="edit">
                      <i className="flaticon-edit" /> Edit
                    </span>
                  </div>
                  <ul className="dash-pro-body">
                    <li>
                      <div className="info-name">Password</div>
                      <div className="info-value">xxxxxxxxxxxxxxxx</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */
}
