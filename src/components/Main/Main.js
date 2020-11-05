import React, { useState } from "react";
import { useSelector } from "react-redux";
import Notes from "../Notes/Notes";
import SideBar from "./SideBar";
import Unselected from "./Unselected";

const Main = () => {
  const { active } = useSelector((state) => state.notes);

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="main__container">
      <SideBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <main>
        {active ? (
          <Notes setOpenSidebar={setOpenSidebar} />
        ) : (
          <Unselected setOpenSidebar={setOpenSidebar} />
        )}
      </main>
    </div>
  );
};

export default Main;
