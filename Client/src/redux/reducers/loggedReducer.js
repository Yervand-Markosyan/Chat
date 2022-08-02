const initialState = {
    thisUser: ""
}

export default function loggedReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_LOGGED_USER":
            return {
                ...state,
                thisUser: action.payload
            }
            default:
                return state
    }
}