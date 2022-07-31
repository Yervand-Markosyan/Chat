import React, { useState } from "react";
import email from "./icons/email.svg";
import phone from "./icons/phone.svg";
import fb from "./icons/facebook.svg";
import insta from "./icons/instagram.svg";
import linkedin from "./icons/linkedin.svg";
import "./section3.css";
import Fetch from "..//..//..//JS/services/fetch";

function PersonalinfoOpened() {
  const [info, setInfo] = useState({});



  if (!info.socialNetworks) {
    return (
      <div className="personalinfoOpened">
        <div className="section3Icons">
          <img src={email} alt="/" />
          <img src={phone} alt="/" />
          <img src={fb} alt="/" />
          <img src={insta} alt="/" />
          <img src={linkedin} alt="/" />
        </div>
        <div className="section3Disc section3Icons">
          <p>{info.email ? <a href={info.email}>{info.email}</a> : "Email"}</p>
          <p>{info.Phone ? <a href={info.Phone}>{info.Phone}</a> : "Phone"}</p>
          <p>fb.com/...</p>
          <p>instagram.com/...</p>
          <p>linkedin.com/...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {console.log(info)}
      <div className="personalinfoOpened">
        <div className="section3Icons">
          <img src={email} alt="/" />
          <img src={phone} alt="/" />
          <img src={fb} alt="/" />
          <img src={insta} alt="/" />
          <img src={linkedin} alt="/" />
        </div>
        <div className="section3Disc section3Icons">
          <p>{info.email ? <a href={info.email}>{info.email}</a> : "Email"}</p>
          <p>{info.Phone ? <a href={info.Phone}>{info.Phone}</a> : "Phone"}</p>
          <p>
            {info.socialNetworks[0] ? (
              <a href={info.socialNetworks[0]}>
                {"/" +
                  info.socialNetworks[0].split("/")[
                    info.socialNetworks[0].split("/").length - 1
                  ]}
              </a>
            ) : (
              "fb.com/..."
            )}
          </p>
          <p>
            {info.socialNetworks[1] ? (
              <a href={info.socialNetworks[1]}>
                {"/" +
                  info.socialNetworks[1].split("/")[
                    info.socialNetworks[1].split("/").length - 1
                  ]}
              </a>
            ) : (
              "instagram.com/..."
            )}
          </p>
          <p>
            {info.socialNetworks[2] ? (
              <a href={info.socialNetworks[2]}>
                {"/" +
                  info.socialNetworks[0].split("/")[
                    info.socialNetworks[2].split("/").length - 1
                  ]}
              </a>
            ) : (
              "linkedin.com/..."
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default PersonalinfoOpened;
