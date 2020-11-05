import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn, logInByGoogle } from "../../actions/auth";
import { useFormValidation } from "../../hooks/useFormValidation";
import { EmailIcon, PasswordIcon } from "../../icons";
import AlertError from "../../utils/auth/AlertError";
import { validateLogIn } from "../../validations";

const Login = () => {
  const initialState = { email: "", password: "" };

  const successLogIn = () => {
    dispatch(logIn(email, password));
  };

  const dispatch = useDispatch();

  const ref = useRef(null);

  const {
    values: { email, password },
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormValidation(initialState, validateLogIn, successLogIn);

  const { loading, error } = useSelector((state) => state.auth);

  const handleLogInByGoogle = () => {
    dispatch(logInByGoogle());
  };

  return (
    <>
      <h1 className="auth__title">Log in</h1>

      <form className="auth__form" action="" noValidate onSubmit={handleSubmit}>
        <div className="auth__input">
          <input
            ref={ref}
            type="email"
            className="auth__input_box"
            placeholder="Email address"
            name="email"
            value={email}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <span>
            <EmailIcon />
          </span>
        </div>

        {<AlertError error={errors.email} />}

        <div className="auth__input">
          <input
            type="password"
            className="auth__input_box"
            placeholder="Password"
            name="password"
            value={password}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <span>
            <PasswordIcon />
          </span>
        </div>

        {<AlertError error={errors.password} />}

        <button
          className="button button_primary"
          type="submit"
          disabled={loading}
        >
          Log in
        </button>

        {<AlertError error={error} />}

        <div className="auth__social_networks">
          <p>or</p>

          <p>continue with these social profile</p>

          <div className="google-button" onClick={handleLogInByGoogle}>
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

        <p className="auth__utils">
          Don't have an account yet?{" "}
          <span>
            <Link to="/auth/signup">Sign up</Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
