interface Books {}

export interface BooksState {
    books: Record<string, Books>; //по айди (1) книга
}

interface SetBooksAction {
    type: 'SET_CATEGORIES';
    payload: Record<string, Books>;
}

type BooksAction = SetBooksAction;

const defaultState: BooksState = {
    books: {},
};

const booksReducer = (state: BooksState = defaultState, action: BooksAction): BooksState => {
    //const book = state.categories["odikddjid"]
    
    switch (action.type) {
        case 'SET_CATEGORIES':
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