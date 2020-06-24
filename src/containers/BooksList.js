import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { DELETE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import { filterBook } from '../utils';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    const { updateFilter } = this.props;
    updateFilter(e.target.value);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  render() {
    const books = filterBook(this.props);
    const bookList = books.length ? (
      books.map(book => (
        <Book book={book} key={book.id} removeBook={this.handleRemoveBook} />
      ))
    ) : (<p className="alert alert-warning" role="alert">Oops! No Book in the store!</p>);
    return (
      <div className="container">
        <CategoryFilter filterBook={this.handleFilterChange} />
        {bookList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(DELETE_BOOK(book));
  },
  updateFilter: category => {
    dispatch(CHANGE_FILTER(category));
  },
});

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
