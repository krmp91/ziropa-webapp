import React from "react";
import packageInfo1 from "../components/assets/nyhed1.jpeg";
import packageInfo2 from "../components/assets/nyhed2.jpeg";
import loremimg from "../components/assets/footimg1.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NewsPage() {
  return (
    <div style={{ height: "100%" }}>
      <div class="menu">
        <div class="food-items">
          <img src={packageInfo1}></img>
          <div class="details">
            <div class="details-sub">
              <h5>Opskrift</h5>
            </div>
            <p style={{ color: "black" }}>
              Se hvordan vi laver vores mest populere drink HUGO
            </p>
            <Link to="/News1">
              <button>Se mere</button>
            </Link>
          </div>
        </div>
        <div class="food-items">
          <img src={packageInfo2}></img>
          <div class="details">
            <div class="details-sub">
              <h5>Event</h5>
            </div>
            <p style={{ color: "black" }}>Aarhusfest hvor og hvornår?</p>

            <Link to="/News2">
              <button>Se mere</button>
            </Link>
          </div>
        </div>
        <div class="food-items">
          <img src={loremimg}></img>

          <div class="details">
            <div class="details-sub">
              <h5>Lorem</h5>
            </div>
            <p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              alias, natus voluptatem molestiae, inventore voluptas vel rem
              maiores tempore illo ea temporibus voluptatum doloremque eaque id
              perferendis ipsam vero officia!
            </p>
            <a href="#">
              <button>Se mere</button>
            </a>
          </div>
        </div>
        <div class="food-items">
          <img src={loremimg}></img>

          <div class="details">
            <div class="details-sub">
              <h5>Lorem</h5>
            </div>
            <p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              alias, natus voluptatem molestiae, inventore voluptas vel rem
              maiores tempore illo ea temporibus voluptatum doloremque eaque id
              perferendis ipsam vero officia!
            </p>
            <a href="#">
              <button>Se mere</button>
            </a>
          </div>
        </div>{" "}
        <div class="food-items">
          <img src={loremimg}></img>

          <div class="details">
            <div class="details-sub">
              <h5>Lorem</h5>
            </div>
            <p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              alias, natus voluptatem molestiae, inventore voluptas vel rem
              maiores tempore illo ea temporibus voluptatum doloremque eaque id
              perferendis ipsam vero officia!
            </p>
            <a href="#">
              <button>Se mere</button>
            </a>
          </div>
        </div>{" "}
        <div class="food-items">
          <img src={loremimg}></img>

          <div class="details">
            <div class="details-sub">
              <h5>Lorem</h5>
            </div>
            <p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              alias, natus voluptatem molestiae, inventore voluptas vel rem
              maiores tempore illo ea temporibus voluptatum doloremque eaque id
              perferendis ipsam vero officia!
            </p>
            <a href="#">
              <button>Se mere</button>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
