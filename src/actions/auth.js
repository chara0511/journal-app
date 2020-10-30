import { firebase, googleAuthProvider } from "../firebase/firebasConfig";
import { LOADING, LOG_IN } from "../types";

const loading = () => ({ type: LOADING });

const logged = (uid, displayName) => ({
  type: LOG_IN,
  payload: { uid, displayName },
});

export const logIn = (email, password) => async (dispatch) => {
  dispatch(loading());

  try {
    const userCreadential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const { user } = userCreadential;

    dispatch(logged(user.uid, user.displayName));
  } catch (error) {
    console.log(error);
  }
};

export const logInByGoogle = () => (dispatch) => {
  dispatch(loading());

  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(logged(user.uid, user.displayName));
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

    dispatch(logged(user.uid, user.displayName));
  } catch (error) {
    console.log(error);
  }
};
