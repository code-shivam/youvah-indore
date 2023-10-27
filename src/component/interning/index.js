import React from "react";
import "./interning.css";
import { InterningImage } from "../constant";

const Interning = () => {
  return (
    <div className="interningContainer">
      <div className="interning">
        <p className="hesding">See where our students are interning </p>
        <div className="images">
          {InterningImage.map((item) => (
            <img className="interningimage" src={item} alt={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interning;
