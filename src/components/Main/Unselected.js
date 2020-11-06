import React from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../actions/modals";
import { TouchIcon } from "../../icons";
import NotesBar from "../Notes/NotesBar";

const Unselected = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="unselected__container">
        <NotesBar />

        <div
          className="unselected__content"
          onClick={() => dispatch(hideModal())}
        >
          <p>
            Select something <br /> or <br /> Create a new note.
          </p>

          <button>
            <TouchIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Unselected;
