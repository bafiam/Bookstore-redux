import { filterBookType } from '../actions/index';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case filterBookType:
      return action.category;
    default:
      return 'All';
  }
};

export default filterReducer;
