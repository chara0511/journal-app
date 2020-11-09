import React from "react";
import Landscape from "../../images/Landscape";

const DragAndDrop = () => {
  return (
    <div className="notes__dragndrop">
      <h2>Upload your image</h2>
      <p>File should be Jpeg, Png ...</p>

      <div className="notes__dragndrop_zone">
        <div className="notes__dragndrop_image">
          <Landscape />
        </div>
        <p>Drag {"&"} Drop your image here </p>
      </div>

      <p>or</p>

      <button>Choose a file</button>
    </div>
  );
};

export default DragAndDrop;
