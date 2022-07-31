import React, { useState } from "react";
import PicturesOpened from "./PicturesOpened";
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
      <div className="picturesinfo">
        <div className="picturesHeader" onClick={handleClick}>
          <p>Pictures</p>
          <p>{icon}</p>
        </div>

        {open ? <PicturesOpened /> : null}
      </div>
    </>
  );
}

export default Personalinfo;
