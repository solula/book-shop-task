interface SearchState {
    search: string;
}

type SearchAction = {
    type: "SET_SEARCH";
    payload: string;
};

const defaultState: SearchState = {
    search: "",
};

const searchReducer = (
    state: SearchState = defaultState,
    action: SearchAction
): SearchState => {
    switch (action.type) {
        case "SET_SEARCH":
            console.log(action.payload);
            return {
                ...state,
                search: action.payload,
            };
        default:
            return state;
    }
};
export default searchReducer;
