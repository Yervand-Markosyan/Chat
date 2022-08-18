import React from "react";
import pdf from "./icons/pdf.png"
import zip from "./icons/zip.png"
import doc from "./icons/doc.png"
import js from "./icons/js.png"
import css from "./icons/css.png"
import html from "./icons/html.png"



const ValidationFiles = ({ props }) => {

    let type = props.split(".")[1]

    if (type === "zip" || type === "rar") {
        return (
            <div className="messageFile">
                <a href={props} download="true">
                    <img src={zip} className="thisFile" alt="img" />
                </a>
            </div>
        )
    } else if (type === "svg") {
        return (
            <div className="messageFile">
                <a href={props} download="true">
                    <img src={zip} alt="img"/>
                </a>
            </div>
        )
    }else if (type === "doc" || type === "docx") {
        return (
            <div className="messageFile">
                <a href={props} download="true">
                    <img src={doc} className="thisFile" alt="img" />
                </a>
            </div>
        )
    }else if (type === "pdf") {
        return (
            <div className="messageFile" >
                <a href={props} download="true">
                    <img src={pdf} className="thisFile" alt="img" />
                </a>
            </div>
        )
    }else if (type === "html") {
        return(
        <div className="messageFile" >
            <a href={props} download="true">
                <img src={html}  className="thisFile" alt="img"/>
            </a>
        </div>
        )
    }else if (type === "css") {
        return(
        <div className="messageFile" >
            <a href={props} download="true">
                <img src={css}  className="thisFile" alt="img"/>
            </a>
        </div>
        )
    } else if (type === "js") {
        return(
        <div className="messageFile" >
            <a href={props} download="true">
                <img src={js}  className="thisFile" alt="img"/>
            </a>
        </div>
        )
    }else if (type === "mp4"){
        return (
            <div className="messageFile" >
                <video src={props} className="thisFileVideo" autoPlay onClick={(e) => {
                    e.target.controls = "controls"
                }} />
            </div>
        )}else if (type === "mp3"){
        return (
            <div className="messageFile" >
                <audio  src={props} className="thisFileAudio"  controls />
            </div>
        )
    }else{
        return (
            <div className="messageFile">
                {/* <a href={props} download="true"> */}
                    <img src={props} className="thisFile" alt="img" controls onClick={(e)=>{
                        e.target.fullScreen = true 
                    }} />
                {/* </a> */}
            </div>
        )
    }
        console.log(type);
}

export default ValidationFiles