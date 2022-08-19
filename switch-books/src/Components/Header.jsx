import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../css/header.css";
// import BusinessIcon from "/images/switch-logo.png";
function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={'/images/logo-switch1.png'} alt="logo-img" className="switch-logo" />
      </Link>
      <div className="pages-container">
        <div>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </div>
        <div className="logos-container">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}
export default Header;
