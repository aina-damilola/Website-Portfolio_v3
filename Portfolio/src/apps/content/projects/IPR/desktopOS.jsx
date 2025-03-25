import shortcut from "../../../assets/chrome_shortcut.png"
import text_file from "../../../assets/text_file_icon.png"
import Document from "../../../document.jsx"
import Shortcut from "../../../shortcut.jsx";
import thumbnail from "../../../assets/specific/desktopOS/thumbnail.png"
import video from "../../../assets/specific/desktopOS/Desktop_OS.mp4"
      
function Text(){
    return(
        <>
            <b>Mock Desktop OS</b> 
            <hr/>
            The Mock Desktop OS project involved developing a functional mock operating system from the ground up, interfacing with hardware using C and ASM language on a DE1-SoC FPGA board. The project focused on creating a basic mock operating system that can manage essential peripherals such as a mouse, keyboard, and a VGA display through hardware interrupts, including a fully functioning file management system, where users can navigate directories, create, delete, and manage files.  assist medical professionals by improving the speed and accuracy of brain tumor diagnosis.
            <br/>
            <b>Languages and Tools Used:</b>
            <ul>
                <li>C<i className="global_grey">: Main Programming Language</i></li>
                <li>Assembly<i className="global_grey">: NIOS II ASM used</i></li>
                <li>Quartus<i className="global_grey">: Environment used for compilation and deployment</i></li>
                <li>FPGA Board<i className="global_grey">: Hardware used for running the code</i></li>
            </ul>
        </>
    )
}

function DesktopOS(){
    return(
        <>
            <Document icon = {text_file} bg = "#faf9f6" name = "ReadMe" display = "block" content = {<Text/>}/>
            <Document icon = {thumbnail} bg = "#323232" name = "Demo Video" display = "block" content = {<video height='100%' controls><source src={video} type="video/mp4"/></video>}/>
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/Mock-Desktop-in-De1-SoC-Board"/>
        </>
    )   
}

export default DesktopOS
