import { Category, defaultCategory } from "src/models/models";

interface CategoriesState {
    categories: Category;
}

interface CategoriesAction {
    type: "SET_CATEGORIES";
    payload: Category;
}

const defaultState: CategoriesState = {
    categories: defaultCategory,
};

const categoriesReducer = (
    state: CategoriesState = defaultState,
    action: CategoriesAction
): CategoriesState => {
    switch (action.type) {
        case "SET_CATEGORIES":
            console.log(action.payload);
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
};

export default categoriesReducer;
