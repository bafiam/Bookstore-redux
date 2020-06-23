import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { DELETE_BOOK } from '../actions/index';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  render() {
    const { books } = this.props;
    const bookList = books.length ? (
      books.map(book => (
        <Book book={book} key={book.id} onClick={this.handleRemoveBook} />
      ))
    ) : (<tr><td colSpan="3">Oops! No Book in the store!</td></tr>);
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
  }

};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: (book) => {
    dispatch(DELETE_BOOK(book));
  },
});

BooksList.defaultProps = {
  books: { id: 1, title: 'Learning Redux', category: 'Learning' },
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
