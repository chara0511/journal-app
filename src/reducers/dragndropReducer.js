/*
  {
    dragndrop:{
      inDropZone: null,
      file:null
    }
  }
*/

import { ADD_DROP_ZONE } from "../types";

const initialState = {
  inDropZone: null,
};

export const dragndropReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DROP_ZONE:
      return {
        ...state,
        inDropZone: action.payload,
      };

    default:
      return state;
  }
};
