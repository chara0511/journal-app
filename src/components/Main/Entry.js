import React from "react";

const Entry = () => {
  return (
    <div className="main__entry">
      <div
        className="main__entry_picture"
        style={{
          backgroundImage:
            "url('https://m.media-amazon.com/images/M/MV5BZDQxMjVmMjYtZTU4OC00MzRhLTljNTgtMTAwMDg3YzhlY2M4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg')",
        }}
      ></div>

      <div className="main__entry_content">
        <h3 className="main__entry_title">A good day</h3>
        <p className="main__entry_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="main__entry_date">
        <p>
          <span>Fri</span>, 5 Jun.
        </p>
      </div>
    </div>
  );
};

export default Entry;
