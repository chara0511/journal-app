import React from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { activeNote } from '../../actions/notes';
import { handleSidebar } from '../../actions/modals';

const Entry = ({ body, date, id, imageURL, title, updated }) => {
  const dateFormatted = dayjs(date).format('ddd, DD MMM.');

  const dispatch = useDispatch();

  const handleActiveNote = () => {
    dispatch(activeNote(id, { body, date, id, imageURL, title, updated }));
    dispatch(handleSidebar());
  };

  return (
    <div className="main__entry" onClick={handleActiveNote}>
      {imageURL && (
        <div
          className="main__entry_picture"
          style={{
            backgroundImage: `url(${imageURL})`,
          }}
        />
      )}

      <div className="main__entry_content">
        <h3 className="main__entry_title">{title}</h3>
        <p className="main__entry_description">{body}</p>
      </div>

      <div className="main__entry_date">
        <p>
          <span>{dateFormatted}</span>
        </p>
      </div>
    </div>
  );
};

Entry.propTypes = {
  body: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  updated: PropTypes.number,
};

export default Entry;
