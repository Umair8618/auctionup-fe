import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection1 from "../components/HeroSection1/HeroSection1";
import PersonalProfile from "../components/PersonalProfile/PersonalProfile";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [profileData, setprofileData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/" + localStorage.getItem("userId"))
      .then((res) => {
        setprofileData(res.data.user);
      });
  }, []);

  console.log("data =", profileData);

  return (
    <>
      <Header />
      <HeroSection1 />
      <PersonalProfile profileData={profileData == null ? null : profileData} />
      <Footer />
    </>
  );
};

export default Profile;
