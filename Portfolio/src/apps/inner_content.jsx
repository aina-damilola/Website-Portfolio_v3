import "./styles/inner_content.css";
import { useState, useRef } from "react";

import max from "../assets/maximize.svg"
import min from "../assets/minimize.svg"
import close from "../assets/close.svg"

function Inner_content(props) {
    const [position, setPosition] = useState({ top: 100, left: 125 });
    const [size, setSize] = useState({width: 50, height:50});
    const drag = useRef(null);
    const isDragging = useRef(false);

    function start(event) {
        isDragging.current = true;
        drag.current = {
            offsetX: event.clientX - position.left,
            offsetY: event.clientY - position.top
        }
        props.increaseZ();
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stop);
    }

    function move(event) {
        if(!isDragging.current){return}
        
        setPosition(prev => ({
            top: event.clientY - drag.current.offsetY,
            left: event.clientX - drag.current.offsetX,
        }))
    }

    function stop() {
        isDragging.current = false;
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
    }

    const [maximized, setMaximized] = useState(false)

    function resize(){
        
        if(!maximized){
            setPosition(prev => ({
                top: 5,
                left: 5,
            }))
            setSize({
                width: 80, height: 80
            })
        }
        else{
            setPosition(prev => ({
                top: 150,
                left: 150,
            }))
            setSize({
                width: 50, height: 50
            })
        }
        props.increaseZ();
        setMaximized(!maximized)
    }

    return (
        <div id="main_it" style={{ top: `${position.top}px`, left: `${position.left}px`, width: `${size.width}vw`, height: `${size.height}vh`, zIndex: `${props.z}`}}>
            <div id="buttons_it" onMouseDown={start}>
                <h1 id="title_it">{props.title}</h1>
                <button id="resize_it" onClick={resize}><img src= {maximized ? min : max}/> </button>
                <button id="exit_it" onClick={props.func}><img src={close}/></button>
            </div>
            <div id="content_it" style={{display: `${props.display}`, backgroundColor: `${props.bg}`}}>{props.content}</div>
        </div>
    );
}

export default Inner_content;
