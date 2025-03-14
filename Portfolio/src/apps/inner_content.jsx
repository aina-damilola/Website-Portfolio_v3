import "./styles/inner_content.css";
import { useState, useRef } from "react";

let highestZ = 2;

function Inner_content(props) {
    const [position, setPosition] = useState({ top: 150, left: 150, z: highestZ });
    const [size, setSize] = useState({width: 50, height:50});
    const drag = useRef(null);
    const isDragging = useRef(false);

    function start(event) {
        isDragging.current = true;
        drag.current = {
            offsetX: event.clientX - position.left,
            offsetY: event.clientY - position.top
        }
        setPosition(prev => ({
            ...prev,  
            z: highestZ
        }))
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stop);
        console.log("heere1")
    }

    function move(event) {
        if(!isDragging.current){return}
        console.log("heere2")
    
        
        setPosition(prev => ({
            ...prev,  
            top: event.clientY - drag.current.offsetY,
            left: event.clientX - drag.current.offsetX,
        }))
    }

    function stop() {
        isDragging.current = false;
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
        highestZ++; 
        console.log("heere3")
    }

    const [maximized, setMaximized] = useState(true)

    function resize(){
        setMaximized(!maximized)
        if(maximized){
            setPosition(prev => ({
                z: highestZ,  
                top: 5,
                left: 5,
            }))
            setSize({
                width: 80, height: 80
            })
        }
        else{
            setPosition(prev => ({
                z: highestZ,  
                top: 150,
                left: 150,
            }))
            setSize({
                width: 50, height: 50
            })
        }
        highestZ++;
    }

    return (
        <div id="main_it" style={{ top: `${position.top}px`, left: `${position.left}px`, width: `${size.width}vw`, height: `${size.height}vh`, zIndex: `${position.z}`}}>
            <div id="buttons_it" onMouseDown={start}>
                <h1 id="title_it">{props.title}</h1>
                <button id="resize_it" onClick={resize} />
                <button id="exit_it" onClick={props.func}/>
            </div>
            <p id="content_it" style={{display: `${props.display}`, backgroundColor: `${props.bg}`}}>{props.content}</p>
        </div>
    );
}

export default Inner_content;
