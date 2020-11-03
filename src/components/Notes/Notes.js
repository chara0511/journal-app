import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import NotesBar from "./NotesBar";

const Notes = () => {
  const { active: note } = useSelector((state) => state.notes);

  const initialState = { title: note.title, body: note.body };

  const [noteForm, setNoteForm] = useState(initialState);

  const { title, body } = noteForm;

  console.log(note);
  useEffect(() => {
    setNoteForm(initialState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note.title, note.body]);

  const handleChange = (e) => {
    setNoteForm({ ...noteForm, [e.target.name]: e.target.value });
  };

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
          name="body"
          cols="30"
          rows="10"
          value={body}
          onChange={handleChange}
          className="notes__textarea_desc"
          placeholder="What happened today?"
        />

        <div className="notes__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe0jSmwLBGW5btkr8uQuhg6xchkUw8GJQ0dw&usqp=CAU"
            alt=""
          />
        </div>

        <span>Fri, 05 Jun.</span>
      </div>
    </div>
  );
};

export default Notes;
