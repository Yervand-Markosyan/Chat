const initialState = {
    allMessages: []
}

export default function messagesForSection2(state = initialState, action) {
    switch (action.type) {
        case "SET_MESSAGES":
            return {
                ...state,
                allMessages: action.payload
            }
        case "SET_NEW_MESSAGE":
            return {
                ...state,
                allMessages :  [...state.allMessages , action.payload]
              }

        default:
            return state
    }
}