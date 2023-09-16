import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import searchReducer from "./searchReducer";
import booksReducer from "./bookReducer";
import sortingReducer from "./sortingReducer";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    search: searchReducer, 
    books: booksReducer,
    sorting: sortingReducer,
});
