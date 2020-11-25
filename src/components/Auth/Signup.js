import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import AlertError from '../../utils/auth/AlertError';
import { useFormValidation } from '../../hooks/useFormValidation';
import { validateSignUp } from '../../validations';
import { signUp } from '../../actions/auth';
import { EmailIcon, PasswordIcon, UsernameIcon } from '../../icons';

const Signup = () => {
  const initialState = {
    name: 'example',
    email: 'example@gmail.com',
    password: '123456',
    confirmPassword: '123456',
  };

  const dispatch = useDispatch();

  const {
    values: { name, email, password, confirmPassword },
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(initialState, validateSignUp, () => {
    dispatch(signUp(name, email, password));
  });

  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      <h1 className="auth__title">Sign up</h1>

      <form onSubmit={handleSubmit} action="" noValidate>
        <div className="auth__input">
          <input
            className="auth__input_box"
            type="text"
            name="name"
            value={name}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Name"
          />

          <span>
            <UsernameIcon />
          </span>
        </div>

        <AlertError error={errors.name} />

        <div className="auth__input">
          <input
            className="auth__input_box"
            type="email"
            name="email"
            value={email}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Email address"
          />

          <span>
            <EmailIcon />
          </span>
        </div>

        <AlertError error={errors.email} />

        <div className="auth__input">
          <input
            className="auth__input_box"
            type="password"
            name="password"
            value={password}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Password"
          />

          <span>
            <PasswordIcon />
          </span>
        </div>

        <AlertError error={errors.password} />

        <div className="auth__input">
          <input
            className="auth__input_box"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Confirm Password"
          />

          <span>
            <PasswordIcon />
          </span>
        </div>

        <AlertError error={errors.confirmPassword} />

        <button className="button button_primary" type="submit" disabled={loading}>
          Sign up
        </button>

        <AlertError error={error} />

        <div className="auth__social_networks">
          <p>or continue with these social profile</p>

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

          <p className="auth__utils">
            Already a member?
            <span>
              <Link to="/auth/login">Log in</Link>
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Signup;
