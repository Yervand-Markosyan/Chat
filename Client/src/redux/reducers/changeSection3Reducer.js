const initialState = {
    changeSection3: false,
}

export default function openSection3Reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE-SECTION3':
            return {
                ...state,
                changeSection3: action.payload,
            }
            default:
                return state;
    }
}