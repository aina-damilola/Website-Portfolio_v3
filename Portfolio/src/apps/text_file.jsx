import "./styles/text_file.css"
import { useState } from "react";
import icon_tf from "../assets/text_file_icon.png"
import Inner_text from "./inner_text";

function Text_file(props){
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
            <p id="file_name_tf" >{props.name}.txt</p>
        </button>
        {open ? <Inner_text text = {props.saved_text} func = {handleClose} title = {props.name}/> : <></>}
        </>
    )
}

export default Text_file;