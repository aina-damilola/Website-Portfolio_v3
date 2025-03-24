import Document from "../document.jsx"
import folder from "../../assets/folder.png"

import NSBE from "./projects/NSBEHacks2025.jsx"
import Portfoliov2 from "./projects/WebPortfoliov2.jsx"
import Brain from "./projects/braintumordetector.jsx"
import DesktopOS from "./projects/desktopOS.jsx"

{/* <Document icon = {text_file} bg = "#faf9f6" name = "Professional Experience.txt" display = "block" content = {<Experience/>}/>
<Document icon = {folder} bg = "#323232" name = "MakeUofT 2025 pics" display = "flex" content = {<MakeUofT_pics/>}/> */}
function Projects(){
    return(
        <>
            
            {/* <Document icon = {folder} bg = "#323232" name = "Space Dog" display = "flex" content = {<></>}/>  */}
            {/* <Document icon = {folder} bg = "#323232" name = "Mobile Map" display = "flex" content = {<></>}/>  */}
            <Document icon = {folder} bg = "#323232" name = "Mock Desktop OS" display = "flex" content = {<DesktopOS/>      }/> 
            {/* <Document icon = {folder} bg = "#323232" name = "Quicker Picker Upper" display = "flex" content = {<></>}/>  */}
            {/* <Document icon = {folder} bg = "#323232" name = "SIMON" display = "flex" content = {<></>}/>  */}
            {/* <Document icon = {folder} bg = "#323232" name = "World-le" display = "flex" content = {<></>}/>  */}
            <Document icon = {folder} bg = "#323232" name = "NSBEHacks Website" display = "flex" content = {<NSBE/>}/> 
            {/* <Document icon = {folder} bg = "#323232" name = "UTSM Raven" display = "flex" content = {<></>}/>  */}
            <Document icon = {folder} bg = "#323232" name = "Brain Tumor Detector" display = "flex" content = {<Brain/>}/> 
            <Document icon = {folder} bg = "#323232" name = "Student Portfolio" display = "flex" content = {<Portfoliov2/>}/> 
            {/* <Document icon = {folder} bg = "#323232" name = "Custom Split-Flap Display" display = "flex" content = {<></>}/>  */}
            {/* <Document icon = {folder} bg = "#323232" name = "Smart Ball" display = "flex" content = {<></>}/>  */}
            {/* <Document icon = {folder} bg = "#323232" name = "GenAI hackathon" display = "flex" content = {<></>}/>  */}
            
        </>
    )
}

export default Projects