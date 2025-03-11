import "./styles/inner_text.css";
import { useState, useRef } from "react";

function Inner_text(props) {
    const [position, setPosition] = useState({ top: 150, left: 150 });
    const drag = useRef(null);
    const isDragging = useRef(false);

    function start(event) {
        isDragging.current = true;
        drag.current = {
            offsetX: event.clientX - position.left,
            offsetY: event.clientY - position.top
        }
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stop);
    }

    function move(event) {
        if(!isDragging.current){return}
        setPosition({
            top: event.clientY - drag.current.offsetY,
            left: event.clientX - drag.current.offsetX
        });
    }

    function stop() {
        isDragging.current = false;
        document.removeEventListener("mousemove", moveDrag);
        document.removeEventListener("mouseup", stopDrag);
    }

    const [maximized, setMaximized] = useState(false)

    function resize(){
        setMaximized(!maximized)
    }

    return (
        <div id="main_it" style={{top: `${position.top}px`, left: `${position.left}px`}}>
            <div id="buttons_it" onMouseDown={start}>
                <h1 id="title_it">{props.title}</h1>
                <button id="resize_it" onClick={resize} style={maximized ? {backgroundImage: 'url("../assets/maximize.svg")'}: {backgroundImage: 'url("../assets/minimize.svg")'}}></button>
                <button id="exit_it" onClick={props.func}></button>
            </div>
            <p id="text_it">{props.text}</p>
        </div>
    );
}

export default Inner_text;
