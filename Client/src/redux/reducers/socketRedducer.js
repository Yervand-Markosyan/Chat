const initialState = {
    socket: []
}

export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_SOCKET":
            return {
                ...state,
                socket: action.payload
            }        
        default:
            return state
    }
}