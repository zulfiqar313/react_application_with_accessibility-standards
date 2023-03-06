import React, { useEffect, useState } from "react";
import "./style.css";

const OpenStateComponent = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <div className="Main-div-open">
      <label className="My-select-label-open">Open state:</label>
      <select
        className="My-select-open"
        size={isOpen ? users.length + 1 : 1}
        onClick={() => setIsOpen(!isOpen)}
      >
        <option value="" className="My-option-open">
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
      <span className="My-caret-open"></span>
    </div>
  );
};

export default OpenStateComponent;
