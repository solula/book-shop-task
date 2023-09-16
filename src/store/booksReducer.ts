import { Book } from "src/models/models";

interface BooksState {
    books: Record<string, Book>; //по айди (1) книга
}

const initialState: BooksState = {
    books: {},
};

const defaultState: BooksState = {
    books: {},
};

interface LoadBooksAction {
    type: "LOAD_BOOKS";
    payload: Record<string, Book>;
}

interface SaveBooksAction {
    type: "SAVE_BOOKS";
    payload: Record<string, Book>;
}

type BooksAction = LoadBooksAction | SaveBooksAction;

const booksReducer = (
    state: BooksState = defaultState,
    action: BooksAction
): BooksState => {
    //const book = state.categories["odikddjid"]

    switch (action.type) {
        case "LOAD_BOOKS":
            return {
                ...state,
                books: action.payload,
            };
        case "SAVE_BOOKS":
            return {
                ...state,
                books: { ...state.books, ...action.payload },
            };
        default:
            return state;
    }
};

export default booksReducer;
