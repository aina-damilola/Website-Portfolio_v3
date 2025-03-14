import Document from "../document.jsx"

import CAD from  "../../assets/specific/makeuoft/CAD.png"
import group_photo1 from "../../assets/specific/makeuoft/group_photo.jpg"
import group_photo2 from "../../assets/specific/makeuoft/group_photo2.jpg"
import medals from "../../assets/specific/makeuoft/medals.jpg"
import robot_image from "../../assets/specific/makeuoft/Robot_Image.jpg"

import video1 from "../../assets/specific/makeuoft/moving.mp4"
import thumbnail1 from "../../assets/specific/makeuoft/thumbnail_moving.png"

import video2 from "../../assets/specific/makeuoft/timelapse.mp4"
import thumbnail2 from "../../assets/specific/makeuoft/thumbnail_timelapse.png"

function MakeUofT_pics(){
    return(
        <>
            <Document icon = {CAD} bg = "#faf9f6" name = "CAD.png" content = {<img src={CAD} width='100%'/>}/>
            <Document icon = {group_photo1} bg = "#faf9f6" name = "group photo1.jpg" content = {<img src={group_photo1} width='100%'/>}/>
            <Document icon = {group_photo2} bg = "#faf9f6" name = "group photo2.jpg" content = {<img src={group_photo2} width='100%'/>}/>
            <Document icon = {medals} bg = "#faf9f6" name = "medals.jpg" content = {<img src={medals} width='100%'/>}/>
            <Document icon = {robot_image} bg = "#faf9f6" name = "robot image.jpg" content = {<img src={robot_image} height='100%'/>}/>
            <Document icon = {thumbnail1} bg = "#faf9f6" name = "video1.mp4" content = {<video height='100%' controls><source src={video1} type="video/mp4"/></video>}/>
            <Document icon = {thumbnail2} bg = "#faf9f6" name = "video2.mp4" content = {<video height='100%' controls><source src={video2} type="video/mp4"/></video>}/>
            
        </>
    )
}

export default MakeUofT_pics