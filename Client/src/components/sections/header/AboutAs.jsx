import React from "react";
import pdf from "./cv.png"
import "./aboutAs.css"

export default function AboutAs() {
    const CV_MOVSES = "https://serverchatpx.herokuapp.com/chatpx/files/630015dbb60cd6485896a720/Movses_Harutyunyan_CV.pdf"
    const MovsesImg = "https://serverchatpx.herokuapp.com/chatpx/files/62cf6774f8ecd9a1acf55d7a/noImgMen.PNG"
    const certificate_Movses = "https://serverchatpx.herokuapp.com/chatpx/files/63001e404002a43b5f90613d/Certificate_Movses.png"
    const certificate_Yrvand = "https://serverchatpx.herokuapp.com/chatpx/files/63001e404002a43b5f90613d/Certificate_Movses.png"
    const CV_YERVAND = "https://serverchatpx.herokuapp.com/chatpx/files/63001622b60cd6485896a723/CV-js.pdf"

    return (
        <div className="aboutAs">
            <div className="Movses twoDiv">
                <img src={MovsesImg} alt="img" className="dev_avatar" />
                <h1>Movses Harutyunyan</h1>
                <div className="about_files">
                    <a href={certificate_Movses} download className="a_aboutAs">
                        <img src={certificate_Movses} className="certificateImg" alt="img" />
                    </a>
                    <div>
                        <a href={CV_MOVSES} download className="a_aboutAs">
                            <img src={pdf} className='aboutAs_pdf' alt="img" />
                            <h3>CV Movse Harutyunyan</h3>
                        </a>
                    </div>
                </div>
                <div className="contacts">
                    <h3>contacts</h3>
                    <lu>
                        <li>email.../ movsesharutyunyan20@gmail.com</li>
                        <li>github.../ &ensp;
                            <a href="https://github.com/HarutyunyanMovses" className="a_aboutAs" target="_blank" >
                                https://github.com/HarutyunyanMovses
                            </a></li>
                        <li>phone.../ +374(94)95-66-05</li>
                    </lu>
                </div>
            </div>
            <div className="Yervand twoDiv">
                <img src={MovsesImg} alt="img" className="dev_avatar" />
                <h1>Yervand Markosyan</h1>
                <div className="about_files">
                   <p> <a href={certificate_Yrvand} download className="a_aboutAs">
                        <img src={certificate_Yrvand} className="certificateImg" alt="img" />
                    </a></p>
                    <div>
                        <a href={CV_YERVAND} download className="a_aboutAs">
                            <img src={pdf} className='aboutAs_pdf' />
                            <h3>CV Yervand Markosyan</h3>
                        </a>
                    </div>
                </div>
                <div className="contacts">
                    <h3>contacts</h3>
                    <lu>
                        <li>email.../ </li>
                        <li>github.../ &ensp;
                            <a href="https://github.com/Yervand-Markosyan" className="a_aboutAs" target="_blank" >
                                https://github.com/Yervand-Markosyan
                            </a></li>
                        <li>phone.../ </li>
                    </lu>
                </div>
            </div>
        </div>
    )
}