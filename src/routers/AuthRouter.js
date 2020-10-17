import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signup" component={Signup} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRouter;
