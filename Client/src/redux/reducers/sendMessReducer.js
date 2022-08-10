const initialState = {
    senderId:"",
    conversationId:"",
    companionId:"",
    message:"",
    type:"message",
}

export default function sendMessReducer(state = initialState, action) {
    switch (action.type) {
        case "SEND_MESSAGE_DATA":
            return {
                ...state,
                [action.key] : action.payload
            }
            case "SET_MESSAGE":
                return {
                    ...state,
                    message : action.payload
                  }

            default:
                return state
    }
}