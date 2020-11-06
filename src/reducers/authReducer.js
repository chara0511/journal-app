/*
  {  
    auth: {
      uid: "GQBiB36N4ueuZgyxjjaIAaEXpDg1",
      displayName: "Chara-",
      loading: false,
    }
  }
*/

import { ERROR, LOADING, LOG_IN, LOG_OUT } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
      };

    case LOG_IN:
      return {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        loading: false,
        photoURL: action.payload.photoURL,
      };

    case ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    case LOG_OUT:
      return {};

    default:
      return state;
  }
};
