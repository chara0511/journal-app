/*
  {
    modals:{
      card: null,
      navbar: null,
      sidebar: null,
    }
  }
*/

import {
  HIDE_MODAL,
  HANDLE_SIDEBAR,
  SHOW_PROFILE_MODAL,
  SHOW_CARD_MODAL,
} from "../types";

const initialState = {
  card: null,
  profile: null,
  sidebar: null,
};

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SIDEBAR:
      return {
        ...state,
        sidebar: !state.sidebar,
      };

    case SHOW_PROFILE_MODAL:
      return {
        ...state,
        profile: !state.profile,
      };

    case HIDE_MODAL:
      return initialState;

    case SHOW_CARD_MODAL:
      return {
        ...state,
        card: !state.card,
      };

    default:
      return state;
  }
};
