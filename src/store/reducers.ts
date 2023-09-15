import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import searchReducer from "./searchReducer";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    search: searchReducer, 
});
