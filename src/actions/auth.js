import { LOG_IN } from "../types";

export const logIn = (uid, displayName) => ({
  type: LOG_IN,
  payload: { uid, displayName },
});
