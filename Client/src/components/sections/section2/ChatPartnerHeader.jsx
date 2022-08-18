import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./section2.css";
import camera from "..//..//..//..//src/icons/camera.svg";
import phone from "..//..//..//..//src/icons/phone.svg";
import endCall from "./icons/endCall.png"

const ChatPartnerHeader = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.setChangeSection2.changeSection2);
  const online = useSelector(state => state.setChangeSection2.isOnline);
  const loggedUser_id = JSON.parse(localStorage.getItem("loggedUser_id"))
  const callData = useSelector(state => state.setCall)

  const handlerOpen = () => {
    dispatch({ type: "CHANGE-SECTION3", payload: true })
  };

  const hendelVideoColl = () => {
    if(online){ 
    dispatch({type: "SET_START_CALL" ,payload: true }) 
    dispatch({type: "SET_SETINGS" ,payload: {video:true,audio:true} }) 
     } else {
      alert("aper@ online chi cheskara zanges ")
      }
  }

  const hendelAudioColl = () => {
    if(online){ 
    dispatch({type: "SET_START_CALL" ,payload: true }) 
    dispatch({type: "SET_SETINGS" ,payload: {video:false,audio:true} }) 
     } else {
      alert("aper@ online chi cheskara zanges ")
      }
  }

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

      {!callData.callAccepted ? 
      (<div className="rightSide">
        <img alt="/" src={camera} className="camera button" onClick={hendelVideoColl}></img>  
        {/* //callUser(data._id) */}
        <img alt="/" src={phone} className="phone button" onClick={hendelAudioColl}></img>
      </div>
      ) : (
        <div className="rightSide">
        <img alt="/" src={endCall} className="phone collEnd" onClick={callData.leaveCall}></img>
      </div>
      )
      }
    </div>
  );
};

export default ChatPartnerHeader;
