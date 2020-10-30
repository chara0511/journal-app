// {
//   uid: "00124faggag",
//   name: "Chara-"
// }

import { LOADING, LOG_IN, LOG_OUT } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
      };

    case LOG_IN:
      return {
        ...state,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        loading: false,
      };

    case LOG_OUT:
      return {};

    default:
      return state;
  }
};
