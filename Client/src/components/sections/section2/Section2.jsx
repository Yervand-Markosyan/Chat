import React from "react";
import { useSelector } from "react-redux";
import ChatPartnerHeader from "./ChatPartnerHeader";
import MessageArea from "./MessageArea";
import ChatZone from "./ChatZone";
import AboutAs from "../header/AboutAs";
import logo from "..//..//..//icons/big-logo.png";
import "./section2.css";
import CallZona from "./CallZona";

export default function Section2() {
  const data = useSelector(state => state.setChangeSection2.isOpen);
  const call = useSelector(state => state.setCall.call)
  const startCall = useSelector(state => state.setCall.startCall)
  const aboutAs = useSelector(state => state.setHeaderConfig.aboutAs)


  if (aboutAs) {
    return (
      <div className="section2">
        <AboutAs />
      </div>
    )
  }

  if (call || startCall) {
    return (
      <div className="section2">
        <ChatPartnerHeader />
        <CallZona />
      </div>
    )
  }
  if (data) {
    return (
      <div className="section2">
        <ChatPartnerHeader />
        <ChatZone />
        <MessageArea />
      </div>
    )
  }
  return (
    <div className="section2">
      <img className="bigLogo" src={logo} alt={""} />
    </div>
  )

}
