/*
  {
    modals:{
      card: null,
      navbar: null,
      sidebar: null,
    }
  }
*/

import { HIDE_MODAL, HANDLE_SIDEBAR } from "../types";

const initialState = {
  card: null,
  navbar: null,
  sidebar: null,
};

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SIDEBAR:
      return {
        ...state,
        sidebar: !state.sidebar,
      };

    case HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
};
