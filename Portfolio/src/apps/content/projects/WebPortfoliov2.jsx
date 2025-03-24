import shortcut from "../../../assets/chrome_shortcut.png"
import text_file from "../../../assets/text_file_icon.png"
import Document from "../../document.jsx"
import Shortcut from "../../shortcut.jsx";

function Text(){
    return(
        <>
            <b>Student Web Portfolio </b> 
            <hr/>
            This is my second student portfolio made. It showcases the differenct aspects of a students projects, and information about themselves. I designed and developed the <a target="_blank" href="https://www.aina-damilola.tech">website</a> handing it over to a friend to showcase their work.
            <br/>
            <b>Languages and Tools Used:</b>
            <ul>
                <li>JavaScript<i className="global_grey">: Programming language used</i></li>
                <li>React.js<i className="global_grey">: Javascript Library used for web app creation</i></li>
                <li>HTML<i className="global_grey">: Used for modifying metadata and build files</i></li>
                <li>CSS<i className="global_grey">: Styling, animations and device compatibility</i></li>
                <li>Github Pages<i className="global_grey">: Tool for deploying the website to the internet  </i></li>
            </ul>
        </>
    )
}

function Portfoliov2(){
    return(
        <>
            <Document icon = {text_file} bg = "#faf9f6" name = "ReadMe" display = "block" content = {<Text/>}/>
            <Shortcut icon = {shortcut} name = "Student Portfolio" link = "https://www.aina-damilola.tech"/>
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/Website-Portfolio_v2"/>
        </>
    )   
}

export default Portfoliov2