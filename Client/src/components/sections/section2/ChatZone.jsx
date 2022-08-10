import React, { Fragment } from "react";
import ThisUserMessage from "./ThisUserMessage";
import OtherUserMessage from "./OtherUserMessage";
import { useSelector } from "react-redux/es/exports";
import Time from "..//Time";
import "./section2.css";
import { useEffect } from "react";
import { useRef } from "react";


function ChatZone() {
  const allMessages = useSelector(state => state.setAllMessages.allMessages)
  const bottomRef = useRef(null)
  const loggedUser_id = JSON.parse(localStorage.getItem("loggedUser_id"))

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [allMessages]);

  return (
    <>
      <div className="showMessages" >
        {allMessages.map(item => {
          if (item.senderId === loggedUser_id) {
            return (
            <Fragment key={item._id + "1"}>
              <Time />
              <div className="thisUserMessage" key={item._id}>
                <ThisUserMessage value={item.message} id = {item._id} conversId = {item.conversationId} type={item.type}/>
              </div>
            </Fragment>)
          } else {
            return (
            <Fragment key={item._id + "1"}>
              <Time />
              <div className="otherUserMessage" key={item._id} id = {item._id}>
                <OtherUserMessage value={item.message} />
              </div>
            </Fragment>)
          }
        })}
        <div ref={bottomRef}/> 
      </div>
    </>
  );
}

export default ChatZone;
