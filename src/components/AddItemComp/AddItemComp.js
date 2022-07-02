import React, { useState } from "react";

// import "./AddItemComp.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import axios from "axios";

import { post } from "../Axios/post";

import user from "../../assets/images/dashboard/user.png";

import item from "../../assets/images/auction/car/auction-3.jpg";

import background from "../../assets/images/overview/overview-bg.png";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

let ARRAY_IMAGE = [];

const AddItemComp = () => {
  let navigate = useNavigate();

  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [Condition, setCondition] = useState("");
  const [Color, setColor] = useState("");
  const [ManufactureYear, setManufactureYear] = useState("");
  const [City, setCity] = useState("");
  const [Street, setStreet] = useState("");
  const [ZipCode, setZipCode] = useState("");
  const [BasePrice, setBasePrice] = useState("");
  const [FinalPrice, setFinalPrice] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");

  const [file, setFile] = React.useState("");

  const [ListingImage, setListingImage] = React.useState([]);
  const [SelectedFile, setSelectedFile] = React.useState(null);
  const handleClick = () => {
    setFile(document.getElementById("file_input").click());
  };

  const [TitleError, setTitleError] = React.useState(false);
  const [CategoryError, setCategoryError] = React.useState(false);
  const [DescriptionError, setDescriptionError] = React.useState(false);
  const [CityError, setCityError] = React.useState(false);
  const [StreetError, setStreetError] = React.useState(false);
  const [BasePriceError, setBasePriceError] = React.useState(false);
  const [FinalPriceError, setFinalPriceError] = React.useState(false);
  const [StartDateError, setStartDateError] = React.useState(false);
  const [EndDateError, setEndDateError] = React.useState(false);

  const emptyTitle = () => {
    if (Title === "") {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
  };
  const emptyCategory = () => {
    if (Category === "") {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }
  };
  const emptyDescription = () => {
    if (Description === "") {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
  };
  const emptyCity = () => {
    if (City === "") {
      setCityError(true);
    } else {
      setCityError(false);
    }
  };

  const emptyStreet = () => {
    if (Street === "") {
      setStreetError(true);
    } else {
      setStreetError(false);
    }
  };
  const emptyBasePrice = () => {
    if (BasePrice === "") {
      setBasePriceError(true);
    } else {
      setBasePriceError(false);
    }
  };
  const emptyFinalPrice = () => {
    if (FinalPrice === "") {
      setFinalPriceError(true);
    } else {
      setFinalPriceError(false);
    }
  };
  const emptyStartDate = () => {
    if (StartDate === "") {
      setStartDateError(true);
    } else {
      setStartDateError(false);
    }
  };
  const emptyEndDate = () => {
    if (EndDate === "") {
      setEndDateError(true);
    } else {
      setEndDateError(false);
    }
  };

  const check = () => {
    emptyTitle();
    emptyCategory();
    emptyDescription();
    emptyCity();
    emptyStreet();
    emptyBasePrice();
    emptyFinalPrice();
    emptyStartDate();
    emptyEndDate();
  };

  const HandleSubmit = () => {
    check();

    if (
      !TitleError &&
      !CategoryError &&
      !DescriptionError &&
      !CityError &&
      !StreetError &&
      !BasePriceError &&
      !FinalPriceError &&
      !StartDateError &&
      !EndDateError
    ) {
      let DATA = new FormData();

      DATA.append("title", Title);
      DATA.append("category", Category);
      DATA.append("description", Description);
      DATA.append("condition", Condition);
      DATA.append("color", Color);
      DATA.append("manufactureyear", ManufactureYear);
      DATA.append("city", City);
      DATA.append("street", Street);
      DATA.append("zipcode", ZipCode);
      DATA.append("baseprice", BasePrice);
      DATA.append("finalprice", FinalPrice);
      DATA.append("startdate", StartDate);
      DATA.append("enddate", EndDate);
      for (let image in ARRAY_IMAGE) {
        DATA.append("productImage", ARRAY_IMAGE[image]);
      }
      DATA.append("sellerId", localStorage.getItem("userId"));

      // DATA.append("productimage", ARRAY_IMAGE);

      axios
        .post("http://localhost:3000/products/add-product", DATA)
        .then((res) => {
          if (res.status == 201) {
            alert(res.data.message);
            window.scrollTo(0, 0);
            navigate("/listing");
          }
          // else if (res.data.status == 204) {
          //   alert(res.data.message);
          // }
        })
        .catch((error) => {
          console.error("error");
          // alert(error.message);
          // if (error.message.includes("409")) {
          //   // alert(error.message);

          //   setUserNameError(true);
          //   setUserNameErrorMessage("User Name Taken");
          // }
          // if (error.message.includes("402")) {
          //   // alert(error.message);

          //   setEmailError(true);
          //   setEmailErrorMessage("Enter Valid Email");
          // }
        });
    }
  };

  return (
    <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
      <div className="container">
        <div className="row justify-content-center">
          <DashboardSidebar activePage={"addItem"} />
          <div className="col-lg-8">
            <div className="row">
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  <div className="title">
                    <h4>Add Listing</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  {/* Section */}
                  <div className="section">
                    {/* Headline */}
                    <div className="dashboard-title mb-30">
                      <h4>
                        <i className="fa fa-file" /> Basic Informations
                      </h4>
                    </div>
                    {/* Title */}
                    <div className="row forms">
                      <div className="col-md-12">
                        <h5>Listing Title </h5>
                        <input
                          className="search-field"
                          type="String"
                          value={Title}
                          onKeyDown={emptyTitle}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />{" "}
                        {TitleError && (
                          <span className="error">
                            Please Enter Tile For your Listing
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Row */}
                    <div className="row forms">
                      {/* Status */}
                      <div className="col-md-4">
                        <h5>Category</h5>
                        <select
                          className="chosen-select-no-single"
                          value={Category}
                          onKeyPress={emptyCategory}
                          onChange={(e) => setCategory(e.target.value)}
                          required
                        >
                          <option label="select">Select Category</option>
                          <option>Vehicle</option>
                          <option>Jewelry</option>
                          <option>Watch</option>
                          <option>Electronics</option>
                          <option>Sports</option>
                        </select>{" "}
                        {CategoryError && (
                          <span className="error">Please Select Category</span>
                        )}
                      </div>
                      {/* Type */}
                      {/* <div className="col-md-4">
                        <h5>Dimension </h5>
                        <input type="text" />
                      </div>
                      <div className="col-md-4">
                        <h5>Weight</h5>
                        <input type="text" />
                      </div> */}
                    </div>
                    <div class="form">
                      <h5>Description</h5>
                      <textarea
                        class="WYSIWYG"
                        type="String"
                        name="summary"
                        cols="40"
                        rows="3"
                        id="summary"
                        spellcheck="true"
                        value={Description}
                        onKeyDown={emptyDescription}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>{" "}
                      {DescriptionError && (
                        <span className="error">
                          Please Enter Description For your Listing
                        </span>
                      )}
                    </div>
                    <div className="row form">
                      <div className="col-md-4">
                        <h5>Condition</h5>
                        <input
                          type="String"
                          value={Condition}
                          onChange={(e) => setCondition(e.target.value)}
                        />
                      </div>

                      <div className="col-md-4">
                        <h5>Color</h5>
                        <input
                          type="text"
                          value={Color}
                          onChange={(e) => setColor(e.target.value)}
                        />
                      </div>

                      <div className="col-md-4">
                        <h5>Manufacture Year</h5>
                        <input
                          type="text"
                          value={ManufactureYear}
                          onChange={(e) => setManufactureYear(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Row / End */}
                  </div>
                  {/* Section / End */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  {/* Section */}
                  <div className="section">
                    {/* Headline */}
                    <div className="dashboard-title mb-30">
                      <h4>
                        <i className="fa fa-map-marker" /> Location Information
                      </h4>
                    </div>
                    {/* Title */}
                    <div className="row forms">
                      <div class="col-md-6 mb-30">
                        <h5>City</h5>
                        <input
                          type="String"
                          placeholder="e.g. Islamabad"
                          value={City}
                          onKeyDown={emptyCity}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />{" "}
                        {CityError && (
                          <span className="error">Please Enter City</span>
                        )}
                        {/* <select class="chosen-select-no-single">
                          <option label="select">Select City</option>
                          <option>Islamabad</option>
                          <option>Rawalpindi</option>
                          <option>Lahore</option>
                          <option>Karachi</option>
                        </select> */}
                      </div>
                      <div className="col-md-6">
                        <h5>Street</h5>
                        <input
                          type="String"
                          placeholder="e.g. 964 School Street"
                          value={Street}
                          onKeyDown={emptyStreet}
                          onChange={(e) => setStreet(e.target.value)}
                          required
                        />{" "}
                        {StreetError && (
                          <span className="error">Please Enter Street</span>
                        )}
                      </div>
                      {/* <div className="col-md-6">
                        <h5>State</h5>
                        <input type="text" />
                      </div> */}
                      <div className="col-md-6">
                        <h5>Zip-Code</h5>
                        <input
                          type="String"
                          value={ZipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* Section / End */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  {/* Section */}
                  <div className="section">
                    {/* Headline */}
                    <div className="dashboard-title mb-30">
                      <h4>
                        <i className="fa fa-money-bill-wave" /> Pricing
                        Information
                      </h4>
                    </div>
                    {/* Title */}
                    <div className="row forms">
                      <div class="col-md-6 mb-30">
                        <h5>Base price</h5>
                        <input
                          type="number"
                          placeholder="e.g. PKR 1000"
                          value={BasePrice}
                          onKeyDown={emptyBasePrice}
                          onChange={(e) => setBasePrice(e.target.value)}
                          required
                        />{" "}
                        {BasePriceError && (
                          <span className="error">
                            Please Enter Base Price for item to be placed
                          </span>
                        )}
                      </div>
                      <div class="col-md-6 mb-30">
                        <h5>Final price</h5>
                        <input
                          type="number"
                          placeholder="e.g. PKR 1000"
                          value={FinalPrice}
                          onKeyDown={emptyFinalPrice}
                          onChange={(e) => setFinalPrice(e.target.value)}
                          required
                        />{" "}
                        {FinalPriceError && (
                          <span className="error">
                            Please Enter Final Price
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Section / End */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
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
                          value={StartDate}
                          onKeyPress={emptyStartDate}
                          onChange={(e) => {
                            console.log("e.target.value =", e.target.value);
                            setStartDate(e.target.value);
                          }}
                          required
                        />{" "}
                        {StartDateError && (
                          <span className="error">Please Enter Start Date</span>
                        )}
                      </div>
                      <div class="col-md-6 mb-30">
                        <h5>End Date</h5>
                        <input
                          type="date"
                          value={EndDate}
                          onKeyDown={emptyEndDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          required
                        />{" "}
                        {EndDateError && (
                          <span className="error">Please Enter End Date</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Section / End */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="dash-pro-item mb-30 dashboard-widget">
                  {/* Section */}
                  <div className="section">
                    {/* Headline */}
                    <div className="dashboard-title mb-30">
                      <h4>
                        <i className="fa fa-image" /> Gallery
                      </h4>
                    </div>
                    {/* Dropzone */}
                    {/* <div className="section">
                      <form action="/file-upload" className="dropzone" />
                    </div> */}
                    <div className="notification closeable notice">
                      <p className="description" id="_gallery-description">
                        Upload product images with atleast 1 proof of document
                      </p>
                    </div>
                    {console.log("leng =", ARRAY_IMAGE.length)}

                    <div onClick={handleClick} class="dropzone dz-clickable">
                      <div
                        class={
                          ARRAY_IMAGE.length > 0
                            ? "hidden"
                            : "dz-default dz-message"
                        }
                      >
                        <span>
                          <i class="fa fa-plus"></i> Click here or drop files to
                          upload
                        </span>
                      </div>
                      {console.log("arrayimage =", ARRAY_IMAGE.length)}
                      {ARRAY_IMAGE.length > 0 ? (
                        <div className="row">
                          {/* { let size = ARRAY_IMAGE.length} */}
                          {console.log("img ===", ARRAY_IMAGE)}
                          {ARRAY_IMAGE.map((value, index) => (
                            <div key={index} className="col-md-4">
                              {console.log("valueeeee= ", value)}
                              <img
                                alt={"not found"}
                                width={"200px"}
                                height={"150px"}
                                src={URL.createObjectURL(value)}
                              />
                              <br />
                              {/* <button onClick={() => ARRAY_IMAGE[index].pop()}>
                            Remove
                          </button> */}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <></>
                      )}
                      <input
                        id="file_input"
                        multiple
                        type="file"
                        style={{ display: "none" }}
                        name="myImage"
                        onChange={(event) => {
                          console.log("event ==", event.target.files);
                          setListingImage(event.target.files[0]);
                          if (event.target.files.length > 1) {
                            for (
                              let i = 0;
                              i < event.target.files.length;
                              i++
                            ) {
                              ARRAY_IMAGE.push(event.target.files[i]);
                            }
                          } else {
                            ARRAY_IMAGE.push(event.target.files[0]);
                          }

                          setSelectedFile(event.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
                  {/* Section / End */}
                </div>
              </div>
            </div>
            <div className="form-group mb-0">
              <button
                type="submit"
                className="custom-button"
                name="register"
                onClick={HandleSubmit}
              >
                Submit
              </button>
            </div>
            {/* <a className="custom-button">
              Preview <i className="fa fa-arrow-circle-right" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddItemComp;
