import React from "react";
import "./style.css";

const DefaultDropDownComponentWithFocus = () => {
  return (
    <div className="Main-div-focus">
      <label className="My-select-label-focus">
        Default dropdown state in focus:
      </label>
      <select className="My-select-focus" >
        <option value="">Select a person</option>
      </select>
      <span className="My-caret-focus"></span>
    </div>
  );
};

export default DefaultDropDownComponentWithFocus;
