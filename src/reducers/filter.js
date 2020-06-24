import { filterBookType } from '../actions/index';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case filterBookType:
      return action.category;
    default:
      return state;
  }
};

export default filterReducer;
