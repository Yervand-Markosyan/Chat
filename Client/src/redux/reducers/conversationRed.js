const initialState = {
    conversations: []
}

export default function conversationReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CONVERSATIONS":
            return {
                ...state,
                conversations: action.payload
            }
            case "ADD_NEW_CONVERSATIONS":
                return {
                    ...state,
                    conversations: [...state.conversations, action.payload]
                }
            default:
                return state
    }
}