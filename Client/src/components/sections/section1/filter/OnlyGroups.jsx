import React from "react";
import Group from "..//Group";
import "..//section1.css";
import CreatGroup from "../CreateGroup";
import {useSelector} from "react-redux"

function OnlyGroups() {
  const groups = useSelector(state => state.setGroups.groups)

  return (
    <>
      <div className="border">
        <p>Groups</p>
        <div className="zoneGroup">
             <CreatGroup/>
             {groups.map(item => {
                return <Group data={item} key={item._id}/>
              })}
        </div>
      </div>
    </>
  );
}

export default OnlyGroups;
