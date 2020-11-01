import { firebase, googleAuthProvider } from "../firebase/firebasConfig";
import { ERROR, LOADING, LOG_IN, LOG_OUT } from "../types";

const loading = () => ({ type: LOADING });

export const loggedIn = (uid, displayName) => ({
  type: LOG_IN,
  payload: { uid, displayName },
});

const loginError = (message) => ({ type: ERROR, payload: message });

export const logIn = (email, password) => async (dispatch) => {
  dispatch(loading());

  try {
    const userCreadential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const { user } = userCreadential;

    dispatch(loggedIn(user.uid, user.displayName));
  } catch (error) {
    console.log(error.message);
    dispatch(loginError(error.message));
  }
};

export const logInByGoogle = () => (dispatch) => {
  dispatch(loading());

  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(loggedIn(user.uid, user.displayName));
    });
};

export const signUp = (name, email, password) => async (dispatch) => {
  dispatch(loading());

  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const { user } = userCredential;

    await user.updateProfile({ displayName: name });

    dispatch(loggedIn(user.uid, user.displayName));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const loggedOut = () => ({ type: LOG_OUT });

export const logOut = () => async (dispatch) => {
  try {
    await firebase.auth().signOut();

    dispatch(loggedOut());
  } catch (error) {
    console.log(error);
  }
};
