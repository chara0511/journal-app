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

import {
  ACTIVE_NOTE,
  ADD_NOTE,
  DELETE_NOTE,
  LOADING_NOTES,
  UPDATE_NOTE,
} from "../types";

const initialState = {
  active: null,
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_NOTE:
      return {
        ...state,
        active: { ...action.payload },
      };

    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
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

    case DELETE_NOTE:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    default:
      return state;
  }
};
