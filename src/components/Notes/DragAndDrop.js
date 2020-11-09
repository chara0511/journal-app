import React from "react";
import { useDispatch } from "react-redux";
import { dragEnter, dragOver } from "../../actions/dragndrop";
import { fileUpload } from "../../actions/notes";
import Landscape from "../../images/Landscape";

const DragAndDrop = (props) => {
  const dispatch = useDispatch();

  const handleDragEnter = (e) => {
    e.preventDefault();
    dispatch(dragEnter());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    dispatch(dragOver());
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dispatch(fileUpload(e.dataTransfer.files[0], props));
  };

  return (
    <div className="notes__dragndrop">
      <h2>Upload your image</h2>

      <div
        className="notes__dragndrop_zone"
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
      >
        <p>File should be Jpeg, Png ...</p>

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
