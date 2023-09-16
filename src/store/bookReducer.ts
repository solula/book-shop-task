interface Book {}

export interface BookState {
    books: Record<string, Book>; //по айди (1) книга
}

interface SetBookAction {
    type: 'SET_BOOKS';
    payload: Record<string, Book>;
}

type BookAction = SetBookAction;

const defaultState: BookState = {
    books: {},
};

const booksReducer = (state: BookState = defaultState, action: BookAction): BookState => {
    //const book = state.categories["odikddjid"]
    
    switch (action.type) {
        case 'SET_BOOKS':
            console.log(action.payload);
            return {
                ...state,
                books: action.payload,
            };
        default:
            return state;
    }
};

export default booksReducer;