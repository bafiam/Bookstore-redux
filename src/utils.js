const validateForm = (title, category) => {
  const errors = [];
  if (title.length === 0) {
    errors.push('Book title cannot be blank!');
  }
  if (category.length === 0) {
    errors.push('Book category cannot be blank!');
  }
  return errors;
};

export default validateForm;
