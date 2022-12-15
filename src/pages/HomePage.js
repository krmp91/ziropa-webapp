import React, { useState, useEffect } from 'react';
import { Component } from "react";
import  packageInfo from "../components/assets/orangecocktail1.jpg";
import  packageInfo1 from "../components/assets/imgprodukter.JPG";
import  packageInfo2 from "../components/assets/imgprodukter1.JPG";
import  slideinfo1 from "../components/assets/slide1.jpeg";
import  slideinfo2 from "../components/assets/slide2.jpeg";
import  slideinfo3 from "../components/assets/slide3.JPG";

const Thumbnail = ({ arr, image, index }) => {
  return (<div className="tumbnail">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active' : ''}
        />
      ))
    }
  </div>)
}

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>⬅️</button>
        <button onClick={next}>➡️</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  )
}


export default function HomePage() {
  return (
<html >
<img className="backgroundHome" src={packageInfo}></img>
    <div className="home">



  <div style={{ display: "grid", gridTemplateColumns: "24% 49% 24% auto", gridGap: 20 }}>
    <div>
     
      <h1 className='h1produkt'> Produkter</h1>
      <img className="backgroundHome1" src={packageInfo2}></img>
     
     
      <h1 className='h1produkt'> Inspiration</h1>
      <img className="backgroundHome1" src={packageInfo1} ></img>
      
    </div>

{/* column mid */}
    <div> <div className="App">

<Slideshow className="slide"
  imgs={[
    slideinfo1,
    slideinfo2,
    slideinfo3
     
  ]}
/>
</div>
</div>

    <div>Column 3</div>
  </div>

   
      

     
    </div>

    </html>


  );
}
