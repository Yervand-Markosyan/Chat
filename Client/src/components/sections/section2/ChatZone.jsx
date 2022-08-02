import React, { useState } from "react";
import ThisUserMessage from "./ThisUserMessage";
import OtherUserMessage from "./OtherUserMessage";
import Time from "..//Time";
import "./section2.css";

const value =
  "Vax@ petq a gnanq tex, heto urish tex u tenc eli apervax@ petq a gnanq tex, heto urish tex u tenc eli apervax@ petq a gnanq tex, heto urish tex u tenc eli apervax@ petq a gnanq tex, heto urish tex u tenc eli apervax@ petq a gnanq tex, heto urish tex u tenc eli apervax@ petq a gnanq tex, heto urish tex u tenc eli apervax@ petq a gnanq tex, heto urish tex u tenc eli aper";

function ChatZone() {
  // useEffect = () => {
    // REDAX -> const messages = redax.messages
    // REDAX -> const sendlerId = redax.sendlerId
    // LocalStorage -> const thisUserId = JSON.parse(localStorage.getItem("thisUserAbout")).thisUser_id
    <></>;
  // };

  return (
    <>
      <div className="showMessages">
        {true ? (
          <>
            <div className="thisUserMessage">
              <ThisUserMessage value={value} />
            </div>
            <Time />
          </>
        ) : (
          <>
            <div className="otherUserMessage">
              <OtherUserMessage value={value} />
            </div>
            <Time />
          </>
        )}
        {/* <div className="thisUserMessage">
          <ThisUserMessage value={value} />
        </div>

        <Time />

        <div className="otherUserMessage">
          <OtherUserMessage value={value} />
        </div>

        <div className="thisUserMessage">
          <ThisUserMessage value={value} />
        </div>

        <div className="thisUserMessage">
          <ThisUserMessage value={value} />
        </div>

        <div className="otherUserMessage">
          <OtherUserMessage value={value} />
        </div> */}
        {/* (sendlerId == thisUserId ? <ThisUserMessage /> : <OtherUserMessage />) */}
      </div>
    </>
  );
}

export default ChatZone;
