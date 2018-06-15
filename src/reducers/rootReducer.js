import { combineReducers } from "redux";

import selectedTodoReducer from "./selectedTodoReducer";

const rootReducer = combineReducers({ selectedTodoReducer });

export default rootReducer;
