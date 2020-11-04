/*
{
  notes: [],
  active: {
    uid: "GQBiB36N4ueuZgyxjj",
    title: "",
    body: "",
    imageUrl: "",
    date: new Date(),
  }
}
*/

import { ACTIVE_NOTE, LOADING_NOTES, UPDATE_NOTE } from "../types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_NOTE:
      return {
        ...state,
        active: { ...action.payload },
      };

    case LOADING_NOTES:
      return {
        ...state,
        notes: [...action.payload],
      };

    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };

    default:
      return state;
  }
};
