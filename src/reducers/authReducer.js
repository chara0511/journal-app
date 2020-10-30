// {
//   uid: "00124faggag",
//   name: "Chara-"
// }

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
