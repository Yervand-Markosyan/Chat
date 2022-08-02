import React from "react";

export default function Group(data){
   const info = data.data


    return (
      <div className="groupInfo" key={info._id+1}>
        <div className="avatar">
          <img src={info.img} alt="img"></img>
        </div>
        <div className="personAbout">
          <div className="fullName">
            <p>{info.name}</p>
          </div>
          {/* <p className="lastMessage">{this.props.lastmessage}</p>
          <p className="lastMessDate">{this.props.date}</p> */}
        </div>
        <div className="newMessage"></div>
      </div>
    );
  }

