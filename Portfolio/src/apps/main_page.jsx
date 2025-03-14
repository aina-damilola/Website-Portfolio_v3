import "./styles/main_page.css"
import Document from "./document.jsx";
import Shortcut from "./shortcut.jsx";

import text_file from "../assets/text_file_icon.png"
import folder from "../assets/folder.png"
import shortcut from "../assets/chrome_shortcut.png"
// import profile from "../assets/specific/profile.jpg"

import About_txt from "./content/about_txt.jsx"
import MakeUofT_pics from "./content/makeuoft2025pics.jsx"

function Main_page(){
    return(

        <div id="main_mp">
            <Document icon = {text_file} bg = "#faf9f6" name = "About.txt" content = {<About_txt/>}/>
            <Document icon = {folder} bg = "#323232" name = "MakeUofT 2025 pics" display = "flex" content = {<MakeUofT_pics/>}/>
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/Website-Portfolio_v3"/>
        </div>

    )
}



export default Main_page;