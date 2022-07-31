import React, { useState } from "react";
import FilesOpened from "./FilesOpened";
import "./section3.css";

function Filesinfo() {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("⮝");

  const handleClick = () => {
    icon === "⮝" ? setIcon("⮟") : setIcon("⮝");
    setOpen(!open);
  };

  return (
    <>
      <div className="filesinfo">
        <div className="filesHeader" onClick={handleClick}>
          <p>Files</p>
          <p>{icon}</p>
        </div>

        {open ? <FilesOpened /> : null}
      </div>
    </>
  );
}

export default Filesinfo;
