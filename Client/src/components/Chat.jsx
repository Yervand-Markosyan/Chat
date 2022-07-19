import React from "react";
import ChatHeader from "./sections/header/ChatHeader";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Fetch from "../JS/services/fetch"
import openSocket from 'socket.io-client';
import "./styles.css/chat.css";

const Chat = () => {
  
  // const socket = openSocket('http://localhost:3040');
// socket.emit("addUser")
  const refreshToken = () => {
   Fetch.get("auth/refreshtoken")
   .then(data => {
    if (data) {
      localStorage.removeItem("token")
      localStorage.setItem("token", JSON.stringify(data.token))
      
    }else{
    window.location.href = "http://localhost:3000"
    }
   })
   .catch(e => {
    window.location.href = "http://localhost:3000"
   })
  }

  setInterval(() => {
    refreshToken()
  }, 200000);

    return (
      
      <div className="chat">
        {console.log(JSON.parse(localStorage.getItem("thisUserAbout")).thisUser_id)}
        <ChatHeader />
        <div className='sections'>
          <Section1 />
          <Section2 />
          {true ? <Section3/> : null}
        </div>
      </div>
    );
  }

export default Chat;
