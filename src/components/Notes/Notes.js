import React from "react";
import NotesBar from "./NotesBar";

const Notes = () => {
  return (
    <div className="notes__container">
      <NotesBar />

      <div className="notes__content">
        <input
          className="notes__input_title"
          type="text"
          placeholder="Add amazing title"
        />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
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
