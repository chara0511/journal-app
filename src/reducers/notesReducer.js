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
  ERROR_NOTE,
  FILE_UPLOADING,
  LOADING_NOTES,
  LOG_OUT_CLEANING,
  UPDATE_NOTE,
} from '../types';

const initialState = {
  active: null,
  notes: [],
  error: null,
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
        error: null,
      };

    case LOADING_NOTES:
      return {
        ...state,
        notes: [...action.payload],
      };

    case ERROR_NOTE:
      return {
        ...state,
        error: action.payload,
      };

    case FILE_UPLOADING:
      return {
        ...state,
        active: { ...state.active, loading: true },
      };

    case UPDATE_NOTE:
      return {
        ...state,
        active: { ...state.active, loading: false },
        notes: state.notes.map((note) => (note.id === action.payload.id ? action.payload : note)),
        error: null,
      };

    case DELETE_NOTE:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case LOG_OUT_CLEANING:
      return initialState;

    default:
      return state;
  }
};
