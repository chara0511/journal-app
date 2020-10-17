import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Main from "../components/Main/Main";
import AuthRouter from "./AuthRouter";

const MainRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={Main} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default MainRouter;
