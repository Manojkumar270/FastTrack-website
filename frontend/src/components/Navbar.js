import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import search from "../images/search.png";
import like from "../images/like.png";
import bag from "../images/bag.png";
import user from "../images/user.png";
import order from "../images/order.png";
import location from "../images/location.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProducts = useSelector((Items) => Items.cart.cartItems);
  const [menu, setMenu] = useState("");
  return (
    <>
      <section class="slider">
        Use code FIRST and Get 10% OFF* on Fresh Watches over Rs 2499. Maximum
        Discount: Rs.500. T&C Apply*
      </section>
      <section class="nav">
        <div>
          {" "}
          <Link to="/" onClick={() => setMenu("")}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div class="links">
          <ul>
            <Link to="/watch">
              <li
                onClick={() => setMenu("watch")}
                className={menu === "watch" ? "active" : ""}
              >
                WATCHES
              </li>
            </Link>
            <Link to="/smartwatches">
              <li
                onClick={() => setMenu("smartwatch")}
                className={menu === "smartwatch" ? "active" : ""}
              >
                SMART WATCHES
              </li>
            </Link>
            <Link to="/gift">
              <li
                onClick={() => setMenu("gift")}
                className={menu === "gift" ? "active" : ""}
              >
                GIFTING
              </li>
            </Link>

            <Link to="accessories">
              <li
                onClick={() => setMenu("accessories")}
                className={menu === "accessories" ? "active" : ""}
              >
                ACCESSORIES
              </li>
            </Link>

            <li>REFLEX TUNES</li>
            <li>SALE</li>

            <li>MORE</li>
          </ul>
        </div>
        <div class="tail">
          <i>
            <img src={search} alt="" />
          </i>
          <Link to="/upload">
            <i class="user">
              {" "}
              <img src={user} alt="" />
              <div class="popup">
                <p>admin</p>
                <Link to="/form">
                  <p>User</p>
                </Link>
              </div>
            </i>
          </Link>

          <i>
            <img src={like} alt="" />
          </i>
          <Link to="/cart">
            <i>
              <img class="bag-icon" src={bag} alt="" />
              {cartProducts.length ? (
                <span class="count">{cartProducts.length}</span>
              ) : (
                <span class="count-0">{cartProducts.length}</span>
              )}
            </i>
          </Link>

          <i>
            <img src={order} alt="" />
          </i>
        </div>
      </section>

      <section class="bottom">
        <img src={location} alt="" />
        <p>Select a location to check product availability</p>
        <a href="">Add Location</a>
      </section>
    </>
  );
};

export default Navbar;
