import React from "react";
import Group from "..//Group";
import "..//section1.css";

function OnlyGroups() {
  return (
    <>
      <div className="border">
        <p>Groups</p>
        <div className="zoneGroup">
          {/* Գենեռացվող */}
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
        </div>
      </div>
    </>
  );
}

export default OnlyGroups;
