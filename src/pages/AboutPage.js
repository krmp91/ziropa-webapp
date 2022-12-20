import React, { Fragment, useState } from "react";

const About = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <Fragment>
      <section className="about" style={{ height: "70vh" }}>
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>

          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>Om os</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>Mission</h2>
              </div>
            </div>

            <div className="tab-content">
              {/* About Content */}

              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>Vores Historie</h2>
                <p style={{ color: "black" }}>
                  Vi startede i 2018 med en vision om at lave sirup på naturlige
                  råvarer.{" "}
                </p>
                <h3>Holdet Bag</h3>
                <p style={{ color: "black" }}>
                  Ideen om at producere naturlig sirup kom en dag, hvor vi
                  sammen sad og nød en kold drink. Her undrede vi os over,
                  hvorfor sirup skulle være tilsat smagsforstærkere. Den
                  naturlige aroma, som vi mener, at god sirup skulle smage af,
                  fandtes altså ikke på markedet. Med henblik på at producere
                  friskere sirup og gøre din næste drink eller morgenkaffe det
                  bedre, så startede vi vores virksomhed, Ziropa.
                </p>
              </div>

              {/* Skills Content */}

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <h2>Den gode smag til de gode stunder</h2>
                <p>
                  Hos Ziropa sirup er vi drevet af en passion for sirup, men
                  helt grundlæggende ligger vores kærlighed inden for de
                  naturlige råvarer. Vi tror på, at sirup og fødevarer generelt
                  smager bedst, når de er lavet på friske naturlige råvarer.
                  Derfor er kvalitet, det vigtigste for os.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
