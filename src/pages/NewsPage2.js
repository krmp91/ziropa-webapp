import React, { Fragment, useState } from "react";
import Footer from "../components/Footer";

export default function NewsPage2() {
  return (
    <Fragment>
      <section className="about" style={{ height: "100%" }}>
        <div className="row">
          <div className="column">
            <div className="news2"></div>
          </div>

          <div className="column">
            <div className="tabs"></div>

            <div className="tab-content">
              {/* About Content */}

              <div className="nyhedtekst">
                <h2>Event</h2>
                <p>Det Aarhusfest uge lige om lidt</p>
                <br></br>

                <p>
                  1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, alias, natus voluptatem molestiae, inventore voluptas
                  vel rem maiores tempore illo ea temporibus voluptatum
                  doloremque eaque id perferendis ipsam vero officia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
