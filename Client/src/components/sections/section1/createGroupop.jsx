import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SECRET from "../../../JS/secrets";
import Fetch from "../../../JS/services/fetch";
import "./createGroup.css";


export default function CreateGroupPopUp() {

    const [grupName, setName] = useState("")
    const [image, setImage] = useState(false)
    const [imgSrc, setSrc] = useState(`${SECRET.URL_LOCAL_SERVER}/chatpx/files/62e7204c3d3d366b68387dbd/GROUP_AVATAR.png`)
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.setCreateGroup.isOpen)
    const creator_id = useSelector(state => state.setCreateGroup.creator_id)

    const create = () => {
        if (image && grupName) {
            let formData = new FormData()
            formData.append("files", image)
            axios.post(`${SECRET.URL_LOCAL_SERVER}/chatpx/filefromclient`, formData,
                {
                    headers: {
                        'content-type': 'multipart/form-data;',
                    },
                }
            ).then((res) => {
                Fetch.post("chat/new_group", { name: grupName, creator_id, img: res.data })
                    .then(data => {
                        dispatch({ type: "ADD_CREATED_GROUP", payload: data })
                        setName('')
                        setImage('')
                        dispatch({ type: "IS_OPEN_POP", payload: false })
                    })
            }).catch((error) => {
                    console.error('Error:', error);
                });
        } else if (grupName) {
            Fetch.post("chat/new_group", { name: grupName, creator_id, })
            .then(data => {
                    dispatch({ type: "ADD_CREATED_GROUP", payload: [data] })
                    setName('')
                    setImage('')
                    dispatch({ type: "IS_OPEN_POP", payload: false })
                }).catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            alert("grupai anun gri")
        }
    };


    if (isOpen) {
        return (
            <div className="popup-fade">
                <div className="group_pop_up">
                    <div className="group_pop_body">
                        <i className="fa fa-plus close" onClick={() => { dispatch({ type: "IS_OPEN_POP", payload: false }) }}></i>
                        <div className="group_pop_up_inp">
                            <input type="text" placeholder="          Group name" onChange={e => setName(e.target.value)} value={grupName} /><br />
                            <label className="custom-file-upload">
                                <input type="file" name="files" onChange={(e) => {
                                    setImage((e.target.files[0]))
                                    setSrc(URL.createObjectURL(e.target.files[0]))
                                }} />
                                <i className="fa fa-plus plus" ></i> Image
                            </label><br />
                            <h3>Default avatar </h3>
                            <img src={imgSrc} alt="" className="uploadedImage" />
                        </div>
                        <h3 className="create_button" onClick={create}> <i className="fa fa-plus plus" ></i> Create</h3>
                    </div>
                </div>
            </div>
        )

    } else {
        return null
    }

}