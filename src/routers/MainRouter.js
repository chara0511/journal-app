import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebasConfig";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import Main from "../components/Main/Main";
import AuthRoutes from "./AuthRoutes";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { loggedIn } from "../actions/auth";

const MainRouter = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(loggedIn(user.uid, user.displayName));
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });

    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isLogged={isLogged}
            path="/auth"
            component={AuthRoutes}
          />
          <PrivateRoute exact path="/" isLogged={isLogged} component={Main} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default MainRouter;
