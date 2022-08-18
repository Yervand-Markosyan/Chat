const initialState = {
    changeSection2: {},
    isOpen: false,
    isOnline: false,
}

export default function openSection3Reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE-SECTION2':
            return {
                ...state,
                changeSection2: action.payload,
            }
        case 'IS_OPEN':
            return {
                ...state,
                isOpen: action.payload,
            }
        case 'IS_ONLINE':
            return {
                ...state,
                isOnline: action.payload,
            }
        default:
            return state;
    }
}