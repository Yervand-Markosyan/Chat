const initialState = {
    groups: []
}

export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_GROUPS":
            return {
                ...state,
                groups: action.payload
            }
        case "ADD_CREATED_GROUP":
            return{
                  groups :  [...state.groups , ...action.payload]
                }
            
        default:
            return state
    }
}