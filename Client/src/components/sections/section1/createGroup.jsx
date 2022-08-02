import React from "react";
import { useDispatch } from "react-redux";
import "./createGroup.css"

export default function CreatGroup() {
     const dispatch = useDispatch()

    return (
        <div className="createGroup" onClick={()=>dispatch({type:"IS_OPEN_POP",payload: true})}>
           <i className="fa fa-plus plus" ></i>  Create Group
        </div>
    )
}