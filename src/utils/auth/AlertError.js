import React from "react";
import { ErrorIcon } from "../../icons";

const AlertError = ({ error }) => {
  const visibility = error ? "visible" : "hidden";

  return (
    <div className="auth__alert_error" style={{ visibility: visibility }}>
      <span>
        <ErrorIcon />
      </span>

      <p>{error}</p>
    </div>
  );
};

export default AlertError;
