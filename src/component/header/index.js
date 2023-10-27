import React from "react";
import "./header.css";
import leftImage from "../asset/CW2.png";
import rightImage from "../asset/CW1.png";
import arrow from "../asset/arrow.png";
import banner from "../asset/visual-31.png";

const Header = () => {
  return (
    <div className="headContainer">
      <img className="bannerImage" src={banner} alt="banner" />
      <img className="leftImage" src={leftImage} alt="image1" />
      <div className="subContainer">
        <div className="headingarrow">
          <img className="arrow" src={arrow} alt="image2" />
          <span className="heading">Ace Our Single Shot Challenge !</span>
        </div>
        <p className="subHeading">
          Jumpstart Your Career with Our Free Assessment Test: Prove Your Skills
          and Secure an Internship Today!
        </p>
        <button className="btn1">Take A Free Assessment</button>
      </div>
      <img className="leftImage" src={rightImage} alt="image3" />
    </div>
  );
};

export default Header;
