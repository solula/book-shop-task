export interface CategoriesState {
    categories: string;
}

interface CategoriesAction {
    type: 'SET_CATEGORIES';
    payload: string;
}

const defaultState: CategoriesState = {
    categories: "all",
};

const categoriesReducer = (state: CategoriesState = defaultState, action: CategoriesAction): CategoriesState => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            console.log(state);
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
};

export default categoriesReducer;