import React, { useEffect, useState } from "react";
import { RegCNIC, RegEmail, RegPhone } from "../../components/Regex/Regex";
// import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import user from "../../assets/images/dashboard/user.png";
// import { useParams, useNavigate } from "react-router-dom";
import DashboardAdminSidebar from "../DashboardAdminSidebar/DashboardAdminSidebar";
// import Modal from "react-modal";
import Modal from "react-bootstrap/Modal";
import {
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "react-bootstrap";

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const AdminUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let location = useLocation();
  // console.log("param =", param._id);

  let navigate = useNavigate();

  const [FirstNameError, setFirstNameError] = React.useState(false);
  const [LastNameError, setLastNameError] = React.useState(false);
  const [UserNameError, setUserNameError] = React.useState(false);
  const [PasswordError, setPasswordError] = React.useState(false);

  const [EmailErrorMessage, setEmailErrorMessage] = React.useState(false);
  const [UserNameErrorMessage, setUserNameErrorMessage] = React.useState(false);
  const [CNICErrorMessage, setCNICErrorMessage] = React.useState(false);

  const emptyFirstName = () => {
    if (FirstName == "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const emptyLastName = () => {
    if (LastName == "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };

  const emptyUserName = () => {
    if (UserName == "") {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
  };

  const emptyEmail = () => {
    if (Email == "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const emptyPhone = () => {
    if (Phone == "") {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  const emptyCNIC = () => {
    if (CNIC == "") {
      setCNICError(true);
    } else {
      setCNICError(false);
    }
  };

  const emptyPassword = () => {
    if (Password == "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const [EmailError, setEmailError] = React.useState(false);
  const [PhoneError, setPhoneError] = React.useState(false);
  const [CNICError, setCNICError] = React.useState(false);

  // State to store uploaded file
  const [file, setFile] = React.useState("");

  /**
   * Component to display thumbnail of image.
   */
  const ImageThumb = ({ image }) => {
    return (
      <img
        src={URL.createObjectURL(image)}
        width={"150px"}
        height={"150px"}
        alt={image.name}
      />
    );
  };

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [CNIC, setCnic] = useState("");
  const [Password, setPassword] = useState("");
  const [RetypePassword, setRetypePassword] = useState("");

  // get user
  const [user, setUser] = useState(null);

  const [ErrorRetypePassword, setErrorRetypePassword] = useState(false);
  // console.log("RetypePassword =", RetypePassword);

  const ValidationPassword = () => {
    if (Password != RetypePassword) {
      setErrorRetypePassword(true);
    } else {
      setErrorRetypePassword(false);
    }
  };

  const EmailValidation = () => {
    if (!RegEmail.test(Email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const PhoneValidation = () => {
    if (!RegPhone.test(Phone)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const CNICValidation = () => {
    if (!RegCNIC.test(CNIC)) {
      setCNICError(true);
    } else {
      setCNICError(false);
    }
  };
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  const check = () => {
    emptyFirstName();
    emptyLastName();
    emptyUserName();
    emptyEmail();
    emptyPhone();
    emptyCNIC();
    emptyPassword();
  };

  const HandleSubmit = () => {
    check();

    if (
      !FirstNameError &&
      !LastNameError &&
      !UserNameError &&
      !EmailError &&
      !PhoneError &&
      !CNICError &&
      !PasswordError
    ) {
      let DATA = new FormData();

      DATA.append("firstname", FirstName);
      DATA.append("lastname", LastName);
      DATA.append("username", UserName);
      DATA.append("phone", Phone);
      DATA.append("cnic", CNIC);
      DATA.append("email", Email);
      DATA.append(
        "role",
        location.pathname == "/register-admin" ? "admin" : "user"
      );
      DATA.append("password", Password);
      DATA.append("avatar", file);

      axios
        .post("http://localhost:3000/user/signup", DATA)
        .then((res) => {
          if (res.data.status == 200) {
            alert(res.data.message);
            window.scrollTo(0, 0);
            navigate("/login");
          }
          // else if (res.data.status == 204) {
          //   alert(res.data.message);
          // }
        })
        .catch((error) => {
          console.error("error");
          // alert(error.message);
          if (error.message.includes("409")) {
            // alert(error.message);

            setUserNameError(true);
            setUserNameErrorMessage("User Name Taken");
          }
          // if (error.message.includes("402")) {
          //   // alert(error.message);

          //   setEmailError(true);
          //   setEmailErrorMessage("Enter Valid Email");
          // }
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/user/" + id).then((res) => {
      if (res.status == 200) {
        alert("user deleted");
      }
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/user").then((res) => {
      if (res.status == 200) {
        setUser(res.data.user);
      }
    });
  }, []);

  return (
    <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
      <div className="container">
        <div className="row justify-content-center">
          <DashboardAdminSidebar activePage={"adminUser"} />
          <div className="col-lg-8">
            <div className="row">
              <div className="col-12">
                {/* <div className="dash-pro-item mb-30 dashboard-widget">
                  <div className="header">
                    <h4 className="title">Users Operations</h4>
                  </div>
                  <div className="form-group">
                    <button className="custom-button white m-2 p--2">
                      Update
                    </button>
                    <button className="custom-button white m-2">Delete</button>
                  </div>
                </div> */}

                <div className="dash-pro-item mb-30 dashboard-widget">
                  {/* <div className="header">
                    <h4 className="title">Users Details</h4>
                  </div> */}
                  <div className="form-group">
                    <Container responsive fluid>
                      <Row>
                        <Col md="12">
                          <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                              <Card.Title as="h4">AuctionUp.Users</Card.Title>

                              <button
                                className="custom-button white m-2 "
                                variant="primary"
                                onClick={handleShow}
                              >
                                <i className="fa fa-edit"></i>Create
                              </button>
                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header>
                                  <Modal.Title>Create new User</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="login-form">
                                    <div className="row forms">
                                      <div className="col-md-6 mb-30">
                                        <label htmlFor="firstname">
                                          {" "}
                                          <i className="fa fa-user" /> First
                                          Name:
                                        </label>
                                        <input
                                          onKeyDown={emptyFirstName}
                                          type="String"
                                          onChange={(e) =>
                                            setFirstName(e.target.value)
                                          }
                                          className="input form-control"
                                          name="firstname"
                                          id="firstname"
                                          required
                                          placeholder="Enter First Name"
                                        />{" "}
                                        {FirstNameError && (
                                          <span className="error">
                                            Please Enter First Name
                                          </span>
                                        )}
                                      </div>
                                      <div className="col-md-6 mb-30">
                                        <label htmlFor="lastname">
                                          {" "}
                                          <i className="fa fa-user" /> Last
                                          Name:
                                        </label>
                                        <input
                                          onKeyDown={emptyLastName}
                                          type="string"
                                          onChange={(e) =>
                                            setLastName(e.target.value)
                                          }
                                          className="form-control"
                                          name="lastname"
                                          required
                                          placeholder="Enter Last Name"
                                        />{" "}
                                        {LastNameError && (
                                          <span className="error">
                                            Please Enter Last Name
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    <div className="group mb-30">
                                      <label htmlFor="username">
                                        {" "}
                                        <i className="far fa-user" /> User Name:
                                      </label>
                                      <input
                                        onKeyDown={emptyUserName}
                                        type="string"
                                        onChange={(e) =>
                                          setUserName(e.target.value)
                                        }
                                        className="form-control"
                                        name="username"
                                        required
                                        placeholder="Enter unique username"
                                      />{" "}
                                      {UserNameError && (
                                        <span className="error">
                                          {UserNameErrorMessage == ""
                                            ? "Please Enter A Unique User Name"
                                            : UserNameErrorMessage}
                                        </span>
                                      )}
                                      {/* {UserNameError && (
                  <span className="error">Please Enter User Name</span>
                )} */}
                                    </div>
                                    <div className="group mb-30">
                                      <label htmlFor="email">
                                        {" "}
                                        <i className="far fa-envelope" /> Email
                                        Address:
                                      </label>
                                      <input
                                        onKeyDown={emptyEmail}
                                        type="email"
                                        value={Email}
                                        onInput={() => EmailValidation()}
                                        onChange={(e) =>
                                          setEmail(e.target.value)
                                        }
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Email address"
                                      />{" "}
                                      {EmailError && (
                                        <span className="error">
                                          Please Enter A Valid Email
                                        </span>
                                      )}
                                    </div>
                                    <div className="group mb-30">
                                      <label htmlFor="Phone">
                                        {" "}
                                        <i className="fa fa-phone" /> Phone
                                        Number:
                                      </label>
                                      <input
                                        onKeyDown={emptyPhone}
                                        type="tel"
                                        required
                                        pattern="((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        maxLength={12}
                                        value={Phone}
                                        onInput={() => PhoneValidation()}
                                        onChange={(e) =>
                                          setPhone(e.target.value)
                                        }
                                        placeholder="Enter phone number"
                                      />{" "}
                                      {PhoneError && (
                                        <span className="error">
                                          Please Enter A Valid Phone Number
                                        </span>
                                      )}
                                    </div>
                                    <div className="group mb-30">
                                      <label htmlFor="cnic">
                                        {" "}
                                        <i className="far fa-id-card" /> CNIC:
                                      </label>
                                      <input
                                        onKeyDown={emptyCNIC}
                                        type="string"
                                        onChange={(e) =>
                                          setCnic(e.target.value)
                                        }
                                        className="form-control"
                                        id="cnic"
                                        maxLength={13}
                                        required
                                        placeholder="___ - ______-_"
                                        value={CNIC}
                                        onInput={() => CNICValidation()}
                                      />{" "}
                                      {CNICError && (
                                        <span className="error">
                                          Please Enter A Valid CNIC
                                        </span>
                                      )}
                                    </div>
                                    <div className="group mb-30">
                                      <label htmlFor="password">
                                        {" "}
                                        <i className="fa fa-lock" /> Password:
                                      </label>
                                      <input
                                        onKeyDown={emptyPassword}
                                        type="password"
                                        onChange={(e) =>
                                          setPassword(e.target.value)
                                        }
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                      />{" "}
                                      {PasswordError && (
                                        <span className="error">
                                          Please Enter A Valid Password
                                        </span>
                                      )}
                                    </div>
                                    <div className="group mb-30">
                                      <label htmlFor="password_confirmation">
                                        {" "}
                                        <i className="fas fa-lock" /> Retype
                                        Password:
                                      </label>
                                      <input
                                        type="password"
                                        onChange={(e) =>
                                          setRetypePassword(e.target.value)
                                        }
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        name="password_confirmation"
                                        onKeyUp={ValidationPassword}
                                      />{" "}
                                      {ErrorRetypePassword && (
                                        <span className="error">
                                          Password does not match
                                        </span>
                                      )}{" "}
                                    </div>
                                    <div className=" row col-md-6 mb-30">
                                      <div id="upload-box">
                                        <input
                                          type="file"
                                          className="custom-button white"
                                          onChange={handleUpload}
                                        />

                                        {file && <ImageThumb image={file} />}
                                      </div>
                                    </div>
                                    {/* <div className="form-group checkgroup mb-30">
                <input type="checkbox" name="terms" id="check" />
                <label htmlFor="check">The Auction Up Terms of Use apply</label>
              </div> */}
                                    {/* <div className="form-group mb-0">
                                      <button
                                        type="submit"
                                        className="custom-button"
                                        name="register"
                                        onClick={HandleSubmit}
                                      >
                                        Register
                                      </button>
                                    </div> */}
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
                                    type="submit"
                                    className="custom-button"
                                    name="register"
                                    onClick={HandleSubmit}
                                  >
                                    Create
                                  </button>
                                </Modal.Footer>
                              </Modal>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                              <Table className="table-hover table-striped table-bordered">
                                <thead>
                                  <tr>
                                    <th className="border-0">User ID</th>
                                    <th className="border-0">First Name</th>
                                    <th className="border-0">Last Name</th>
                                    <th className="border-0">User Name</th>
                                    <th className="border-0">Phone</th>
                                    <th className="border-0">CNIC</th>
                                    <th className="border-0">Email Address</th>
                                    <th className="border-0">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {user != null ? (
                                    <>
                                      {user.map((value, index) => (
                                        <>
                                          {" "}
                                          <tr>
                                            <td>{value._id}</td>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.username}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.cnic}</td>
                                            <td>{value.email}</td>
                                            <td>
                                              <button
                                                className="custom-button white m-2 "
                                                variant="primary"
                                                onClick={() =>
                                                  handleDelete(value._id)
                                                }
                                              >
                                                <i className="fa fa-trash"></i>
                                              </button>
                                            </td>
                                          </tr>
                                        </>
                                      ))}
                                    </>
                                  ) : (
                                    <>
                                      <tr>
                                        <td>no user found!</td>
                                      </tr>
                                    </>
                                  )}
                                </tbody>
                              </Table>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
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

export default AdminUser;
