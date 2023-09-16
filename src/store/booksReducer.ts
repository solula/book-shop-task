import { type } from "os";
import { Book } from "src/models/models";

// Определение типа состояния
export interface BooksState {
  books: Book[];
  loadedCount: number;
}

// Начальное состояние
const initialState: BooksState = {
  books: [],
  loadedCount: 0,
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
        loadedCount: 30,
      };
    case "ADD_BOOKS":
      return {
        ...state,
        books: [...state.books, ...action.payload],
        loadedCount: state.loadedCount + 30,
      };
    default:
      return state;
  }
};

export default booksReducer;