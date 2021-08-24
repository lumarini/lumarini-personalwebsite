import React from "react";

function Footer() {
  return (
    <div className="icons">
      <ul>
        <li>
          <a hre f="http://www.google.com">
            <i className="fas fa-address-card" />
          </a>
        </li>
        <li>
          <a href="http://www.google.com">
            <i className="fas fa-file-code" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luciana-piasecki-marini-79ab21187/">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="mailto:lupiaseckimarini@gmail.com">
            <i className="fas fa-envelope" />
          </a>
        </li>
      </ul>
      <br />
      <footer>
        <p className="footer">LP Marini © Copyright 2021</p>
      </footer>
    </div>
  );
}

export default Footer;
