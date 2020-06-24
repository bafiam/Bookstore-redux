import React from "react";
import PropTypes from "prop-types";

const CategoryFilter = ({ filterBook }) => {
  const BOOKCATEGORIES = [
    "All",
    "Action",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Sci-Fi",
  ];
  const mapCategories = BOOKCATEGORIES.map((bookCat) => (
    <option value={bookCat} key={bookCat}>
      {bookCat}
    </option>
  ));
  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend mt-4">
        <label class="input-group-text" for="inputGroupSelect01">
          Options
        </label>
      </div>
      <select
        class="custom-select mt-4"
        id="inputGroupSelect01"
        onChange={(e) => filterBook(e)}
      >
        <option disabled selected>Filter...</option>
        {mapCategories}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filterBook: PropTypes.func.isRequired,
};

export default CategoryFilter;
