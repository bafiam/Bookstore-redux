import { addBookType, deleteBookType } from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case addBookType:
      return [...state, action.book];
    case deleteBookType:
      return [...state].filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
