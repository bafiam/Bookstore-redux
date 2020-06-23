import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
  const bookList = books.length ? (
    books.map(book => (
      <Book book={book} key={book.id} />
    ))
  ) : (<div>Oops! No Book in the store!</div>);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {bookList}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});
BooksList.defaultProps = {
  books: { id: 1, title: 'Learning Redux', category: 'Learning' },
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};
export default connect(mapStateToProps)(BooksList);
