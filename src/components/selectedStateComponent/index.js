import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const SelectedStateComponent = ({ users }) => {
  const defaultUser = users[0]?.id;
  const [selectedUser, setSelectedUser] = useState(defaultUser);
  const selectRef = useRef(null);
  const handleUserChange = (event) => {
    const selectedUserId = event.target.value;
    setSelectedUser(selectedUserId);
  };

  useEffect(() => {
    setSelectedUser(defaultUser);
  }, [users]);

  const handleKeyDown = (event) => {
    const key = event.key;
    switch (key) {
      case "ArrowUp":
        selectPreviousOption();
        break;
      case "ArrowDown":
        selectNextOption();
        break;
      case "Enter":
        openDropdown();
        closeDropdown();
        break;
      case "Escape":
        closeDropdown();
        break;
      case "Home":
        selectFirstOption();
        break;
      case "End":
        selectLastOption();
        break;
      default:
        break;
    }
  };

  const openDropdown = () => {
    selectRef.current.size = users.length + 1;
  };

  const closeDropdown = () => {
    selectRef.current.size = 1;
  };

  const selectNextOption = () => {
    const currentIndex = users.findIndex((user) => user.id === selectedUser);
    if (currentIndex < users.length - 1) {
      const nextOption = users[currentIndex + 1];
      setSelectedUser(nextOption.id);
    }
  };

  const selectPreviousOption = () => {
    const currentIndex = users.findIndex((user) => user.id === selectedUser);
    if (currentIndex > 0) {
      const previousOption = users[currentIndex - 1];
      setSelectedUser(previousOption.id);
    }
  };

  const selectFirstOption = () => {
    setSelectedUser(users[0]?.id);
  };

  const selectLastOption = () => {
    setSelectedUser(users[users.length - 1]?.id);
  };

  return (
    <div className="Main-div-selected">
      <label className="My-select-label-selected">Selected state:</label>
      <select
        ref={selectRef}
        className="My-select-selected"
        value={selectedUser}
        onChange={handleUserChange}
        onKeyDown={handleKeyDown}
      >
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
      <span className="My-caret-selected"></span>
    </div>
  );
};

export default SelectedStateComponent;
