import React from "react";
import { MenuIcon } from "../../icons";
import SideBar from "./SideBar";

const Main = () => {
  return (
    <div className="main__container">
      <SideBar />

      <main>
        <MenuIcon />
      </main>
    </div>
  );
};

export default Main;
