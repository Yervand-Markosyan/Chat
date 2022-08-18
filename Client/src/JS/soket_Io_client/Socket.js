import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetch from '../services/fetch';
import openSocket from 'socket.io-client';
import SECRET from "../secrets"

let socket = openSocket(SECRET.URL_WS_SERVER);
const Socket = () => {

  const dispatch = useDispatch()
  const loggedUser_id = JSON.parse(localStorage.getItem("loggedUser_id"))
  const userinfo = useSelector(state => state.setChangeSection2.changeSection2);
  const conversations = useSelector(state => state.setConversations.conversations)

  const [callerId, setCallerId] = useState('')

  useEffect(() => {
    console.log(conversations);
    const a = callerId ? conversations.map(item => {
      if (item.members.includes(callerId)) {
        fetch.get(`chat/mess${item._id}`)
          .then(messages => {
            dispatch({ type: 'SET_MESSAGES', payload: messages })
            dispatch({ type: "SEND_MESSAGE_DATA", payload: item.id, key: "conversationId" })
            dispatch({ type: "SEND_MESSAGE_DATA", payload: callerId, key: "companionId" })
          })
      }
    }) : null
  }, [conversations, callerId])

  //  socket = openSocket(SECRET.URL_WS_SERVER)


  //   add user
  useEffect(() => {
    socket.emit("addUser", {
      userId: loggedUser_id
    })



    // get online users
    socket.on("getUsers", users => {
      dispatch({
        type: "ADD_ONLINE_USERS",
        payload: users
      })
    })

    socket.on("getMessage", data => {
      dispatch({ type: 'SET_NEW_MESSAGE', payload: data })
    })

    socket.on("getUpdate", data => {
      dispatch({ type: 'SET_MESSAGES', payload: data })
    })

    socket.on("newCompanion", (data) => {
      dispatch({ type: 'ADD_NEW_CONVERSATIONS', payload: data })
    })

    socket.on("callUser", (data) => {
      dispatch({ type: "SET_RECEIVING_CALL", payload: true })
      dispatch({ type: "SET_CALLER", payload: data.from })
      dispatch({ type: "SET_CALLER_NAME", payload: data.name })
      dispatch({ type: "SET_CALLER_SIGNAL", payload: data.signal })
      console.log(data.event)
      if (data.event === "videoCall") { dispatch({ type: "SET_SETINGS", payload: { video: true, audio: true } }) 
    } else { dispatch({ type: "SET_SETINGS", payload: { video: false, audio: true } }) }
    })

    socket.on("callEnded", (data) => {
      dispatch({ type: 'IS_OPEN', payload: true })
      dispatch({ type: "SET_CALL", payload: false })
      dispatch({ type: "SET_START_CALL", payload: false })
      dispatch({ type: "SET_CALL_ACCEPTED", payload: false })
      dispatch({ type: "SET_RECEIVING_CALL", payload: false })
      dispatch({ type: "SET_ANSWER_CALL", payload: false })
      dispatch({ type: "SET_SETINGS", payload: false })
      dispatch({ type: "SET_CALLER", payload: '' })
      dispatch({ type: "SET_CALLER_NAME", payload: '' })
      dispatch({ type: "SET_CALLER_SIGNAL", payload: '' })
    })

    socket.on("about_caller", (socketData) => {
      setCallerId(socketData.data._id)
      dispatch({ type: 'CHANGE-SECTION2', payload: socketData.data })
    })

    socket.on("ERROR", e => {
      console.log(e);
    })
  }, [loggedUser_id])
  return (

    <div >
    </div>
  )

}

let SOCKET = {
  Socket,
  socket
}

export default SOCKET