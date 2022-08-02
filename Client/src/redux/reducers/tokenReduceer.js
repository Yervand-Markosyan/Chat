const initialState = {
    token: {}
}

export default function tokenReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TOKEN":
            return {
                ...state,
                token: action.payload
            }
            default:
                return state
    }
}