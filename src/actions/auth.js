import { LOG_IN } from "../types";

export const logIn = (value1, value2) => (dispatch) => {
  setTimeout(() => {
    dispatch(sendData(value1, value2));
  }, 3000);
};

export const sendData = (uid, displayName) => ({
  type: LOG_IN,
  payload: { uid, displayName },
});
