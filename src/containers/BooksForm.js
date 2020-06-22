import React, { Component } from "react";

export default class BooksForm extends Component {
  render() {
    const BookCategories = [
      "Action",
      "Biography",
      "History",
      "Horror",
      "Kids",
      "Learning",
      "Sci-Fi",
    ];
    const Map_categories = BookCategories.map((book_cat) => {
      return <option>{book_cat}</option>;
    });
    return (
      <div>
        <h3>book form </h3>
        <label for="">Title</label>
        <input type="text" name="title" id="title" placeholder="Book title" />
        <label for="categories"> Book categories</label>

        <select name="" id="">
          {Map_categories}
        </select>
        <button class="btn" type= "submit">
                 submit
        </button>
      </div>
    );
  }
}
