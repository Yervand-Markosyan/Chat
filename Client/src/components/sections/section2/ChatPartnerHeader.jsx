import React, { useState, useEffect } from "react";
import "./section2.css";
import camera from "..//..//..//..//src/icons/camera.svg";
import phone from "..//..//..//..//src/icons/phone.svg";
import Fetch from "..//..//..//JS/services/fetch";

const ChatPartnerHeader = () => {
  const [image, setImage] = useState(
    "https://mlhmvq6amqed.i.optimole.com/HIId8M4.WANK~27a14/w:940/h:788/q:auto/https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"
  );

  const [name, setName] = useState("Lusine Petrosyan");
  const [online, setOnline] = useState(false);

  useEffect(() => {
    Fetch.post("chat/allinfo", { thisUserId: "62d436eb48b4766760bb20d4" }).then(
      data => setName(data.allUsers['62d436eb48b4766760bb20d4'].fullname)
    );
  }, []);

  return (
    <div className="header">
      <div className="leftSide">
        <div className="pic" style={{ backgroundImage: `url(${image})` }} />
        <div className="textArea">
          <h6>{name}</h6>
          {/* <h6></h6> */}
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
}

export default ChatPartnerHeader;
