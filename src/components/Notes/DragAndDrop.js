import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dragEnter, dragOver } from "../../actions/dragndrop";
import { fileUpload } from "../../actions/notes";
import Landscape from "../../images/Landscape";
import ProgressBar from "../Main/ProgressBar";

const DragAndDrop = (props) => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.notes.active);

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
      <h1>Upload your image</h1>

      <div
        className="notes__dragndrop_zone"
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
      >
        <p>File should be Jpeg, Png ...</p>

        <div className="notes__dragndrop_image">
          {loading ? <ProgressBar /> : <Landscape />}
        </div>

        <p>Drag {"&"} Drop your image here </p>
      </div>

      <p>or</p>

      <button className="button_secondary_sm" onClick={props.handleChooseFile}>
        Choose a file
      </button>
    </div>
  );
};

export default DragAndDrop;
