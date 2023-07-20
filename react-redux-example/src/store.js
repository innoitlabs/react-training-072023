import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./reducers/taskReducer";

const store = configureStore(
    { reducer: taskReducer },
  composeWithDevTools(applyMiddleware(thunk)) //running asynchronous actions
);

export default store;
