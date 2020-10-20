// {
//   uid: "00124faggag",
//   name: "Chara-"
// }

import { LOG_IN } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    default:
      return state;
  }
};
