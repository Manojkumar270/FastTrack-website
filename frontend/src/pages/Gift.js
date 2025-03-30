import React from "react";
import Gifts from "../products/Gifts";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../store/cartslice/Cartslice";

const Gift = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
  };
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };
  return (
    <>
      <section class="watch-container1">
        <header>
          <p>
            <span>Home</span>
            {" > Watches"}
          </p>
          <div class="items">
            <p>
              <span>{Gifts.length} items found for</span> " Watches "
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

        <section class="watch-body row">
          {Gifts.map((item) => (
            <div class="col-lg-3" key={item.id}>
              <div class="card">
                <img src={item.img} class=" top" alt="..." />
                <div class="card-body">
                  <p class="card-text">{item.name}</p>
                  <p>
                    ₹{item.price} <span class="span1"> ₹2699 </span>
                    <span class="span2">30% off</span>
                  </p>
                  {cartProducts.find((Items) => Items.id == item.id) ? (
                    <button
                      class="btn btn-dark"
                      onClick={() => deleteCart(item)}
                    >
                      Remove From Bag
                    </button>
                  ) : (
                    <button class="btn btn-dark" onClick={() => addCart(item)}>
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

export default Gift;
