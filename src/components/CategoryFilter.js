import React from 'react';

const CategoryFilter = () => {
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
      <select>
        <option disabled="true" selected>Select---</option>
        {mapCategories}
      </select>
    </div>
  );
};

export default CategoryFilter;
