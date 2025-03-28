import shortcut from "../../../assets/chrome_shortcut.png"
import text_file from "../../../assets/text_file_icon.png"
import Document from "../../document.jsx"
import Shortcut from "../../shortcut.jsx";

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

function RoboticArm(){
    return(
        <>
            <Document icon = {text_file} bg = "#faf9f6" name = "ReadMe" display = "block" content = {<Text/>}/>
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/Website-Portfolio_v2"/>
        </>
    )   
}

export default RoboticArm