import React from "react";

import { useDispatch, useSelector } from "react-redux";


export default function AnswereCall() {

    const dispatch = useDispatch()
    const videoCallData = useSelector(state => state.setCall)

    const answerCall = () => {
          dispatch({type:"SET_CALL", payload: true })
          dispatch({type:"SET_ANSWER_CALL", payload: true })
    }



    return (
        <div className="anwereCall">
            {videoCallData.receivingCall && !videoCallData.callAccepted ? (
                <div className="caller">
                    <h1 >{videoCallData.name} is calling...</h1>
                    <button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </button>
                </div>
            ) : null}
        </div>
    )
}