import { combineReducers } from 'redux';

const message = (state = {}, action) => {
  switch (action.type) {
    case 'GOOD':
      return Object.assign({}, state, action.payload);
    case 'CHANGE':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  message
});

export default rootReducer;