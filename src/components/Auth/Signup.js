import React from "react";
import { Link } from "react-router-dom";

import AlertError from "../../utils/auth/AlertError";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validateSignUp } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/auth";

const Signup = () => {
  const initialState = {
    name: "example",
    email: "example@gmail.com",
    password: "123456",
    confirmPassword: "123456",
  };

  const dispatch = useDispatch();

  const successSignUp = () => {
    console.log({ name, email, password });

    dispatch(signUp(name, email, password));
  };

  const {
    values: { name, email, password, confirmPassword },
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(initialState, validateSignUp, successSignUp);

  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      <h1 className="auth__title">Sign up</h1>

      <form onSubmit={handleSubmit} action="" noValidate>
        <input
          className="auth__input"
          type="text"
          name="name"
          value={name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Name"
        />

        {errors.name && <AlertError error={errors.name} />}

        <input
          className="auth__input"
          type="email"
          name="email"
          value={email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Email address"
        />

        {errors.email && <AlertError error={errors.email} />}

        <input
          className="auth__input"
          type="password"
          name="password"
          value={password}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Password"
        />

        {errors.password && <AlertError error={errors.password} />}

        <input
          className="auth__input"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Confirm Password"
        />

        {errors.confirmPassword && (
          <AlertError error={errors.confirmPassword} />
        )}

        <button
          className="button button_primary"
          type="submit"
          disabled={loading}
        >
          Sign up
        </button>

        {error && <AlertError error={error} />}

        <div className="auth__social_networks">
          <p>Sign up with social networks</p>

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

        <Link to="/auth/login">Already signup?</Link>
      </form>
    </>
  );
};

export default Signup;
