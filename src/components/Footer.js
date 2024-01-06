import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="conpany-info">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br />
              987 Some Road, CA
            </li>
            <li>
              Phone: <br />
              987 654 321
            </li>
            <li>
              Email: <br />
              contact@littlelemon.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Socials</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
