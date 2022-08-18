import React from "react";
import "./section3.css";
import { useSelector } from "react-redux";
import ValidationFiles from "../section2/ValidationFiles";

function Pictures(props) {
  const messages = useSelector(state => state.setAllMessages.allMessages)


  return (
    <>
      <div className="section3Openedfiles">
        {messages.map(item => item.type === "file" &&  item).map(item => {
            return item?<ValidationFiles props={item.message} key={item._id}/>:null
        })}
      </div>
    </>
  );
}

export default Pictures;
