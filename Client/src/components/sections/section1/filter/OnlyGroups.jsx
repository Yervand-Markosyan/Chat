import React from "react";
import Group from "..//Group";
import "..//section1.css";
import CreatGroup from "../createGroup";

function OnlyGroups() {
  return (
    <>
      <div className="border">
        <p>Groups</p>
        <div className="zoneGroup">
             <CreatGroup/>
        </div>
      </div>
    </>
  );
}

export default OnlyGroups;
