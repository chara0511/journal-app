import React from "react";
import { Link } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validateSignUp } from "../../validations";

const Signup = () => {
  const initialState = {
    name: "example",
    email: "example@example.com",
    password: "123456",
    confirmPassword: "123456",
  };

  const successSignUp = () => {
    console.log({ name, email, password, confirmPassword });
  };

  const {
    values: { name, email, password, confirmPassword },
    handleChange,
    handleSubmit,
  } = useFormValidation(initialState, validateSignUp, successSignUp);

  return (
    <>
      <h1 className="auth__title">Sign up</h1>

      <form onSubmit={handleSubmit} action="" noValidate>
        <input
          className="auth__input"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          className="auth__input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email address"
        />

        <input
          className="auth__input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />

        <input
          className="auth__input"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />

        <button className="button button_primary" type="submit">
          Sign up
        </button>

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
