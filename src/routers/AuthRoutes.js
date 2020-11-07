import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const AuthRoutes = () => {
  const [inProp, setInProp] = useState(false);

  const handleTransitions = () => setInProp((prev) => !prev);

  useEffect(() => {
    handleTransitions();

    return () => setInProp(false);
  }, []);

  return (
    <div className="auth__main">
      <CSSTransition mountOnEnter in={inProp} timeout={500} classNames="fade">
        <div className="auth__container">
          <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/signup" component={Signup} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </CSSTransition>
    </div>
  );
};

export default AuthRoutes;
