const randomID = () => Math.floor(Math.random() * 5000);
const addBookType = 'ADD_BOOK';
const deleteBookType = 'REMOVE_BOOK';
const filterBookType = 'FILTER_BOOK';

const CREATE_BOOK = book => ({
  type: addBookType,
  book: {
    id: randomID(),
    title: book.title,
    category: book.category,
  },
});

const DELETE_BOOK = id => ({
  type: deleteBookType,
  id,
});

const CHANGE_FILTER = category => ({
  type: filterBookType,
  category,
});

export {
  randomID,
  CREATE_BOOK,
  DELETE_BOOK,
  CHANGE_FILTER,
  addBookType,
  deleteBookType,
  filterBookType,
};
