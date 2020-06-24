import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (
    <div className="card book my-4">

    </div>
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
