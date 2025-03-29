import shortcut from "../../../assets/chrome_shortcut.png"
import text_file from "../../../assets/text_file_icon.png"
import Document from "../../document.jsx"
import Shortcut from "../../shortcut.jsx";
import thumbnail from "../../../assets/specific/brain_tumour/thumbnail.png"
import video from "../../../assets/specific/brain_tumour/Brain_Tumour.mp4"

function Text(){
    return(
        <>
            <b>Brain Tumor Detector</b>
            <hr />
            This project focused on developing a deep learning model to classify brain tumors using MRI scan images. We designed and implemented a convolutional neural network (CNN) to detect and classify different types of brain tumors, including glioma, meningioma, and pituitary tumors. Additionally, the model identifies cases where no tumor is present. The goal is to assist medical professionals by enhancing the speed and accuracy of brain tumor diagnosis, potentially aiding in early detection and better treatment planning.
            <br />
            <b>Languages and Tools Used:</b>
            <ul>
                <li>Python <i className="global_grey">: The primary programming language for developing the model</i></li>
                <li>PyTorch <i className="global_grey">: Python library used for building and training the deep learning model</i></li>
                <li>Google Colab <i className="global_grey">: Cloud-based environment used for model training and testing</i></li>
            </ul>


        </>
    )
}

function Brain(){
    return(
        <>
            <Document icon = {text_file} bg = "#faf9f6" name = "ReadMe" display = "block" content = {<Text/>}/>
            <Document icon = {thumbnail} bg = "#323232" name = "Demo Video.mp4" display = "block" content = {<video height='100%' controls><source src={video} type="video/mp4"/></video>} short="video demo of our CNN model"/>
            <Shortcut icon = {shortcut} name = "source code" link = "https://github.com/aina-damilola/Brain-Tumor-Detection.git"/>
        </>
    )   
}

export default Brain