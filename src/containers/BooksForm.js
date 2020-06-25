import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions/index';
import { validateForm } from '../utils';

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
    const { title, category } = this.state;
    const errors = validateForm(title, category);
    if (errors.length <= 0) {
      const { addBook } = this.props;
      addBook(this.state);
      e.target.reset();
      this.setState({
        title: '',
        category: '',
      });
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const BOOKCATEGORIES = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    const mapCategories = BOOKCATEGORIES.map(bookCat => (
      <option value={bookCat} key={bookCat}>
        {bookCat}
      </option>
    ));

    const { errors } = this.state;

    const anError = errors !== undefined ? errors.map(err => (
      <small
        id="error-msg"
        className="alert alert-danger"
        key={err}
      >
        {err}

      </small>
    )) : ('');

    return (
      <div className="container border-top py-4">
        <h4 className="form-title">ADD NEW BOOK</h4>
        <form onSubmit={this.handleSubmit}>
          <p className=" d-flex flex-column">
            {anError}
          </p>

          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                placeholder="Book title"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <select
                className="form-control"
                name="category"
                id="category"
                onChange={this.handleChange}
              >
                <option disabled selected>
                  Choose...
                </option>
                {mapCategories}
              </select>
            </div>
            <div className="form-group col-md-2">
              <button className="btn btn-primary btn-large" type="submit">
                Add Book
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(CREATE_BOOK(book));
  },
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
