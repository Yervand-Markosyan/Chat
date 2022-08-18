import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./callZona.css"
import Peer from "simple-peer"
import SOCKET from "../../../JS/soket_Io_client/Socket";


export default function CallZona() {
    const [stream, setStream] = useState()
    const [callEnded, setCallEnded] = useState(false)
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()

    const dispatch = useDispatch()
    const companion = useSelector(state => state.setChangeSection2.changeSection2);
    const loggedUser = useSelector(state => state.setLoggedUser.thisUser);
    const loggedUser_id = JSON.parse(localStorage.getItem("loggedUser_id"))
    const callData = useSelector(state => state.setCall)

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: callData.video, audio: callData.audio })
            .then((stream) => {
                setStream(stream)
                if (callData.video) {
                    myVideo.current.srcObject = stream
                }
            })
            dispatch({type:"LEAVE_CALL" , payload: leaveCall})
    }, [])

    useEffect(() => {
        if (callData.startCall && stream) {
            const peer = new Peer({
                initiator: true,
                trickle: false,
                stream: stream
            })
            peer.on("signal", (data) => {
                SOCKET.socket.emit("callUser", {
                    userToCall: companion._id,
                    signalData: data,
                    from: loggedUser_id,
                    name: loggedUser.fullName,
                    token: JSON.parse(localStorage.getItem("token")).token,
                    event: callData.video ? "videoCall" : "audioCall"
                })
            })
            peer.on("stream", (stream) => {
                if (callData.video) {
                    userVideo.current.srcObject = stream
                }
            })
            SOCKET.socket.on("callAccepted", (signal) => {
                peer.signal(signal)
                dispatch({ type: "SET_CALL_ACCEPTED", payload: true })
            })
            connectionRef.current = peer
        }
    }, [callData.stream, stream])

    useEffect(() => {
        if (callData.answerCall && stream) {
            const peer = new Peer({
                initiator: false,
                trickle: false,
                stream: stream
            })
            peer.on("signal", (data) => {
                SOCKET.socket.emit("answerCall", { signal: data, to: callData.caller })
            })
            peer.on("stream", (stream) => {
                if (callData.video) {
                    userVideo.current.srcObject = stream
                }
            })
            peer.signal(callData.callerSignal)
            connectionRef.current = peer

            dispatch({ type: "SET_CALL_ACCEPTED", payload: true })
        }
    }, [callData.answerCall, stream])

    function leaveCall() {
        SOCKET.socket.emit("call_end", { companionId: companion._id, loggedUser_id })
        // connectionRef.current.destroy()
    }

    

    return (
        <>
            <div className="container">
                {callData.video ? (
                    <div className="video-container">
                        <div className="userVideo">
                            {callData.callAccepted && !callEnded ?
                                <video playsInline ref={userVideo} autoPlay id="userVideo" />
                                :
                                <video playsInline ref={userVideo} />}
                        </div>
                        <div className="myVideo">
                            {stream ? <video playsInline muted ref={myVideo} autoPlay  id="myVideo" />
                                :
                                <video playsInline muted ref={myVideo} />}
                        </div>
                    </div>
                ) : (
                    <div className="audioCall">
                        <div className="audio">
                            { stream ? <audio playsInline muted ref={myVideo} autoPlay controls id="myVideo" />:<audio playsInline muted ref={myVideo} />}
                        </div>
                        <div className="audio">
                            { callData.callAccepted && !callEnded ?<audio playsInline ref={userVideo} autoPlay  id="userVideo" controls />:<audio playsInline ref={userVideo} />}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}