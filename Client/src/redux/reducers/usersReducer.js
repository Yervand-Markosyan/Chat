const initialState = {
    searchUsers: []
}


export default function usersReducer(state = initialState, action) {

    switch (action.type) {
        case "ADD_REGISTRED_USERS":
            return {
                ...state, searchUsers: action.payload
            }
            default:
                return state
    }

}