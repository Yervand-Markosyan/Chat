const initialState = {
    error: false
}

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ERROR":
            return {
                error: action.payload
            }
            default:
                return state
    }
}