import "./App.css";
import React, { useState, useEffect } from "react";
import { fetchUsers } from "./api";
import DefaultDropdownComponent from "./components/defaultDropdownComponent";
import DefaultDropdownComponentWithFocus from "./components/defaultDropDownComponentWithFocus";
import SelectedStateComponent from "./components/selectedStateComponent";
import OpenStateComponent from "./components/openStateComponent";
import FocusedOpenStateComponent from "./components/focusedOpenStateComponent";
import HoverOpenStateComponent from "./components/hoverOpenStateComponent";

function App() {
  const [users, setUsers] = useState([]);

  const callUsersAPI = async () => {
    const res = await fetchUsers();
    setUsers(res);
  };

  useEffect(() => {
    callUsersAPI();
  }, []);
  console.log(users, "users");
  return (
    <div className="App-div">
      <DefaultDropdownComponent />
      <DefaultDropdownComponentWithFocus />
      <SelectedStateComponent users={users} />
      <OpenStateComponent users={users} />
      <FocusedOpenStateComponent users={users} />
      <HoverOpenStateComponent users={users} />
    </div>
  );
}

export default App;
