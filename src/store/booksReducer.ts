import { type } from "os";
import { Book } from "src/models/models";

// Определение типа состояния
export interface BooksState {
  books: Book[];
}

// Начальное состояние
const initialState: BooksState = {
  books: [],
};

interface LoadBooksAction {
    type: "LOAD_BOOKS";
    payload: Book[];
}

interface SaveBooksAction {
    type: "ADD_BOOKS";
    payload: Book[];
}

type BooksAction = LoadBooksAction | SaveBooksAction;

// Редьюсер
const booksReducer = (state: BooksState = initialState, action: BooksAction): BooksState => {
  switch (action.type) {
    case "LOAD_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    case "ADD_BOOKS":
      return {
        ...state,
        books: [...state.books, ...action.payload],
      };
    default:
      return state;
  }
};

export default booksReducer;