import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CREATE_BOOK } from '../actions/index';

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addBook } = this.props;
    addBook(this.state);
    e.target.reset();
  }

  render() {
    const BOOKCATEGORIES = [
      'Select---',
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    const mapCategories = BOOKCATEGORIES.map((bookCat) => (
      <option value={bookCat} key={bookCat}>
        {bookCat}
      </option>
    ));

    return (
      <div>
        <h3>book form </h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Book title"
            onChange={this.handleChange}
          />

          <select name="category" id="category" onChange={this.handleChange}>
            {mapCategories}
          </select>
          <button className="btn" type="submit">
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: (book) => {
      dispatch(CREATE_BOOK(book));
    },
  };
};
export default connect(null, mapDispatchToProps)(BooksForm);
