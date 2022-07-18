import React from "react";
import ChatHeader from "./sections/header/ChatHeader";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Fetch from "../JS/services/fetch"
import "./styles.css/chat.css";

const Chat = () => {

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
