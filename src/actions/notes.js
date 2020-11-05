import axios from "axios";
import { db } from "../firebase/firebasConfig";
import { ACTIVE_NOTE, LOADING_NOTES, UPDATE_NOTE } from "../types";

export const activeNote = (id, note) => ({
  type: ACTIVE_NOTE,
  payload: { id, ...note },
});

export const addNote = () => async (dispatch, getState) => {
  try {
    const { uid } = getState().auth;

    const newNote = {
      body: "",
      date: new Date().getTime(),
      imageURL: null,
      title: "",
      updated: null,
    };

    const docReference = await db
      .collection(`${uid}/journal/notes`)
      .add(newNote);

    dispatch(activeNote(docReference.id, newNote));
  } catch (error) {
    console.log(error);
  }
};

const getNotes = async (uid) => {
  try {
    const querySnapshot = await db.collection(`${uid}/journal/notes`).get();

    const notes = [];

    querySnapshot.forEach((note) => {
      notes.push({ id: note.id, ...note.data() });
    });

    return notes;
  } catch (error) {
    console.log(error);
  }
};

const loadedNotes = (notes) => ({ type: LOADING_NOTES, payload: notes });

export const loadingNotes = (uid) => async (dispatch) => {
  const notes = await getNotes(uid);

  dispatch(loadedNotes(notes));
};

// Other option to get a note (Lazy load).

export const getNote = (id) => async (dispatch, getState) => {
  try {
    const { uid } = getState().auth;

    const docSnapshot = await db
      .collection(`${uid}/journal/notes`)
      .doc(id)
      .get();

    dispatch(activeNote(id, docSnapshot.data()));
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = (id, note) => async (dispatch, getState) => {
  try {
    const { uid } = getState().auth;

    await db.collection(`${uid}/journal/notes`).doc(id).update(note);

    dispatch(updatedNote(id, note));
  } catch (error) {
    console.log(error);
  }
};

const updatedNote = (id, note) => ({
  type: UPDATE_NOTE,
  payload: { id, ...note },
});

export const fileUpload = (file) => async (dispatch, getState) => {
  const { active: activeNote } = getState().notes;

  const cloudinaryURL = "	https://api.cloudinary.com/v1_1/dfvra50ch/upload";

  const formData = new FormData();
  formData.append("upload_preset", "journal-app");
  formData.append("file", file);

  try {
    const response = await axios.post(cloudinaryURL, formData);

    activeNote.imageURL = response.data.secure_url;
    activeNote.updated = new Date().getTime();

    dispatch(updateNote(activeNote.id, activeNote));
  } catch (error) {
    console.log(error);
  }
};
