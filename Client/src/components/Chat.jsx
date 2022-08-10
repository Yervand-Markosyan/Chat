import React from "react";
import { useSelector } from "react-redux";
import ChatHeader from "./sections/header/ChatHeader";
import Error from "./Error";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import SOCKET from "../JS/soket_Io_client/Socket";
import Posts from "../JS/posts";
import "./stylesCSS/chat.css";

function Chat() {
  const changeSection3 = useSelector(state => state.setChangeSection3.changeSection3)
  const error = useSelector(state => state.setError.error);
  if (error) {
    return <Error />;
  }

  return (
    <>
      <Posts />
      <SOCKET.Socket />
      <div className="chat">
        <ChatHeader />
        <div className="sections">
          <Section1 />
          <Section2 />
          {changeSection3 ? <Section3 /> : null}
        </div>
      </div>
    </>
  );
}

export default Chat;
