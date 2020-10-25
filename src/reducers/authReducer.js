// {
//   uid: "00124faggag",
//   name: "Chara-"
// }

import { LOG_IN, LOG_OUT } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
      };

    case LOG_OUT:
      return {};

    default:
      return state;
  }
};
