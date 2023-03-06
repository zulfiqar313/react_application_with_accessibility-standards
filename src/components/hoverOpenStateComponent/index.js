import React, { useEffect, useState } from "react";
import "./style.css";

const HoverOpenStateComponent = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <div className="Main-div-hover-open">
      <label className="My-select-label-hover-open">
        Open state with hover effect:
      </label>
      <select
        className="My-select-hover-open"
        size={isOpen ? users.length + 1 : 1}
        onClick={() => setIsOpen(!isOpen)}
      >
        <option value="">Select a person</option>
        {users.map((item, key) => (
          <option
            key={key}
            value={item.id}
            className="My-option-hover-open"
            style={{ backgroundImage: `url(${item.avatar})` }}
          >
            {item.first_name} {item.last_name}
          </option>
        ))}
      </select>
      <span className="My-caret-hover-open"></span>
    </div>
  );
};

export default HoverOpenStateComponent;
