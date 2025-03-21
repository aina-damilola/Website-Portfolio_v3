import shortcut from "../../../assets/chrome_shortcut.png"
import text_file from "../../../assets/text_file_icon.png"
import Document from "../../document.jsx"
import Shortcut from "../../shortcut.jsx";

function Text(){
    return(
        <>
            <b>NSBE Hacks 2025 Website </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Oct 2024 - Jan 2025</i>
            <hr/>
            As the lead web developer for the National Society of Black Engineers UofT, I programmed, designed and deployed the website for their most recent hackathon, NSBE Hacks 2025. <a href="https://nsbehacksuoft.ca/" target="_blank">nsbehacksuoft.ca</a>. Managed cross platform compatibility and optimized client-side rendering.
            <br/>
            <b>Languages and Tools Used:</b>
            <ul>
                <li>JavaScript<i className="global_grey">: Programming language used</i></li>
                <li>React.js<i className="global_grey">: Javascript Library used for web app creation</i></li>
                <li>HTML<i className="global_grey">: Used for modifying metadata and build files</i></li>
                <li>CSS<i className="global_grey">: Styling, animations and device compatibility</i></li>
                <li>Three.js<i className="global_grey">: Tool for deploying the website to the internet  </i></li>
                <li>Node.js<i className="global_grey">: Environment for package installation and local hosting </i></li>
                <li>Github Pages<i className="global_grey">: Tool for deploying the website to the internet  </i></li>
            </ul>
        </>
    )
}

function UTSMRaven(){
    return(
        <>
            <Document icon = {text_file} bg = "#faf9f6" name = "ReadMe" display = "block" content = {<Text/>}/>
            <Shortcut icon = {shortcut} name = "NSBEHacks 2025" link = "https://nsbehacksuoft.ca/"/>
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/NSBEHacks2025-Website"/>
        </>
    )   
}

export default UTSMRaven