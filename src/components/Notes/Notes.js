import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../../actions/notes";

import NotesBar from "./NotesBar";

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

    console.log(initialState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note.title, note.body, note.imageURL, note.updated]);

  const { body, date, imageURL, title } = noteForm;

  const handleUpdateNote = (updatedNote) =>
    dispatch(updateNote(note.id, updatedNote));

  const handleChange = ({ target }) => {
    setNoteForm({ ...noteForm, [target.name]: target.value });
  };

  const dateUpdatedFormatted = dayjs(currentDate).format("ddd, DD MMM.");
  const hourUpdatedFormatted = dayjs(currentDate).format("HH:mm:ss");

  return (
    <div className="notes__container">
      <NotesBar />

      <div className="notes__content">
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
          rows="10"
          name="body"
          value={body}
          onChange={handleChange}
          className="notes__textarea_desc"
          placeholder="What happened today?"
        />

        {imageURL && (
          <div className="notes__image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe0jSmwLBGW5btkr8uQuhg6xchkUw8GJQ0dw&usqp=CAU"
              alt=""
            />
          </div>
        )}

        <span>
          {dateUpdatedFormatted} - {hourUpdatedFormatted}
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
  );
};

export default Notes;
