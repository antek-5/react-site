
import initialState from './initialState';
import { createStore, combineReducers } from 'redux';

// subreducers

import listsReducer from './listsRedux';
import searchStringReducer from './searchStringReducer';
import cardsReducer from './cardsReducer';
import columnsReducer from './columnsReducer';

//

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;