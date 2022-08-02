const initialState = {
    changeSection2: {},
    isOpen: false,
    online: false,
    conversID: 0,
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
                    isOpen: action.payload,
                }
                case 'IS_ONLINE':
                    return {
                        isOnline: action.payload,
                    }
                    case 'CONVERSATION_ID':
                    return {
                        conversID: action.payload,
                    }
                    default:
                        return state;
    }
}