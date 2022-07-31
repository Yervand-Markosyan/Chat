const initialState = {
    searchUsers: [],
}

export default function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_SEARCH_USERS':
        return {
            ...state,
            searchUsers: action.payload
        }

        default:
        return state
    }
}