import React from "react";
import "./content.css";
import { content } from "../constant";

const Content = () => {
  return (
    <div className="content">
      <span className="heading">Content:</span>
      <p className="totalTime">12 lessons• 2hr 3min • </p>

      <div>
        {content.map((item) => (
          <div className="contentDetails">
            <div className="details">
              <p className="id">{item.id}</p>
              <p className="title">{item.title}</p>
            </div>
            <p className="time">{item.time} • </p>
          </div>
        ))}
      </div>

      <div className="btncontainer">
        <button className="btn2">View All</button>
      </div>
    </div>
  );
};

export default Content;
