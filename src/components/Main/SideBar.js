import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Entries from "./Entries";
import { logOut } from "../../actions/auth";
import { addNote } from "../../actions/notes";
import { AddIcon, LogoutIcon, MenuOpenIcon } from "../../icons";
import { handleSidebar } from "../../actions/modals";

const SideBar = () => {
  const dispatch = useDispatch();

  const { displayName } = useSelector((state) => state.auth);
  const { sidebar } = useSelector((state) => state.modals);

  const handleNewNote = () => {
    dispatch(addNote());
    handleOpenSidebar();
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleOpenSidebar = () => {
    dispatch(handleSidebar());
  };

  const openSidebar = sidebar && "translateX(0px)";

  return (
    <aside className="main__sidebar" style={{ transform: openSidebar }}>
      <div className="main__sidebar_navbar">
        <h3>
          Welcome, <span>{displayName}</span>
        </h3>

        <button className="button_rounded" onClick={handleOpenSidebar}>
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
