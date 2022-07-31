import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import openSocket from 'socket.io-client';
import SECRET from "../secrets"


const Socket = () => {
  const socket = openSocket(SECRET.URL_WS_SERVER)
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

  return ( 
    
    <div >
    </div>
  )

}

export default Socket