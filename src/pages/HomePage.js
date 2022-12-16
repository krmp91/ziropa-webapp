import React, { useState, useEffect } from "react";
import { Component } from "react";
import  packageInfo from "../components/assets/orangecocktail1.jpg";
import  packageInfo1 from "../components/assets/imgprodukter.JPG";
import  packageInfo2 from "../components/assets/imgprodukter1.JPG";
import  slideinfo1 from "../components/assets/slide1.jpeg";
import  slideinfo2 from "../components/assets/slide2.jpeg";
import  slideinfo3 from "../components/assets/slide3.JPG";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";

const buttonStyle = {
  padding: "15px",
  borderRadius: "50%",
  background: "red",
  opacity: 0.7,
  fontSize: "20px"
};
const contentStyle = {
  color: "black",
  fontSize: "20px"
};
const bgImg = {
  position: "absolute",
  zIndex: -1,
  left: 0,
  top: 0,
  width: "100%"
};

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="tumbnail">
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? "active" : ""}
        />
      ))}
    </div>
  );
};

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>⬅️</button>
        <button onClick={next}>➡️</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  );
};

export default function HomePage() {
  return (
<html >
<img className="backgroundHome" src={packageInfo}></img>
    <div className="home">



  <div style={{ display: "grid", gridTemplateColumns: "24% 49% 24%", gridGap: 20 }}>
    <div>
      <Link to="/products">
      <h1 className='h1produkt'> Produkter</h1>
      <img className="backgroundHome1" src={packageInfo2}></img>
      </Link>
      <Link to="/inspiration">
      <h1 className='h1produkt'> Inspiration</h1>
      <img className="backgroundHome1" src={packageInfo1} ></img>
      </Link>
    </div>

          {/* column mid */}
          <div>
            
          <AwesomeSlider
      organicArrows={false}
      buttonContentRight={<p style={buttonStyle}>{">"}</p>}
      buttonContentLeft={<p style={buttonStyle}>{"<"}</p>}
      play
      // customContent={<p style={contentStyle}>{"I am the content/text"}</p>}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div style={{ zIndex: 2 }}>
        <div>
          <img
            style={bgImg}
            alt="Wow"
            src={slideinfo1}
          />
          <h1>Microsoft</h1>
          <h2>Nice to see you</h2>
          <button> Click Me </button>
        </div>
      </div>

      <div style={{ zIndex: 2 }}>
        <div>
          <img
            style={bgImg}
            alt="Wow"
            src={slideinfo2}
          />
          <h1>Microsoft</h1>
          <h2>Nice to see you</h2>
          <button> Click Me </button>
        </div>
      </div>
      
    </AwesomeSlider>
          </div>

          <div>Column 3</div>
        </div>
      </div>


      
   
    </html>



  );

}


