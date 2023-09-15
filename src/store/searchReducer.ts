interface SearchState {
    search: string;
}

const defaultState: SearchState = {
    search: "",
};

type SearchAction = {
    type: "SET_SEARCH";
    payload: string;
};

const searchReducer = (
    state: SearchState = defaultState,
    action: SearchAction
): SearchState => {
    switch (action.type) {
        case "SET_SEARCH":
            return {
                ...state,
                search: action.payload,
            };
        default:
            return state;
    }
};
export default searchReducer;