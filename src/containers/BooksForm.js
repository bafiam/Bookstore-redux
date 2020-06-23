import React from 'react';

const BooksForm = () => {
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
  const mapCategories = BOOKCATEGORIES.map(bookCat => (
    <option value={bookCat} key={bookCat}>
      {bookCat}
    </option>
  ));

  return (
    <div>
      <h3>book form </h3>

      <input type="text" name="title" id="title" placeholder="Book title" />

      <select name="" id="">
        {mapCategories}
      </select>
      <button className="btn" type="submit">
        Add Book
      </button>
    </div>
  );
};

export default BooksForm;
