import React from "react";
import Notes from "../Notes/Notes";
import SideBar from "./SideBar";
//import Unselected from "./Unselected";

const Main = () => {
  return (
    <div className="main__container">
      <SideBar />

      <main>
        {/* <Unselected /> */}
        <Notes />
      </main>
    </div>
  );
};

export default Main;
