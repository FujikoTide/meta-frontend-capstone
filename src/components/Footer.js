import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="logo" />
        </div>
        <div className="green">
          <h3 className="specials">Contact</h3>
          <ul>
            <li className="paragraph-text">
              Address: <br />
              987 Some Road, IL
            </li>
            <li className="paragraph-text">
              Phone: <br />
              987 654 321
            </li>
            <li className="paragraph-text">
              Email: <br />
              contact@littlelemon.com
            </li>
          </ul>
        </div>
        <div>
          <h3 className="specials green">Socials</h3>
          <ul>
            <li className="paragraph-text">
              <a href="https://www.facebook.com" className="green">
                Facebook
              </a>
            </li>
            <li className="paragraph-text">
              <a href="https://www.instagram.com" className="green">
                Instagram
              </a>
            </li>
            <li className="paragraph-text">
              <a href="https://www.twitter.com" className="green">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
