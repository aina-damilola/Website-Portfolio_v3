import "./styles/main_page.css"
import Document from "./document.jsx";
import Shortcut from "./shortcut.jsx";

import text_file from "../assets/text_file_icon.png"
import folder from "../assets/folder.png"
import shortcut from "../assets/chrome_shortcut.png"
import settings from "../assets/settings.png"

import About_txt from "./content/about_txt.jsx"
import Experience from "./content/pro_experience/pro_experience.jsx";
import Settings from "./settings.jsx";
import Projects from "./content/projects.jsx";

function Main_page(){
    return(

        <div id="main_mp">
            
            <Document icon = {text_file} bg = "#faf9f6" name = "About.txt" display = "block" content = {<About_txt/>}  short="an overview of who I am and my skills."/>
            <Document icon = {text_file} bg = "#faf9f6" name = "Professional Experience.txt" display = "block" content = {<Experience/>}  short="my volunteer, extracurricular and work experiences."/>
            {/* <Document icon = {settings} bg = "#323232" name = "Settings" display = "flex" content = {<Settings/>}/> */}
            <Document icon = {folder} bg = "#323232" name = "Projects" display = "flex" content = {<Projects/>} short="highlight of my projects with demos and source codes" />
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/Website-Portfolio_v3"/>
            
        </div>

    )
}



export default Main_page;