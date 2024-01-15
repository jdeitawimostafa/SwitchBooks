/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col" required>
            <h4>SwitchBooks </h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>{" "}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="#">Send an email to </a>
              </li>
              <li>
                <a href="#">SwitchCompany@support.com</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <ul>
              <li>
                <a href="#">
                  Jordan – Amman
                  <br />
                  email: Switch@Test.com
                  <br />
                  <br />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow us</h4>
            <div className="social-links">
              <a href="/">
                <FacebookIcon />
              </a>
              <a href="/">
                <InstagramIcon />
              </a>
              <a href="/">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
