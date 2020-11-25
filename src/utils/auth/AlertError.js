import React from 'react';
import PropTypes from 'prop-types';
import { ErrorIcon } from '../../icons';

const AlertError = ({ error }) => {
  const visibility = error ? 'visible' : 'hidden';

  return (
    <div className="auth__alert_error" style={{ visibility }}>
      <span>
        <ErrorIcon />
      </span>

      <p>{error}</p>
    </div>
  );
};

AlertError.propTypes = {
  error: PropTypes.bool.isRequired,
};
export default AlertError;
