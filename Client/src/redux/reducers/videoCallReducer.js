const initialState = {
    receivingCall: false,
    callAccepted: false,
    caller: "",
    name: "",
    callerSignal: "",
    call: false,
    startCall: false,
    answerCall: false,
    video: false,
    audio: false,
    leaveCall: ""

}

export default function videoCallReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_RECEIVING_CALL":
            return {
                ...state,
                receivingCall: action.payload
            }
        case "SET_CALLER":
            return {
                ...state,
                caller: action.payload
            }
        case "SET_CALLER_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "SET_CALLER_SIGNAL":
            return {
                ...state,
                callerSignal: action.payload
            }
        case "SET_CALL_ACCEPTED":
            return {
                ...state,
                callAccepted: action.payload
            }
        case "SET_CALL":
            return {
                ...state,
                call: action.payload
            }
        case "SET_START_CALL":
            return {
                ...state,
                startCall: action.payload
            }
        case "SET_ANSWER_CALL":
            return {
                ...state,
                answerCall: action.payload
            }
        case "SET_SETINGS":
            return {
                ...state,
                video: action.payload.video,
                audio: action.payload.audio,
            }
        case "LEAVE_CALL":
            return {
                ...state,
                leaveCall: action.payload
            }
        default:
            return state
    }
}