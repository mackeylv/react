//Task 3: Implement form validation for the comment form
export const validateCommentForm = (values) => {
    const errors = {};
//we'll check that values.author exists. If it does not, we will add an author property to the errors object, containing the text string 'Required':
    if (!values.rating) {
        errors.rating = 'Required';
    } if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    } else if (values.author.length > 15) {
        errors.author = 'Must be 15 characters or less';
    }

    return errors;
    
};