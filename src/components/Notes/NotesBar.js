import React from "react";
import { ArrowDown, MenuIcon } from "../../icons";

const NotesBar = ({ setOpenSidebar }) => {
  return (
    <div className="notes__bar">
      <button
        className="button_rounded"
        onClick={() => setOpenSidebar((prev) => !prev)}
      >
        <MenuIcon />
      </button>

      <div className="notes__bar_profile">
        <img
          src="https://res.cloudinary.com/dfvra50ch/image/upload/v1604555177/o0w9yb5kdsmtfse3fzle.jpg"
          alt="profile"
        />

        <button className="notes__bar_profile_btn">
          <span>Chara- </span>

          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default NotesBar;
