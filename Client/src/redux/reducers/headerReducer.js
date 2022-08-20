const initialState = {
    aboutAs : true
}


export default function headerConfigReducer(state = initialState, action){

    switch (action.type) {
        case "SET_ABOUT_AS":
            return {
                ...state,
                aboutAs : action.payload
            }
    
        default:
          return  state
    }



}