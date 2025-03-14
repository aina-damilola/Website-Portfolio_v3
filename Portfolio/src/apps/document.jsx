import "./styles/Document.css"
import { useState } from "react";
import Inner_content from "./inner_content";

function Document(props){
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
        <button id="main_tf" className="blue" onClick={handleOpen}>
            <img id="icon_tf" src={props.icon}/>
            <p id="file_name_tf" >{props.name}</p>
        </button>
        {open ? <Inner_content content = {props.content} func = {handleClose} title = {props.name} bg = {props.bg} display = {props.display}/> : <></>}
        </>
    )
}

export default Document;