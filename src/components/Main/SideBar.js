import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../actions/notes";
import { AddIcon, MenuOpenIcon } from "../../icons";
import { handleSidebar } from "../../actions/modals";
import Entries from "./Entries";

const SideBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dispatch = useDispatch();

  const { displayName } = useSelector((state) => state.auth);
  const { sidebar } = useSelector((state) => state.modals);

  const handleNewNote = () => {
    dispatch(addNote());
    handleOpenSidebar();
  };

  const handleOpenSidebar = () => {
    dispatch(handleSidebar());
  };

  const openSidebar = sidebar && "translateX(0px)";

  const clockFormatted = dayjs(currentDate).format("ddd, DD MMM.");
  const clock2Formatted = dayjs(currentDate).format("HH:mm:ss");

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

      <div className="main__clock">
        <span>
          {clockFormatted} - {clock2Formatted}
        </span>
      </div>
    </aside>
  );
};

export default SideBar;
