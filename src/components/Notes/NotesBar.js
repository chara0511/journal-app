import React from "react";
import { useDispatch } from "react-redux";
import { hideModal, handleSidebar } from "../../actions/modals";
import {
  ArrowDown,
  LogoutIcon,
  MenuIcon,
  NoteIcon,
  ProfileIcon,
} from "../../icons";

const NotesBar = () => {
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(handleSidebar());
  };

  return (
    <div className="notes__bar">
      <button className="button_rounded" onClick={handleOpenSidebar}>
        <MenuIcon />
      </button>

      <button onClick={() => dispatch(hideModal())}>hide</button>

      <div className="notes__bar_profile">
        <img
          src="https://res.cloudinary.com/dfvra50ch/image/upload/v1604555177/o0w9yb5kdsmtfse3fzle.jpg"
          alt="profile"
        />

        <button className="notes__bar_profile_btn">
          <span>Chara- </span>

          <ArrowDown />
        </button>

        <div className="notes__bar_modal">
          <ul>
            <li>
              <ProfileIcon />
              <span>My Profile</span>
            </li>

            <li>
              <NoteIcon />
              <span>My Notes</span>
            </li>

            <hr />

            <li>
              <LogoutIcon />
              <span>Log out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotesBar;
