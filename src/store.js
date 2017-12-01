import { createStore } from 'redux';


import reducers from './reducer';

export default (state) => {
  const store = createStore(
    reducers,
    state
  );

  return store;

}