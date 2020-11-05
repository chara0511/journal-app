import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, fileUpload } from "../../actions/notes";
import dayjs from "dayjs";

import NotesBar from "./NotesBar";
import { MoreIcon } from "../../icons";

const relativeTime = require("dayjs/plugin/relativeTime");
// journal-app

const Notes = () => {
  const { active: note } = useSelector((state) => state.notes);

  const initialState = {
    body: note.body,
    date: note.date,
    imageURL: note.imageURL,
    title: note.title,
    updated: note.updated,
  };

  const [noteForm, setNoteForm] = useState(initialState);
  const [currentDate, setCurrentDate] = useState(new Date().getTime());

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setNoteForm(initialState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note.title, note.body, note.imageURL, note.updated]);

  const { body, date, imageURL, updated, title } = noteForm;

  const handleUpdateNote = (updatedNote) =>
    dispatch(updateNote(note.id, updatedNote));

  const handleChange = ({ target }) => {
    setNoteForm({ ...noteForm, [target.name]: target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(fileUpload(file));
    }
  };

  const handleChooseFile = () => {
    document.querySelector("#file").click();
  };

  const dayFormatted = dayjs(date).format("DD");
  const monthFormatted = dayjs(date).format("MMM");

  dayjs.extend(relativeTime);

  const lastUpdated = dayjs().to(dayjs(updated));
  const clockFormatted = dayjs(currentDate).format("ddd, DD MMM.");
  const clock2Formatted = dayjs(currentDate).format("HH:mm:ss");

  return (
    <div className="notes__container">
      <NotesBar />

      <div className="notes__card">
        {imageURL && (
          <div className="notes__image">
            <img src={imageURL} alt={title} />
          </div>
        )}

        <div className="notes__date">
          <span>{dayFormatted}</span>
          <span>{monthFormatted}</span>
        </div>

        <button className="big_button_rounded">
          <MoreIcon />
        </button>

        <div className="notes__card_content">
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="notes__input_title"
            placeholder="Add amazing title"
          />

          <textarea
            id=""
            cols="30"
            rows="4"
            name="body"
            value={body}
            onChange={handleChange}
            className="notes__textarea_desc"
            placeholder="What happened today?"
          />

          <input
            id="file"
            name="file"
            type="file"
            onChange={handleFile}
            style={{ display: "none" }}
          />

          <button onClick={handleChooseFile}>Choose a file</button>

          <span>
            {lastUpdated} -{clockFormatted} - {clock2Formatted}
          </span>

          <button
            onClick={() =>
              handleUpdateNote({
                body,
                date,
                imageURL,
                title,
                updated: new Date().getTime(),
              })
            }
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
