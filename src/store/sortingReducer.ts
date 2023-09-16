import { defaultSorting } from "src/models/models";

interface SortingState {
    sorting: string;
}

interface SortingAction {
    type: "SET_SORTING";
    payload: string;
}
const defaultState: SortingState = {
    sorting: defaultSorting,
};

const sortingReducer = (
    state: SortingState = defaultState,
    action: SortingAction
): SortingState => {
    switch (action.type) {
        case "SET_SORTING":
            console.log(state);
            return {
                ...state,
                sorting: action.payload,
            };
        default:
            return state;
    }
};

export default sortingReducer;
