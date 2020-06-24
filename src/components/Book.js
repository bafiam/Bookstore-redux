import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => removeBook(id)}>Remove Book</button></td>
    </tr>
  );
};

Book.defaultProps = {
  book: { id: 1, title: 'Learning Redux', category: 'Learning' },
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),

  removeBook: PropTypes.func.isRequired,
};
export default Book;
