import React, { useState, useEffect } from "react";
import { Component } from "react";
import packageInfo from "../components/assets/orangecocktail1.jpg";
import packageInfo1 from "../components/assets/imgprodukter.JPG";
import packageInfo2 from "../components/assets/imgprodukter1.JPG";
import packageInfo3 from "../components/assets/footimg.png";
import slideinfo1 from "../components/assets/slide1.jpeg";
import slideinfo2 from "../components/assets/slide2.jpeg";
import slideinfo3 from "../components/assets/slide3.JPG";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { GoLocation } from 'react-icons/go';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { ElfsightWidget } from 'react-elfsight-widget';





const buttonStyle = {
  padding: "15px",
  borderRadius: "50%",
  background: "#A7915E",
  opacity: 0.7,
  fontSize: "20px",
};
const contentStyle = {
  color: "black",
  fontSize: "20px",
};
const bgImg = {
  position: "absolute",
  zIndex: -1,
  left: 0,
  top: 0,
  width: "100%",
};

const fot = {
  fontSize: "20px",
};

export default function HomePage() {
  return (
    <html>
      <img className="backgroundHome" src={packageInfo}></img>
      <div className="home">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "24% 49% 24%",
            gridGap: 20,
            justifyContent: "",
          }}
        >
          <div>
            <Link to="/products">
              <h1 className="h1produkt"> Produkter</h1>
              <img className="backgroundHome1" src={packageInfo2}></img>
            </Link>
            <Link to="/inspiration">
              <h1 className="h1produkt"> Inspiration</h1>
              <img className="backgroundHome1" src={packageInfo1}></img>
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
                  <img style={bgImg} alt="Wow" src={slideinfo1} />
                  <h1>Microsoft</h1>
                  <h2>Nice to see you</h2>
                  <button className="button-56"> Click Me </button>
                </div>
              </div>
            </AwesomeSlider>
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
                  <img style={bgImg} alt="Wow" src={slideinfo1} />
                  <h1>Microsoft</h1>
                  <h2>Nice to see you</h2>
                  <button className="button-56"> Click Me </button>
                </div>
              </div>

              <div style={{ zIndex: 2 }}>
                <div>
                  <img style={bgImg} alt="Wow" src={slideinfo2} />
                  <h1>Microsoft</h1>
                  <h2>Nice to see you</h2>
                  <button className="button-56"> Click Me </button>
                </div>
              </div>

              <div style={{ zIndex: 2 }}>
                <div>
                  <img style={bgImg} alt="Wow" src={slideinfo3} />
                  <h1>Microsoft</h1>
                  <h2>Nice to see you</h2>
                  <button className="button-56"> Click Me </button>
                </div>
              </div>
            </AwesomeSlider>
          </div>

          <div>


          <ElfsightWidget widgetID="57a3de4c-6be9-46a4-9366-453a0fe3eafb" />
          </div>
        </div>
      </div>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
      <Footer 
style={fot}
    columns={[
      
      {
        
        title: 'Kontakt os',
        items: [
          {
            title: "Kontakt os",
            items: [
              {
                icon: <GoLocation />,
                title: "Universitetsbyen 14, 8000 Aarhus",
                openExternal: true,
              },
              {
                icon: <AiOutlineMail />,
                title: "info@ziropasirup.dk",
                openExternal: true,
              },
              {
                icon: <AiOutlinePhone />,
                title: "+4529130223",
              },
            ],
          },
          {
            icon: <AiOutlinePhone/>,
            title: '+4529130223',
          },
        ],
      },
      {
        title: 'Følg os',
        items: [
          {
            icon: <BsFacebook/>, 
            title:"Facebook",
            url: 'https://www.facebook.com/ziropasirup',
            openExternal: true,
          },
          {
            icon:<BsInstagram/>,
            title: 'Instagram',
            url: 'https://mobile.ant.design/',
            openExternal: true,
        
          }
         
        ],
      },
      
    ]}
    
    img  src={packageInfo3}
  />



    </html>
  );
}
