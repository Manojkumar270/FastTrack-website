import React, { useEffect, useState } from "react";
import smartWatches from "../products/Smartwatches";
import banner from "../images/sw-banner.webp";
import "./Smartwatch.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../store/cartslice/Cartslice";

const Smartwatch = () => {
  const cartProducts = useSelector((Items) => Items.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
  };
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5001/watches")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //       console.log(products);
  //     });
  // }, []);

  return (
    <>
      <section class="smart-watch-container">
        <header>
          <p>
            <span>Home</span>
            {" > Smart Watches"}
          </p>
          <div>
            {" "}
            <img src={banner} class="img-fluid " />
          </div>

          <br />
          <br />
          <div class="items">
            <p>
              <span>{smartWatches.length} items found for</span> "Smart Watches
              "
            </p>
          </div>
          <div class="drop-container">
            <div class="dropdown">
              <a
                class="drop btn btn-light dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </a>

              <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                <li class="drop-menu">
                  <a class="dropdown-item drop-menu" href="#">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Popularity
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Discount
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Price : High to Low
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Price :Low to High
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Fastrack Recommends
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" class="btn btn-light">
              Show Filters
            </button>
          </div>
        </header>
        <br />
        <br />

        <section class="smart-watch-body row">
          {smartWatches
            // .filter((Items) => Items.des == "smartwatch")
            .map((item) => (
              <div class="col-lg-3">
                <div class="card cd">
                  <img src={item.img} class=" top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">{item.name}</p>

                    <p>
                      ₹{item.price} <span class="span1"> ₹2699 </span>
                      <span class="span2">30% off</span>
                    </p>
                    {cartProducts.find((Items) => Items.id === item.id) ? (
                      <button
                        class="btn btn-dark"
                        onClick={() => deleteCart(item)}
                      >
                        Remove From Bag
                      </button>
                    ) : (
                      <button
                        class="btn-dark btn"
                        onClick={() => addCart(item)}
                      >
                        Add To Bag
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </section>
      </section>
    </>
  );
};

export default Smartwatch;
