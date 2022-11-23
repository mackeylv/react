//Task 3: Add form validation to UserLoginForm

//validateUserLoginForm.js
export const validateUserLoginForm = (values) => {
    const errors = {};

    /*Assume that a values object with username and password properties will be passed into this function. Require the username value to exist.
    Require the username to be at least 6 characters, and at most 15 characters.*/
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 6) {
        errors.username = 'Must be at least 6 characters.';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }

    /*Require the password value to exist. Require the password to be at least 8 characters.*/
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be at least 8 characters.';
    }

    return errors;
};