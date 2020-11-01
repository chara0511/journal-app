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

import { ACTIVE_NOTE, LOADING_NOTES } from "../types";

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
        notes: [action.payload],
      };

    default:
      return state;
  }
};
