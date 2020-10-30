import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const AuthRoutes = () => {
  return (
    <div className="auth__main">
      <div className="auth__container">
        <Switch>
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={Signup} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRoutes;
