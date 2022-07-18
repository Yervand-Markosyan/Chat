import React, { useState } from "react";
import PersonalinfoOpened from "./PersonalinfoOpened";
import "./section3.css";

function Personalinfo() {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("⮝");

  const handleClick = () => {
    icon === "⮝" ? setIcon("⮟") : setIcon("⮝");
    setOpen(!open);
  };

  return (
    <>
      <div className="personalinfo">
        <div className="personalinfoHeader" onClick={handleClick}>
          <p>Personal information</p>
          <p>{icon}</p>
        </div>

        {open ? <PersonalinfoOpened /> : null}
      </div>
      {/* <div className="picAndFullName">
        <div
          className="section3Pic"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="Section3OnlineRound"></div>
        <h4 className="fullNameGeneral">{name}</h4>
        <div className="section3Online">
          <p>{online ? "online" : `${new Date().getMinutes()} minutes ago`}</p>
          <div
            className="section3Round"
            style={{
              backgroundColor: online ? "green" : "grey"
            }}
          />
        </div>
      </div> */}
    </>
  );
}

export default Personalinfo;
