import React, { useEffect } from "react";
import fetch from "./services/fetch";
import { useDispatch } from "react-redux"
import Socket from "./soket_Io_client/Socket";

const Posts = () => {
  const dispatch = useDispatch()
  const loggedUser_id = JSON.parse(localStorage.getItem("loggedUser_id"))
  console.log(loggedUser_id)
  const refreshToken = () => {
    fetch.get("auth/refreshtoken")
      .then(data => {
        if (data) {
          localStorage.removeItem("token")
          localStorage.setItem("token", JSON.stringify(data.token))

        } else {
          window.location.href = "http://localhost:3000"
        }
      })
      .catch(e => {
        window.location.href = "http://localhost:3000"
      })
  }

  useEffect(() => {
    refreshToken()
    //  logged user about
    fetch.post('auth/userbyid', { loggedUser_id, })
      .then(data => {
        dispatch({ type: "ADD_LOGGED_USER", payload: data })
        dispatch({ type: "ADD_CREATOR_ID", payload: loggedUser_id })
      })
      .catch(e => {
        dispatch({ type: "ADD_ERROR", payload: true })
        setTimeout(() => {
          window.location.pathname = "/"
        }, 2000);
      })

    // conversations companion users
    fetch.post('chat/conversation_by_user_id', { loggedUser_id })
      .then(data => {
        dispatch({ type: "ADD_CONVERSATIONS", payload: data })
      })
      .catch(e => {
        dispatch({ type: "ADD_ERROR", payload: true })
        setTimeout(() => {
          window.location.pathname = "/"
        }, 2000);
      })
      //// groups

      fetch.post("chat/group_by_user_id",{loggedUser_id,})
      .then(data=>{
        dispatch({ type: "ADD_GROUPS", payload: data })
      })

    //  get users for search 
    fetch.get("chat/all_registered_users")
      .then(data => {
        dispatch({ type: "ADD_REGISTRED_USERS", payload: data })
      }).catch(e => {
        dispatch({ type: "ADD_ERROR", payload: true })
        setTimeout(() => {
          window.location.pathname = "/"
        }, 2000);
      })
  }, [])

  setInterval(() => {
    refreshToken()
  }, 180000);

  return (
    <div>

    </div>
  )

}

export default Posts