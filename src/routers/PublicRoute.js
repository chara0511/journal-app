import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isLogged ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
