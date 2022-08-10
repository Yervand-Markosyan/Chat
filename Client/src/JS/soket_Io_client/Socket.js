import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import openSocket from 'socket.io-client';
import SECRET from "../secrets"

let socket= openSocket(SECRET.URL_WS_SERVER);
const Socket = () => {
  //  socket = openSocket(SECRET.URL_WS_SERVER)
  const dispatch = useDispatch()
  const loggedUser_id = JSON.parse(localStorage.getItem("loggedUser_id"))

  //   add user
  useEffect(() => {
    socket.emit("addUser", {
      userId: loggedUser_id
    })
  }, [])

  // get online users
  socket.on("getUsers", users => {
    dispatch({
      type: "ADD_ONLINE_USERS",
      payload: users
    })
  })

  socket.on("getMessage", data =>{
    dispatch({ type: 'SET_NEW_MESSAGE', payload: data})
  })

  socket.on("getUpdate", data =>{
    dispatch({ type: 'SET_MESSAGES', payload: data})
  })

  socket.on("newCompanion",(data)=>{
    dispatch({ type: 'ADD_NEW_CONVERSATIONS', payload: data})
  })

  socket.on("ERROR", e => {
    console.log(e);
  })

  return ( 
    
    <div >
    </div>
  )

}

let SOCKET = {
  Socket,
  socket
}

export default  SOCKET