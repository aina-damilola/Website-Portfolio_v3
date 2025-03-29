import shortcut from "../../../assets/chrome_shortcut.png"
import text_file from "../../../assets/text_file_icon.png"
import folder from "../../../assets/folder.png"
import Document from "../../document.jsx"
import Shortcut from "../../shortcut.jsx";

import CAD from "../../../assets/specific/makeuoft/CAD.png"
import demo from "../../../assets/specific/makeuoft/demo.mp4"
import group_photo from "../../../assets/specific/makeuoft/group_photo.jpg"
import moving_item from "../../../assets/specific/makeuoft/movingItem.mp4"
import robot_image from "../../../assets/specific/makeuoft/Robot_Image.jpg"
import thumbnail1 from "../../../assets/specific/makeuoft/thumbnail1.png"
import thumbnail2 from "../../../assets/specific/makeuoft/thumbnail2.png"

function Text(){
    return(
        <>
            <b>Robotic Arm - Quicker Picker Upper</b>
            <hr />
            The Quicker Picker Upper is a robotic arm designed to autonomously identify and pick up objects using real-time object recognition. Using a Kinect Xbox 360 depth camera, the arm successfully detects objects in a waste collection area. The system controls the arm's movements via Arduino, allowing it to pick up objects. Although the sorting feature wasn't implemented due to time constraints, the object detection and pickup functionality were successfully demonstrated. The Kinect operated as a separate component for object recognition.
            <br />
            <b>Languages and Tools Used:</b>
            <ul>
                <li>C++ <i className="global_grey">: Programming language used for controlling the robotic arm and logic implementation</i></li>
                <li>Python <i className="global_grey">: Used for processing Kinect data and integrating with the system</i></li>
                <li>Arduino <i className="global_grey">: Controlled the servo motors for the robotic arm’s movement</i></li>
                <li>SOLIDWORKS <i className="global_grey">: 3D modeling software used to design and create custom robotic arm components</i></li>
            </ul>
        </>
    )
}

function Demo(){
    return(
        <>
            <Document icon = {thumbnail2} bg = "#323232" name = "Moves Object.mp4" display = "block" content = {<video height='100%' controls><source src={moving_item} type="video/mp4"/></video>}  short="Video of robot arm moving a water bottle"/>
            <Document icon = {thumbnail1} bg = "#323232" name = "Moves Around.mp4" display = "block" content = {<video height='100%' controls><source src={demo} type="video/mp4"/></video>}  short="Video of robot arm moving around with human input"/>
        </>
    )
}

function Other(){
    return(
        <>
            <Document icon = {robot_image} bg = "#323232" name = "Robotic Arm.jpg" display = "block" content = {<img src={robot_image} height="100%"/>} short="Full image of the Robotic Arm"/>
            <Document icon = {CAD} bg = "#323232" name = "3D model.jpg" display = "block" content = {<img src={CAD} height="100%"/>} short="Image of the original 3D design of the arm linkages and base. Designed with SOLIDWORKS"/>
            <Document icon = {group_photo} bg = "#323232" name = "Group Photo.jpg" display = "block" content = {<img src={group_photo} width="100%"/>} short="Group photo at MakeUofT2025 Hackathon awards, 2nd place Best Overall for robotic arm 'Quicker Picker Upper'"/>
        </>
    )
}

function RoboticArm(){
    return(
        <>
            <Document icon = {text_file} bg = "#faf9f6" name = "ReadMe" display = "block" content = {<Text/>}/>
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/Jdgenius/The-Quicker-Picker-Upper"/>
            <Document icon = {folder} bg = "#323232" name = "Demo Videos" display = "flex" content = {<Demo/>} short="Demo Videos of the Robotic Arm" />
            <Document icon = {folder} bg = "#323232" name = "Other" display = "flex" content = {<Other/>} short="Other Images related to the robotic arm" />
            <Shortcut icon = {shortcut} name = "devpost" link = "https://devpost.com/software/the-quicker-picker-upper"/>
        </>
    )   
}

export default RoboticArm