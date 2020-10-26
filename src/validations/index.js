export const validateLogIn = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.trim())
  ) {
    errors.email = "Enter a valid email.";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.trim().length < 6) {
    errors.password = "The password must be at least 6 characters.";
  }

  return errors;
};

export const validateSignUp = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required.";
  } else if (values.name.trim().length < 2) {
    errors.name = "The name must be at least 2 characters.";
  }

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Enter a valid email.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.trim().length < 6) {
    errors.password = "The password must be at least 6 characters.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirmation of your password is required.";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password don't match.";
  }

  return errors;
};
