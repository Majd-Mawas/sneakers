import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
});

export default rootReducers;
