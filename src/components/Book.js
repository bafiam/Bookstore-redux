import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (
    <div className="card book my-4">
      <div className="card-body">
        <div className="row">
          <div className="col-9">
            <div className="book-details">
              <div className="book-category">{category}</div>
              <div className="book-title">{title}</div>
              <div className="book-author text-primary">Suzanne Collins</div>
              <div className="book-id text-primary">
                #
                {id}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="book-progress-bar">
              <button className="btn btn-danger btn-large" type="button" onClick={() => removeBook(id)}>Remove Book</button>
            </div>
          </div>
        </div>
      </div>
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
