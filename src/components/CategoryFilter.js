import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterBook }) => {
  const BOOKCATEGORIES = [
    'All',
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
      <select onChange={e => filterBook(e)}>
        <option disabled selected>Select---</option>
        {mapCategories}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filterBook: PropTypes.func.isRequired,
};

export default CategoryFilter;
