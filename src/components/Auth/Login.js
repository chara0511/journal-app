import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import { validateLogin } from "../../validations/validateLogin";

const Login = () => {
  const initialState = { email: "", password: "" };

  const successLogin = () => {
    console.log("submitted");
  };

  const ref = useRef(null);

  const {
    values: { email, password },
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormValidation(initialState, validateLogin, successLogin);

  return (
    <>
      <h1 className="auth__title">Log in</h1>

      <form action="" noValidate onSubmit={handleSubmit}>
        <input
          ref={ref}
          type="email"
          className="auth__input"
          placeholder="Email address"
          name="email"
          value={email}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {errors && <p>{errors.email}</p>}

        <input
          type="password"
          className="auth__input"
          placeholder="Password"
          name="password"
          value={password}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {errors && <p>{errors.password}</p>}

        <button className="button button_primary" type="submit">
          Log in
        </button>

        <div className="auth__social_networks">
          <p>Log in with social networks</p>

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
