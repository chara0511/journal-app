import dayjs from "dayjs";
import React from "react";

const Entry = ({ body, date, id, title, url }) => {
  const dateFormatted = dayjs(date).format("ddd, DD MMM.");
  const hourFormatted = dayjs(date).format("HH:mm:ss");

  return (
    <div className="main__entry">
      {url && (
        <div
          className="main__entry_picture"
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="main__entry_content">
        <h3 className="main__entry_title">{title}</h3>
        <p className="main__entry_description">{body}</p>
      </div>

      <div className="main__entry_date">
        <p>
          <span>{dateFormatted}</span> {hourFormatted}
        </p>
      </div>
    </div>
  );
};

export default Entry;
