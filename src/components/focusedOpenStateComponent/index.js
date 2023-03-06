import React, { useEffect, useState } from "react";
import "./style.css";

const FocusedOpenStateComponent = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <div className="Main-div-focused-open">
      <label className="My-select-label-focused-open">
        Open state in focus:
      </label>
      <select
        className="My-select-focused-open"
        size={isOpen ? users.length + 1 : 1}
        onClick={() => setIsOpen(!isOpen)}
        autoFocus
      >
        <option value="" className="My-option-focused-open">
          Select a person
        </option>
        {users.map((item, key) => (
          <option
            key={key}
            value={item.id}
            style={{ backgroundImage: `url(${item.avatar})` }}
          >
            {item.first_name} {item.last_name}
          </option>
        ))}
      </select>
      <span className="My-caret-focused-open"></span>
    </div>
  );
};

export default FocusedOpenStateComponent;
