import "./styles/Document.css"
import { useState } from "react";
import Inner_content from "./inner_content";

let highestZ = 2

function Document(props){
    const [open, setOpen] = useState(false);
    const [z, setZ] = useState({z: highestZ});

    const handleOpen = () => {
        setOpen(true);
        highestZ++
        setZ(prevZ => ({z: highestZ}))
    };
    const handleClose = () => {
        setOpen(false);
    };

    const increaseZ = () => {
        highestZ++
        setZ(prev => ({
            z: highestZ
        }))
    }

    return(
        <>
        <button id="main_tf" className="blue" onClick={handleOpen}>
            <img id="icon_tf" src={props.icon}/>
            <p id="file_name_tf" >{props.name}</p>
        </button>
        {open ? <Inner_content content = {props.content} func = {handleClose} title = {props.name} bg = {props.bg} display = {props.display} increaseZ = {increaseZ} z = {highestZ}/> : <></>}
        </>
    )
}

export default Document;