import React from 'react';
import { TouchIcon } from '../../icons';
import NotesBar from '../Notes/NotesBar';

const Unselected = () => {
  return (
    <div className="unselected__container">
      <NotesBar />

      <div className="unselected__content">
        <p>
          Select something
          <br />
          or
          <br />
          Create a new note.
        </p>

        <button type="button">
          <TouchIcon />
        </button>
      </div>
    </div>
  );
};

export default Unselected;
