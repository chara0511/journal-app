import { combineReducers, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";

const reducers = combineReducers({
  auth: authReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
