import React from "react";
import { useSelector } from "react-redux";
import "./section3.css";

function Avatar() {

  const data = useSelector(state => state.setChangeSection2.changeSection2);
  const online = useSelector(state => state.setChangeSection2.isOnline);

  return (
    <>
      <div className="picAndFullName">
        <div
          className="section3Pic"
          style={{ backgroundImage: `url(${data.imgs[0]})` }}
        ></div>
        <div className="Section3OnlineRound"></div>
        <h4 className="fullNameGeneral">{data.name + ' ' + data.lastname}</h4>
        <div className="section3Online">
          <p>{online ? "online" : `${new Date().getMinutes()} minutes ago`}</p>
          <div
            className="section3Round"
            style={{
              backgroundColor: online ? "green" : "grey"
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Avatar;