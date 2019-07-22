import { createStore, applyMiddleware, compose } from "redux";
import { allReducers } from "./reducers";
import thunk from "redux-thunk";

const initialState = {
  posts: [],
  post: {},
  users: {}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  allReducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
