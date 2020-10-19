import React from "react";
import { CalendarIcon } from "../../icons";
import Entries from "./Entries";

const SideBar = () => {
  return (
    <aside className="main__sidebar">
      <div className="main__sidebar_navbar">
        <h3>
          <span>Chara-</span>
        </h3>

        <button type="submit">Log out</button>
      </div>

      <div className="main__new_entry">
        <CalendarIcon />

        <p>New entry</p>
      </div>

      <Entries />
    </aside>
  );
};

export default SideBar;
