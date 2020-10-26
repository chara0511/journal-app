import React from "react";
import { ErrorIcon } from "../../icons";

const AlertError = ({ error }) => {
  return (
    <div className="auth__alert_error">
      <ErrorIcon />

      <p>{error}</p>
    </div>
  );
};

export default AlertError;
