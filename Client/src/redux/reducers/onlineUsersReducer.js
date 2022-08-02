const initialState = {
    onlineUsers: ''
}

export default function onlineUsersReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ONLINE_USERS":
            return {
                onlineUsers: action.payload
            }
            default:
                return state
    }
}