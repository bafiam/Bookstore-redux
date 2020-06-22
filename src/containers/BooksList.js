import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
  const bookList = books.length ? (
    books.map((book) => {
      return (
        <Book book={book} key={book.id} />
      );
    })
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

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(BooksList);
