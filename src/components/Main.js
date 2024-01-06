import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";

const Main = () => {
  return (
    <main className="main">
      <section>
        <div className="banner">
          <p className="paragraph-text">
            <span className="display-title yellow">Little Lemon</span>
            <br />
            <span className="display-subtitle">Chicago</span>
            <br />
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click" className="specials">
              Reserve Table
            </button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Main;
