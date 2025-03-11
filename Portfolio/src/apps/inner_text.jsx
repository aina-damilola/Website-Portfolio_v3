import "./styles/inner_text.css";
import { useState, useRef } from "react";

import maximizedIcon from "../assets/maximize.svg"
import minimizedIcon from "../assets/minimize.svg"

function Inner_text(props) {
    const [position, setPosition] = useState({ top: 150, left: 150 });
    const [size, setSize] = useState({width: 50, height:50});
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
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
    }

    const [maximized, setMaximized] = useState(true)

    function resize(){
        setMaximized(!maximized)
        if(maximized){
            setPosition({
                top: 5, left: 5
            })
            setSize({
                width: 98.5, height: 94
            })
        }
        else{
            setPosition({
                top: 150, left: 150
            })
            setSize({
                width: 50, height: 50
            })
        }
    }

    return (
        <div id="main_it" style={{top: `${position.top}px`, left: `${position.left}px`, width: `${size.width}%`, height: `${size.height}%`}}>
            <div id="buttons_it" onMouseDown={start}>
                <h1 id="title_it">{props.title}</h1>
                <button id="resize_it" onClick={resize} />
                <button id="exit_it" onClick={props.func}/>
            </div>
            <p id="text_it">{props.text}</p>
        </div>
    );
}

export default Inner_text;
