import shortcut from "../../../assets/chrome_shortcut.png"
import text_file from "../../../assets/text_file_icon.png"
import Document from "../../document.jsx"
import Shortcut from "../../shortcut.jsx"
import video from "../../../assets/specific/planwise/PlanWise.mp4"
import thumbnail from "../../../assets/specific/planwise/image.png"

function Text(){
    return(
        <>
            <b>PlanWise: Simplifying Financial Planning and Task Management</b>
            <hr />
            PlanWise is an innovative tool designed to assist individuals, particularly those who are not technologically inclined, such as the elderly, in managing their finances and day-to-day activities. The platform streamlines the process of accessing banking information and scheduling tasks by using an intuitive chatbot and personalized planning tool. Our goal is to bridge the gap between technology and accessibility, making daily tasks easier for users.
            <br/>
            <b>What It Does:</b>
            <br/>
            PlanWise combines banking and personal task management into one seamless platform. The key features include:

            <li>Banking System Simulation</li> Users can interact with a chatbot to quickly obtain the banking information they need, eliminating the need to navigate through complex menus. Users can also log purchases by uploading receipt images, which are automatically updated in their accounts.
            
            <li>Personalized Planning Tool</li> PlanWise allows users to input event or task details via text. The system then generates a personalized plan and schedules the event on the user's calendar within the UI.
            <br/>
            <b>Languages and Tools Used:</b>
            <ul>
                <li>Python <i className="global_grey">: The primary programming language used to develop backend logic</i></li>
                <li>Flask <i className="global_grey">: Framework used for backend development and managing the server-side functionality</i></li>
                <li>Google Gemini <i className="global_grey">: AI tool used to provide financial recommendations through automated data analysis</i></li>
                <li>JavaScript <i className="global_grey">: Programming language used for creating the interactive frontend</i></li>
                <li>React.js <i className="global_grey">: JavaScript library used for building the user interface</i></li>
                <li>JSON <i className="global_grey">: Format used for structuring data between the backend and frontend</i></li>
                <li>NoSQL <i className="global_grey">: Database technology used to efficiently store and retrieve user data</i></li>
                <li>Cohere <i className="global_grey">: AI API used for processing user input and generating structured plans</i></li>
            </ul>
        </>
    )
}

function Planwise(){
    return(
        <>
            <Document icon = {text_file} bg = "#faf9f6" name = "ReadMe" display = "block" content = {<Text/>}/>
            <Document icon = {thumbnail} bg = "#323232" name = "Demo Video.mp4" display = "block" content = {<video height='100%' controls><source src={video} type="video/mp4"/></video>} short="video demo of our web application"/>
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/PlanWise"/>
        </>
    )   
}

export default Planwise