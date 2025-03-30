import React from "react";
import "./Home.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.webp";
import offer from "../images/offer.webp";
import Carousel from "../components/Carousel";

import style1 from "../images/style1.jpg";
import style2 from "../images/style2.jpg";
import style3 from "../images/Style3.jpg";
import WatchContainer from "../components/WatchContainer";

const Home = () => {
  return (
    <>
      <Carousel />
      <br />
      <br />
      <br />
      <section class="img-container">
        <div class="">
          <img src={img1} class="" alt="" />
        </div>
        <div class=" ">
          <img src={img2} class="" alt="" />
        </div>
        <div class="">
          <img src={img3} class="" alt="" />
        </div>
        <div class="last-img">
          <img src={img4} class="" alt="" />
        </div>
        <div class="last">
          <p>FASTRACK CATEGORIES</p>
        </div>
      </section>

      <div class="offer-banner">
        <img src={offer} class="img-fluid" alt="" />
      </div>

      <div className="text-banner">
        <p>Trending</p>
      </div>

      <br />
      <h3 className="trend-text">TRENDING</h3>
      <br />

      <WatchContainer />

      <h3 class="vibe">SHOP YOUR VIBE</h3>
      <br />
      <br />

      <section class="styles">
        <div class="row">
          <div class="col-lg-4">
            <img class=" img-fluid" src={style1} alt="" />
          </div>
          <div class="col-lg-4">
            <img class=" img-fluid" src={style2} alt="" />
          </div>

          <div class="col-lg-4">
            <img class=" img-fluid" src={style3} alt="" />
          </div>
        </div>
      </section>
      <br />
      <h3>BEST SELLERS</h3>
      <br />
      <WatchContainer />
    </>
  );
};

export default Home;
