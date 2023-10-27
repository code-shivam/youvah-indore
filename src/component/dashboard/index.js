import React from "react";
import Header from "../header";
import Interning from "../interning";
import Content from "../content";
import Opportunities from "../opportunities";
import './dashboard.css'

const DashBoard = () => {
  return (
    <div>
      <Header />
      <Interning />
      <div className="careerContainer">
        <Content />
        <Opportunities/>
      </div>
    </div>
  );
};

export default DashBoard;
