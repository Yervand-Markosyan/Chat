const initialState = {
    creator_id:"",
    isOpen:false,

}

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CREATOR_ID":
            return {
              ...state,  creator_id: action.payload
            }
            case "IS_OPEN_POP":
                return {
                  ...state,  isOpen: action.payload
                }
            default:
                return state
    }
}