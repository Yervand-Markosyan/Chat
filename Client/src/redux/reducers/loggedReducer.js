const initialState = {
    thisUser: ""
}

// ( state,{type:"ADD_LOGGED_USERS",payload:data} )
export default function loggedReducer(state = initialState, action){
    switch (action.type) {
        case "ADD_LOGGED_USERS":
            return {...state, thisUser: action.payload }
        default:
            return state
    }

}
