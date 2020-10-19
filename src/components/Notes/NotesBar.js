import React from "react";
import { MenuIcon } from "../../icons";

const NotesBar = () => {
  return (
    <div className="notes__bar">
      <button className="button_rounded">
        <MenuIcon />
      </button>

      <div>
        <button>Picture</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default NotesBar;
