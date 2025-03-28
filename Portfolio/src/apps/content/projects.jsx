import Document from "../document.jsx"
import folder from "../../assets/folder.png"

import NSBE from "./projects/NSBEHacks2025.jsx"
import Portfoliov2 from "./projects/WebPortfoliov2.jsx"
import Brain from "./projects/braintumordetector.jsx"
import RoboticArm from "./projects/RoboticArm.jsx"
import Planwise from "./projects/Planwise.jsx"

import cohere from "../../assets/skills_logos/cohere.jpg"
import css from "../../assets/skills_logos/css.png"
import flask from "../../assets/skills_logos/flask.png"
import html from "../../assets/skills_logos/html.png"
import js from "../../assets/skills_logos/javascript.png"
import python from "../../assets/skills_logos/python.png"
import pytorch from "../../assets/skills_logos/pytorch.jpg"
import react from "../../assets/skills_logos/react.png"
import threejs from "../../assets/skills_logos/threejs.png"
import arduino from "../../assets/skills_logos/arduino.png"
import cpp from "../../assets/skills_logos/cpp.jpeg"
import solidworks from "../../assets/skills_logos/solidworks.png"

function Container({skills}){
    return(
        <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap", gap: "5px"}}>
        {skills.map((skill, index) => (
            <div key={index} style={{ backgroundPosition:"center", backgroundColor:"white", backgroundSize:"cover", width:"40px", height :"40px" ,backgroundImage: `url(${skill})`, border:"solid 2px #2e2e2e", borderRadius:"5px"}}/>  // Render each skill
          ))}
        </div>
    )
}
function Projects(){
    return(
        <>
            
            {/* <Document icon = {folder} bg = "#323232" name = "Space Dog" display = "flex" content = {<></>}/>  */}
            {/* <Document icon = {folder} bg = "#323232" name = "Mobile Map" display = "flex" content = {<></>}/>  */}
            {/* <Document icon = {folder} bg = "#323232" name = "Mock Desktop OS" display = "flex" content = {<DesktopOS/>      }/>  */}
            <Document icon = {folder} bg = "#323232" name = "Quicker Picker Upper" display = "flex" content = {<RoboticArm/>} short = "a robotic arm used for trash pickup and organization" category = "Robotics" skills = {<Container skills = {[cpp, solidworks, arduino, python]}/>}/>
            {/* <Document icon = {folder} bg = "#323232" name = "SIMON" display = "flex" content = {<></>}/>  */}
            {/* <Document icon = {folder} bg = "#323232" name = "World-le" display = "flex" content = {<></>}/>  */}
            <Document icon = {folder} bg = "#323232" name = "NSBEHacks Website" display = "flex" content = {<NSBE/>} short ="a website made for NSBEHacks 2025" category = "Front End Web Development" skills = {<Container skills={[react, js, threejs, html, css]}/>}/> 
            {/* <Document icon = {folder} bg = "#323232" name = "UTSM Raven" display = "flex" content = {<></>}/>  */}
            <Document icon = {folder} bg = "#323232" name = "Brain Tumor Detector" display = "flex" content = {<Brain/>} short ="a CNN model that detects the different types of brain tumours" category ="Machine Learning" skills = {<Container skills={[python, pytorch]}/>}/> 
            <Document icon = {folder} bg = "#323232" name = "Student Portfolio" display = "flex" content = {<Portfoliov2 />} short ="an old iteration of my online portfolio" category="Front End Web Development" skills = {<Container skills={[react, js, html, css]}/>}/> 
            {/* <Document icon = {folder} bg = "#323232" name = "Custom Split-Flap Display" display = "flex" content = {<></>}/>  */}
            {/* <Document icon = {folder} bg = "#323232" name = "Smart Ball" display = "flex" content = {<></>}/>  */}
            <Document icon = {folder} bg = "#323232" name = "Planwise Web App" display = "flex" content = {<Planwise/>} short ="a full-stack website made for planning schedules and finances" category = "Full-Stack Web Development" skills = {<Container skills={[react, js, threejs, cohere, flask, python, html, css]}/>}/> 
            
        </>
    )
}

export default Projects