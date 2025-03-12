import "./styles/file.css"
import { useState } from "react";
import icon_tf from "../assets/folder.png"

function Folder(props){
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
            <img id="icon_tf" src={icon_tf}/>
            <p id="file_name_tf" >{props.name}</p>
        </button>
        {open ? <Inner_folder func = {handleClose} title = {props.name}/> : <></>}
        </>
    )
}

export default Folder;