import shortcut from "../../../assets/chrome_shortcut.png"
import text_file from "../../../assets/text_file_icon.png"
import Document from "../../document.jsx"
import Shortcut from "../../shortcut.jsx";

function Text(){
    return(
        <>
            <b>Student Web Portfolio</b>
            <hr />
            This is the second version of my student portfolio, designed to showcase various aspects of a student's projects and personal information. I designed and developed the <a target="_blank" href="https://www.aina-damilola.tech" rel="noopener noreferrer">website</a>, which I then handed over to a friend to display their work. The portfolio serves as a comprehensive platform for students to present their achievements and skills in a visually appealing and user-friendly way.
            <br />
            <b>Languages and Tools Used:</b>
            <ul>
                <li>JavaScript <i className="global_grey">: The programming language used to implement core functionality</i></li>
                <li>React.js <i className="global_grey">: JavaScript library used for building the dynamic user interface</i></li>
                <li>HTML <i className="global_grey">: Used for structuring content and managing metadata</i></li>
                <li>CSS <i className="global_grey">: Applied for styling, animations, and ensuring device compatibility</i></li>
                <li>GitHub Pages <i className="global_grey">: Platform for deploying the website to the internet</i></li>
            </ul>

        </>
    )
}

function Portfoliov2(){
    return(
        <>
            <Document icon = {text_file} bg = "#faf9f6" name = "ReadMe" display = "block" content = {<Text/>}/>
            {/* <Shortcut icon = {shortcut} name = "Student Portfolio" link = "https://www.aina-damilola.tech"/> */}
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/Website-Portfolio_v2"/>
        </>
    )   
}

export default Portfoliov2