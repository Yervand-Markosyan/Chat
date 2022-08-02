import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./section2.css";
import camera from "..//..//..//..//src/icons/camera.svg";
import phone from "..//..//..//..//src/icons/phone.svg";
import Fetch from "..//..//..//JS/services/fetch";

const ChatPartnerHeader = () => {
  
  const dispatch = useDispatch();
  const data = useSelector(state => state.setChangeSection2.changeSection2);
  const online = useSelector(state => state.setChangeSection2.isOnline);

  const handlerOpen = () => {
    dispatch({ type: "CHANGE-SECTION3", payload: true });
  };

  return (
    <div className="header">
      <div className="leftSide" onClick={handlerOpen}>
        <div
          className="pic"
          style={{ backgroundImage: `url(${data.imgs[0]})` }}
        />
        <div className="textArea">
          <h6>{data.name + ' ' + data.lastname}</h6>
          <div className="online1">
            <p>
              {online ? "online" : `${new Date().getMinutes()} minutes ago`}
            </p>
            <div
              className="round"
              style={{
                backgroundColor: online ? "green" : "grey"
              }}
            />
          </div>
        </div>
      </div>

      <div className="rightSide">
        <img alt="/" src={camera} className="camera button"></img>
        <img alt="/" src={phone} className="phone button"></img>
      </div>
    </div>
  );
};

export default ChatPartnerHeader;
