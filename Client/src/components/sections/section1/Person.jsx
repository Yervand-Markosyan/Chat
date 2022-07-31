import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetch from "../../../JS/services/fetch";
// import socket from "../../../JS/soket_Io_client/Socket";
import './person.css'

export default function Person(props) {

  const [data, setData] = useState('')
  const [online, setOnline] = useState(false)
  const dispatch = useDispatch()
  const onlineUsers = useSelector(state => state.setOnlineUsers.onlineUsers)


  const loggedUser_id = JSON.parse(localStorage.getItem("loggedUser_id"))
  const members = props.props.members
  const companion_id = members.find(id => { if (id !== loggedUser_id) { return id } })
  console.log(companion_id);
  
  useEffect(() => {
    fetch.post("chat/about_companion", { companion_id, })
    .then(data => setData(data))
    .catch(e => {
        dispatch({ type: "ADD_ERROR", payload: true })
        setTimeout(() => {
          window.location.pathname = "/"
        }, 2000);
      })
  }, [])

  useEffect(() => {
    if (data && onlineUsers) {
      let arr = []
      onlineUsers.map(item => arr.push(item.userId))
      arr.includes(data._id) ? setOnline(true) : setOnline(false)
    }
  }, [onlineUsers])

  return (
    <div className="chatInfo" >
      <div className="personAbout">
        <div className="avatar">
          <img src={data ? data.imgs[0] : ''} alt="pic" className="avatar" />

          <div className={online ? "online" : "offline"} />
        </div>
        <div className="name_mess">
          <div className="fullName">
            <p>{data ? (data.name + " " + data.lastname) : ""}</p>
          </div>
          <div className="lastMess">
            <p className="lastMessage">Barev!</p>
            <p className="lastMessDate">21:58</p>
          </div>
        </div>
      </div>
      <div className="status" />
    </div>
  );
}