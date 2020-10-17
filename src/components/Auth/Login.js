import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="auth__title">Login</h1>

      <form action="" noValidate>
        <input
          className="auth__input"
          type="email"
          placeholder="Email address"
        />

        <input className="auth__input" type="password" placeholder="Password" />

        <button className="button button_primary" type="submit">
          Login
        </button>

        <div className="auth__social_networks">
          <p>Login with social networks</p>

          <div className="google-button">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>

            <p className="button-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/signup">Create new account</Link>
      </form>
    </>
  );
};

export default Login;
