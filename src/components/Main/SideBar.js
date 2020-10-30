import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../actions/auth";
import { CalendarIcon, LogoutIcon, MenuOpenIcon } from "../../icons";
import Entries from "./Entries";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <aside className="main__sidebar">
      <div className="main__sidebar_navbar">
        <h3>
          Welcome, <span>Chara-</span>
        </h3>

        <button className="button_rounded">
          <MenuOpenIcon />
        </button>
      </div>

      <div className="main__new_entry">
        <CalendarIcon />

        <p>New entry</p>
      </div>

      <Entries />

      <button className="main__logout" onClick={handleLogOut}>
        <span>Log out</span> <LogoutIcon />
      </button>
    </aside>
  );
};

export default SideBar;
