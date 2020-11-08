import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebasConfig";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import { loggedIn } from "../actions/auth";
import { loadingNotes } from "../actions/notes";
import AuthRoutes from "./AuthRoutes";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Main from "../components/Main/Main";
import Profile from "../components/Profile/Profile";
import LoadingPage from "../components/Main/LoadingPage";

const MainRouter = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(loggedIn(user.uid, user.displayName, user.photoURL));

        dispatch(loadingNotes(user.uid));

        setIsLogged(true);

        setIsLoading(false);
      } else {
        setIsLogged(false);
        setIsLoading(false);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            isLogged={isLogged}
            component={AuthRoutes}
          />

          <PrivateRoute exact path="/" isLogged={isLogged} component={Main} />
          <PrivateRoute
            exact
            path="/profile"
            isLogged={isLogged}
            component={Profile}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default MainRouter;
