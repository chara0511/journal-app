import React from "react";
import { TouchIcon } from "../../icons";

const Unselected = () => {
  return (
    <div className="unselected__container">
      <p>
        Select something <br /> or <br /> Create an entry!
      </p>

      <button>
        <TouchIcon />
      </button>
    </div>
  );
};

export default Unselected;
