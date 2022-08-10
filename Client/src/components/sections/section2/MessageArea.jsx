import React from "react";
import axios from "axios";
import Emoji from "./Emoji";
import sendImg from "..//..//..//icons/logo.png";
import smile from "..//..//..//icons/smile.svg";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SOCKET from "../../../JS/soket_Io_client/Socket";
import SECRET from "../../../JS/secrets";
import "./section2.css";

export default function MessageArea() {
  const [emojiOpen, setEmoji] = useState(false)
  const [message, setMessage] = useState('')
  const [isFile, setIsFile] = useState(false)
  const [file, setFile] = useState("")
  const data = useSelector(state => state.setSendData)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch({ type: "SEND_MESSAGE_DATA", payload: message, key: "message" })
  }, [message])


  const upload = () => {
    let formData = new FormData()
    formData.append("files", file)
    axios.post(`${SECRET.URL_LOCAL_SERVER}/chatpx/filefromclient`, formData,
      {
        headers: {
          'content-type': 'multipart/form-data;',
        },
      }
    )
      .then(async (res) => {
          SOCKET.socket.emit("sendFile", {data , file:res.data})
      })
  }

  return (
    <div className="messagePlace">
      <p onClick={() => {
        setIsFile(true)
        dispatch({ type: "SEND_MESSAGE_DATA", payload: "file", key: "type" })
      }}>+</p>
      {!isFile ? (
        <>
          <textarea placeholder="Type a message here" onChange={(e) => {
            setEmoji(false)
            setMessage(e.target.value)
          }} value={message} />
          <img
            onClick={() =>
              setEmoji(!emojiOpen)
            }
            src={smile}
            alt="/"
            className="smile"
          />
          {emojiOpen ? <Emoji props={{ setMessage, message }} /> : null}
        </>
      ) : (
        <>
          <label className="custom-file-upload">
            <input type="file" name="files" onChange={(e) => {
              setFile((e.target.files[0]))
            }} />
             Upload file
          </label><br />
        </>
      )}

      <img className="send" src={sendImg} alt="sadasd/"
        onClick={() => {
          if (message.length !== 0 && !isFile) {
            SOCKET.socket.emit("sendMessage", data)
            setMessage('')
          } else if (file) {
            upload()
            setFile("")
            setIsFile(false)
          }
        }}
      />
    </div>
  );
}
