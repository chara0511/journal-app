import { db } from "../firebase/firebasConfig";

export const addNote = () => async (dispatch, getState) => {
  const { uid } = getState().auth;

  const newNote = {
    title: "",
    body: "",
    date: new Date().getTime(),
  };

  const docReference = await db.collection(`${uid}/journal/notes`).add(newNote);
  console.log(docReference);
};
