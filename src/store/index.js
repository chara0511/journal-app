import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { dragndropReducer } from '../reducers/dragndropReducer';
import { modalsReducer } from '../reducers/modalsReducer';
import { notesReducer } from '../reducers/notesReducer';

const composeEnhancers =
  // eslint-disable-next-line no-underscore-dangle
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  notes: notesReducer,
  modals: modalsReducer,
  dragndrop: dragndropReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
