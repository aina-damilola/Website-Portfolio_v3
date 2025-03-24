import shortcut from "../../../assets/chrome_shortcut.png"
import text_file from "../../../assets/text_file_icon.png"
import Document from "../../document.jsx"
import Shortcut from "../../shortcut.jsx";
import thumbnail from "../../../assets/specific/brain_tumour/thumbnail.png"
import video from "../../../assets/specific/brain_tumour/Brain_Tumour.mp4"

function Text(){
    return(
        <>
            <b>Brain Tumor Detector </b> 
            <hr/>
            This project involved developing a deep learning model to classify brain tumors using MRI scan images. We implemented a convolutional neural network (CNN) designed to detect and classify different types of brain tumors, specifically glioma, meningioma, and pituitary tumors, as well as identify when no tumor is present. The model aims to assist medical professionals by improving the speed and accuracy of brain tumor diagnosis.
            <br/>
            <b>Languages and Tools Used:</b>
            <ul>
                <li>Python<i className="global_grey">: Programming language used</i></li>
                <li>PyTorch<i className="global_grey">: Python Library used for Model Creation</i></li>
                <li>Google Collab<i className="global_grey">: Environment used for training and testing the model</i></li>
            </ul>
        </>
    )
}

function Brain(){
    return(
        <>
            <Document icon = {text_file} bg = "#faf9f6" name = "ReadMe" display = "block" content = {<Text/>}/>
            <Document icon = {thumbnail} bg = "#323232" name = "Demo Video" display = "block" content = {<video height='100%' controls><source src={video} type="video/mp4"/></video>}/>
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/Brain-Tumor-Detection.git"/>
        </>
    )   
}

export default Brain