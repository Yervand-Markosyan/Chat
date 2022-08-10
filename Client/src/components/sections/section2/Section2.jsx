import React from "react";
import { useSelector } from "react-redux";
import ChatPartnerHeader from "./ChatPartnerHeader";
import MessageArea from "./MessageArea";
import ChatZone from "./ChatZone";
import logo from "..//..//..//icons/big-logo.png";
import "./section2.css";

export default function Section2() {
  const data = useSelector(state => state.setChangeSection2.isOpen);
  return (
    <div className="section2">
      {data ? (
        <>
          <ChatPartnerHeader />
          <ChatZone />
          <MessageArea />
        </>
      ) : (
        <img className="bigLogo" src={logo} />
      )}
    </div>
  );
}
