import React from "react";
import "./style.css";

const DefaultDropdownComponent = () => {
  return (
    <div className="Main-div-default">
      <label className="My-select-label-default">Default dropdown state:</label>
      <select className="My-select-default">
        <option value="">Select a person</option>
      </select>
      <span className="My-caret-default"></span>
    </div>
  );
};

export default DefaultDropdownComponent;
