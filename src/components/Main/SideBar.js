import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Entries from "./Entries";
import { logOut } from "../../actions/auth";
import { addNote } from "../../actions/notes";
import { AddIcon, LogoutIcon, MenuOpenIcon } from "../../icons";

const SideBar = ({ openSidebar, setOpenSidebar }) => {
  const dispatch = useDispatch();

  const { displayName } = useSelector((state) => state.auth);

  const handleNewNote = () => {
    dispatch(addNote());
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const showSideBar = openSidebar && "translateX(0px)";

  return (
    <aside className="main__sidebar" style={{ transform: showSideBar }}>
      <div className="main__sidebar_navbar">
        <h3>
          Welcome, <span>{displayName}</span>
        </h3>

        <button
          className="button_rounded"
          onClick={() => setOpenSidebar((prev) => !prev)}
        >
          <MenuOpenIcon />
        </button>
      </div>

      <button className="main__new_entry" onClick={handleNewNote}>
        <AddIcon />

        <p>New note</p>
      </button>

      <Entries />

      <button className="main__logout" onClick={handleLogOut}>
        <span>Log out</span> <LogoutIcon />
      </button>
    </aside>
  );
};

export default SideBar;
