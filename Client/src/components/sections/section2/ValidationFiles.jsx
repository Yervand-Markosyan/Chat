import React from "react";
import pdf from "..//..//..//icons/pdf.png"
import zip from "..//..//..//icons/zip.png"
import doc from "..//..//..//icons/doc.png"
import { useRef } from "react";


const ValidationFiles = ({ props }) => {

    const a = useRef(null)

    let type = props.split(".")[1]

    if (type === "zip" || type === "rar") {
        return (
            <div className="messageFile">
                <a href={props} download="true">
                    <img src={zip} className="thisFile" />
                </a>
            </div>
        )
    }
    if (type === "svg") {
        return (
            <div className="messageFile">
                <a href={props} download="true">
                             /// img html.file
                </a>
            </div>
        )
    }
    if (type === "doc" || type === "docx") {
        return (
            <div className="messageFile">
                <a href={props} download="true">
                    <img src={doc} className="thisFile" />
                </a>
            </div>
        )
    }
    if (type === "pdf") {
        return (
            <div className="messageFile" >
                <a href={props} download="true">
                    <img src={pdf} className="thisFile" />
                </a>
            </div>
        )
    }
    if (type === "html") {
        <div className="messageFile" >
            <a href={props} download="true">
                             /// img html
            </a>
        </div>
    }
    if (type === "css") {
        <div className="messageFile" >
            <a href={props} download="true">
                             /// img css
            </a>
        </div>
    }
    if (type === "js") {
        <div className="messageFile" >
            <a href={props} download="true">
                             /// img js
            </a>
        </div>
    }
    if (type === "mp4")
        return (
            <div className="messageFile" >
                <video src={props} className="thisFileVideo" autoPlay onClick={(e) => {
                    e.target.controls = "controls"
                }} />
            </div>
        )
}

export default ValidationFiles