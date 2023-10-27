import React from "react";
import { opportunities } from "../constant";
import "./opportunities.css";

const Opportunities = () => {
  return (
    <div className="opportunities">
      {opportunities?.map((item) => (
        <div className="detailsContainer">
          <img className="tag" src={item.img} alt="tag" />
          <div className="card" style={{ background: item.color }}>
            <p className="cardTitle">{item.title}</p>
            {item.details.map((item) => (
              <li>{item}</li>
            ))}
          </div>
        </div>
      ))}
      <div className="footerSection">
        <div className="price">
          <p className="amount">₹1000</p>
          <div className="discountPrice">
            <p className="discountAmount">₹2000</p>
            <p className="discountPercent">50% off</p>
          </div>
        </div>
        <button className="btnu1">Buy Now</button>
      </div>
    </div>
  );
};

export default Opportunities;
