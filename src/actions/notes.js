import axios from 'axios';
import { db } from '../firebase/firebasConfig';
import {
  ACTIVE_NOTE,
  ADD_NOTE,
  DELETE_NOTE,
  ERROR_NOTE,
  FILE_UPLOADING,
  LOADING_NOTES,
  LOG_OUT_CLEANING,
  UPDATE_NOTE,
} from '../types';

export const activeNote = (id, note) => ({
  type: ACTIVE_NOTE,
  payload: { id, ...note },
});

const addedNote = (id, newNote) => ({
  type: ADD_NOTE,
  payload: { id, ...newNote },
});

const errorNote = (err) => ({
  type: ERROR_NOTE,
  payload: err,
});

export const addNote = () => async (dispatch, getState) => {
  try {
    const { uid } = getState().auth;

    const newNote = {
      body: '',
      date: new Date().getTime(),
      imageURL: null,
      loading: null,
      title: '',
      updated: null,
    };

    const docReference = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(docReference.id, newNote));
    dispatch(addedNote(docReference.id, newNote));
  } catch (error) {
    dispatch(errorNote(error.message));
  }
};

const getNotes = async (uid) => {
  const querySnapshot = await db.collection(`${uid}/journal/notes`).get();

  const notes = [];

  querySnapshot.forEach((note) => {
    notes.push({ id: note.id, ...note.data() });
  });

  return notes;
};

const loadedNotes = (notes) => ({ type: LOADING_NOTES, payload: notes });

export const loadingNotes = (uid) => async (dispatch) => {
  try {
    const notes = await getNotes(uid);

    dispatch(loadedNotes(notes));
  } catch (error) {
    dispatch(errorNote(error.message));
  }
};

// Other option to get a note (Lazy load).

// export const getNote = (id) => async (dispatch, getState) => {
//   try {
//     const { uid } = getState().auth;

//     const docSnapshot = await db
//       .collection(`${uid}/journal/notes`)
//       .doc(id)
//       .get();

//     dispatch(activeNote(id, docSnapshot.data()));
//   } catch (error) {
//     console.log(error);
//   }
// };

const updatedNote = (id, note) => ({
  type: UPDATE_NOTE,
  payload: { id, ...note },
});

export const updateNote = (id, note) => async (dispatch, getState) => {
  try {
    const { uid } = getState().auth;

    await db.collection(`${uid}/journal/notes`).doc(id).update(note);

    dispatch(updatedNote(id, note));
  } catch (error) {
    dispatch(errorNote(error.message));
  }
};

const fileUploading = () => ({
  type: FILE_UPLOADING,
});

export const fileUpload = (file, note) => async (dispatch, getState) => {
  dispatch(fileUploading());

  const { active } = getState().notes;

  const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dfvra50ch/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'journal-app');
  formData.append('file', file);

  try {
    const response = await axios.post(cloudinaryURL, formData);

    active.title = note.title;
    active.body = note.body;
    active.imageURL = response.data.secure_url;
    active.updated = new Date().getTime();

    dispatch(updateNote(active.id, active));
  } catch (error) {
    dispatch(errorNote(error.message));
  }
};

// export const fileUpload = (file, note) => async (dispatch) => {
//   const cloudinaryURL = "https://api.cloudinary.com/v1_1/dfvra50ch/upload";

//   const formData = new FormData();
//   formData.append("upload_preset", "journal-app");
//   formData.append("file", file);
//   console.log(file);

//   try {
//     const response = await axios.post(cloudinaryURL, formData);

//     note.imageURL = response.data.secure_url;
//     note.updated = new Date().getTime();

//     dispatch(updateNote(note.id, note));
//   } catch (error) {
//     console.log(error);
//   }
// };

const deletedNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const deleteNote = (id) => async (dispatch, getState) => {
  try {
    const { uid } = getState().auth;

    await db.collection(`${uid}/journal/notes`).doc(id).delete();

    dispatch(deletedNote(id));
  } catch (error) {
    dispatch(errorNote(error.message));
  }
};

export const logOutCleaning = () => ({
  type: LOG_OUT_CLEANING,
});
