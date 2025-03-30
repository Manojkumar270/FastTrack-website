import React from "react";
import watch1 from "../images/watch1.webp";
import watch2 from "../images/watch2.webp";
import watch3 from "../images/watch3.webp";
import watch4 from "../images/watch4.webp";
import "./WatchContainer.css";

const WatchContainer = () => {
  return (
    <>
      <section class="watch-container">
        <div class="card">
          <img src={watch1} class=" top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Fastrack Vyb Challenger Quartz Analog Black Dial Black Color...
            </p>
            <p>
              ₹1699 <span class="span1"> ₹2699 </span>
              <span class="span2">30% off</span>
            </p>
            <a href="#" class="btn btn-dark">
              Buy Now
            </a>
          </div>
        </div>

        <div class="card">
          <img src={watch4} class=" top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Vyb Slayer By Fastrack Quartz Analog White Dial Metal Strap ...
            </p>
            <p>
              ₹1699 <span class="span1">₹2699 </span>
              <span class="span2">30% off</span>
            </p>
            <a href="#" class="btn btn-dark">
              Buy Now
            </a>
          </div>
        </div>
        <div class="card">
          <img src={watch3} class=" top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Vyb Showstopper By Fastrack Quartz Analog Silver Dial Metal ...
            </p>
            <p>
              ₹1699 <span class="span1">₹2699 </span>
              <span class="span2">30% off</span>
            </p>
            <a href="#" class="btn btn-dark">
              Buy Now
            </a>
          </div>
        </div>
        <div class="card">
          <img src={watch2} class=" top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Vyb Eclipse By Fastrack Quartz Analog Black Dial Metal Strap...
            </p>
            <p>
              ₹1699 <span class="span1">₹2699 </span>
              <span class="span2">30% off</span>
            </p>
            <a href="#" class="btn btn-dark">
              Buy Now
            </a>
          </div>
        </div>
        <div class="card">
          <img src={watch4} class=" top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              ₹1699 <span class="span1"> ₹2699 </span>
              <span class="span2">30% off</span>
            </p>
            <a href="#" class="btn btn-dark">
              Buy Now
            </a>
          </div>
        </div>
        <div class="card">
          <img src={watch4} class=" top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              ₹1699 <span class="span1"> ₹2699 </span>
              <span class="span2">30% off</span>
            </p>
            <a href="#" class="btn btn-dark">
              Buy Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchContainer;
