interface CategoriesState {
    categories: string;
}

interface SetCategoriesAction {
    type: 'SET_CATEGORIES';
    payload: string;
}

type CategoriesAction = SetCategoriesAction;

const defaultState: CategoriesState = {
    categories: '',
};

const categoriesReducer = (state: CategoriesState = defaultState, action: CategoriesAction): CategoriesState => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
};

export default categoriesReducer;