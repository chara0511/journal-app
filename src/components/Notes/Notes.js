import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote, fileUpload, deleteNote } from '../../actions/notes';
import { showCardModal } from '../../actions/modals';
import NotesBar from './NotesBar';
import { DeleteIcon, MoreIcon, NewImageIcon } from '../../icons';
import DragAndDrop from './DragAndDrop';
import ProgressBar from '../Main/ProgressBar';

const relativeTime = require('dayjs/plugin/relativeTime');

const Notes = () => {
  const { active: note } = useSelector((state) => state.notes);
  const { card } = useSelector((state) => state.modals);

  const initialState = {
    body: note.body,
    date: note.date,
    id: note.id,
    imageURL: note.imageURL,
    title: note.title,
    updated: note.updated,
  };

  const [noteForm, setNoteForm] = useState(initialState);

  useEffect(() => {
    setNoteForm(initialState);
  }, [note.title, note.body, note.imageURL, note.updated]);

  const { body, date, imageURL, updated, title } = noteForm;

  const dispatch = useDispatch();

  const handleUpdateNote = (updatedNote) => dispatch(updateNote(note.id, updatedNote));

  const handleChangeText = ({ target }) => {
    setNoteForm({ ...noteForm, [target.name]: target.value });
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(fileUpload(file, noteForm));
    }
  };

  const handleShowCardModal = () => {
    dispatch(showCardModal());
  };

  const handleChooseFile = () => {
    document.querySelector('#file').click();
    handleShowCardModal();
  };

  const handleDeleteNote = () => {
    dispatch(deleteNote(note.id));
    handleShowCardModal();
  };

  const dayFormatted = dayjs(date).format('DD');
  const monthFormatted = dayjs(date).format('MMM');

  dayjs.extend(relativeTime);

  const lastUpdated = dayjs().to(dayjs(updated));

  return (
    <div className="notes__container">
      <NotesBar />

      <div className="notes__content">
        <div className="notes__card">
          {imageURL ? (
            <>
              <div className="notes__image">
                {note.loading ? <ProgressBar /> : <img src={imageURL} alt={title} />}
              </div>

              <div className="notes__date">
                <span>{dayFormatted}</span>
                <span>{monthFormatted}</span>
              </div>

              <button className="big_button_rounded" type="button" onClick={handleShowCardModal}>
                <MoreIcon />
              </button>

              {card && (
                <div className="notes__modal_card">
                  <ul>
                    <li>
                      <button type="button" onClick={handleChooseFile}>
                        <NewImageIcon />
                        <span>New image</span>
                      </button>
                    </li>

                    <li>
                      <button type="button" onClick={handleDeleteNote}>
                        <DeleteIcon />
                        <span>Delete note</span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <DragAndDrop {...noteForm} handleChooseFile={handleChooseFile} />
          )}

          <div className="notes__card_content">
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChangeText}
              className="notes__input_title"
              placeholder="Add amazing title"
            />

            <textarea
              id=""
              cols="30"
              rows="3"
              name="body"
              value={body}
              onChange={handleChangeText}
              className="notes__textarea_desc scrollY"
              placeholder="What happened today?"
            />

            <input
              id="file"
              name="file"
              type="file"
              onChange={handleChangeFile}
              style={{ display: 'none' }}
            />

            <div className="notes__card_footer">
              {updated ? (
                <span>
                  Updated
                  {lastUpdated}
                </span>
              ) : (
                <span>Updating</span>
              )}

              <button
                className="button_primary_sm"
                type="button"
                onClick={() =>
                  handleUpdateNote({
                    body,
                    date,
                    imageURL,
                    title,
                    updated: new Date().getTime(),
                    // eslint-disable-next-line prettier/prettier
                  })}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
