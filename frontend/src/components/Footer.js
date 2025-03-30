import React from "react";
import "./Footer.css";
import safe from "../images/safe.svg";
import premium from "../images/premium.svg";
import returnimg from "../images/return.svg";
import shipping from "../images/shipping.svg";
import logo2 from "../images/logo2.svg";
import facebook from "../images/fb.svg";
import twitter from "../images/twitter.svg";
import insta from "../images/insta.svg";
import youtube from "../images/youtube.svg";
import pinterest from "../images/pinterest.svg";
import playstore from "../images/playstore.svg";
import appstore from "../images/appstore.svg";
import visa from "../images/visa.svg";
import mastercard from "../images/mastercard.svg";
import paypal from "../images/paypal.svg";
import maestro from "../images/maestro.svg";
import rupay from "../images/rupay.svg";
import axis from "../images/axisbank.svg";
import icici from "../images/icicibank.svg";
import dinnerclub from "../images/DinnerClub.svg";
import americanExpress from "../images/americanExpress.svg";

const Footer = () => {
  return (
    <>
      <section class="head">
        <div>
          <img src={safe} alt="" />
          <p>SAFE AND SECURE CHECKOUT</p>
        </div>
        <div>
          <img src={premium} alt="" />
          <p>PREMIUM QUALITY PRODUCTS</p>
        </div>
        <div>
          <img src={returnimg} alt="" />
          <p>7 DAY RETURN</p>
        </div>
        <div>
          <img src={shipping} alt="" />
          <p>FREE SHIPPING NATIONWIDE</p>
        </div>
      </section>

      <section class="row body">
        <div class="col-lg-4 first">
          <img class="logo" src={logo2} />
          <div class="img-container1">
            <div>
              <img class="img-fluid fb" src={facebook} />
            </div>
            <div>
              <img class="img-fluid" src={twitter} />
            </div>
            <div>
              <img class="img-fluid" src={insta} />
            </div>
            <div>
              <img class="img-fluid" src={youtube} />
            </div>
            <div>
              <img class="img-fluid" src={pinterest} />
            </div>
          </div>
        </div>
        <div class="col-lg-2 ">
          <p>CUSTOMER SERVICE</p>
          <li>Payment Options</li>
          <li>Track Order</li>
          <li>Find a Store</li>
          <li>Encircle Program</li>
          <br />
          <br />
          <p>CONTACT US</p>

          <li>1800-266-0123</li>
          <li>customercare@titan.co.in</li>
          <li>FAQs</li>
        </div>
        <div class="col-lg-2">
          <p>POLICIES</p>

          <li>Brand Protection</li>
          <li>Cancellation</li>
          <li>Shipping</li>
          <li>Warranty Policies</li>
        </div>
        <div class="col-lg-4">
          <p>ABOUT FASTRACK</p>

          <li>About Us</li>
          <li>Help & Contact</li>
          <li>Careers</li>
          <br />
          <p>DOWNLOAD THE TITAN APP</p>
          <div class="apps">
            <img src={appstore} />
            <img src={playstore} />
          </div>
          <br />
          <p>NEED HELP?</p>
          <p>
            Chat with us on <span>WhatsApp</span>
          </p>
        </div>
      </section>
      <section class="terms">
        <p>Terms and Conditions | Privacy Policy</p>
      </section>
      <section class="footer-tail">
        <div class="start">
          <img src={visa} class="img-fluid" alt="" />
          <img src={mastercard} class="img-fluid" alt="" />
          <img src={paypal} class="img-fluid" alt="" />
          <img src={maestro} class="img-fluid" alt="" />
          <img src={rupay} class="img-fluid" alt="" />
          <img src={axis} class="img-fluid" alt="" />
          <img src={icici} class="img-fluid" alt="" />
          <img src={dinnerclub} class="img-fluid" alt="" />
          <img src={americanExpress} class="img-fluid" alt="" />
        </div>
        <div class="end">
          <p>© 2025 Titan Company Limited. All Rights Reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
