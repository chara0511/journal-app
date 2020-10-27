import { firebase, googleAuthProvider } from "../firebase/firebasConfig";
import { LOG_IN } from "../types";

const sendData = (uid, displayName) => ({
  type: LOG_IN,
  payload: { uid, displayName },
});

export const logIn = (value1, value2) => (dispatch) => {
  setTimeout(() => {
    dispatch(sendData(value1, value2));
  }, 3000);
};

export const logInByGoogle = () => (dispatch) => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      console.log(user.uid, user.displayName);
      dispatch(sendData(user.uid, user.displayName));
    });
};

export const signUp = (name, email, password) => async (dispatch) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const { user } = userCredential;

    await user.updateProfile({ displayName: name });

    dispatch(sendData(user.uid, user.displayName));
  } catch (error) {
    console.log(error);
  }
};
