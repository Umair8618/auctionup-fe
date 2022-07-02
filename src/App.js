import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
// import Admin from "./pages/Admin";
import Services from "./pages/Services";

import "./assets/css/main.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/animate.css";
import "./assets/css/all.min.css";
import "./assets/css/magnific-popup.css";

import Header from "./components/Header/Header";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import MyBids from "./pages/MyBids";
import WinningBids from "./pages/WinningBids";
import Listing from "./pages/Listing";
import AddItem from "./pages/AddItem";
import DashboardAdmin from "./pages/DashboardAdmin";
import AdminUser from "./pages/AdminUser";
import AdminProduct from "./pages/AdminProduct";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route
            exact
            path="/productDetails/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login-admin" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register-admin" element={<Register />} />

          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard-admin" element={<DashboardAdmin />} />
          <Route exact path="/adminUser" element={<AdminUser />} />
          <Route exact path="/adminProduct" element={<AdminProduct />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/mybids" element={<MyBids />} />
          <Route exact path="/winningbids" element={<WinningBids />} />
          <Route exact path="/listing" element={<Listing />} />

          <Route exact path="addItem" element={<AddItem />} />

          <Route exact path="*" element={<Error />} />
          {/* * is used for and other router than defined routes or wrong route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
