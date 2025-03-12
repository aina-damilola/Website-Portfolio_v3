import Folder from "./folder";
import "./styles/main_page.css"
import Text_file from "./text_file";

function Main_page(){
    return(
        <div id="main_mp">
            <Text_file id = '1' name = "apple" saved_text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, porro natus nesciunt aspernatur perferendis exercitationem repellendus dolorum fugiat velit hic culpa autem, quos quam ab soluta repudiandae officia! Numquam, qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, porro natus nesciunt aspernatur perferendis exercitationem repellendus dolorum fugiat velit hic culpa autem, quos quam ab soluta repudiandae officia! Numquam, qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, porro natus nesciunt aspernatur perferendis exercitationem repellendus dolorum fugiat velit hic culpa autem, quos quam ab soluta repudiandae officia! Numquam, qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, porro natus nesciunt aspernatur perferendis exercitationem repellendus dolorum fugiat velit hic culpa autem, quos quam ab soluta repudiandae officia! Numquam, qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, porro natus nesciunt aspernatur perferendis exercitationem repellendus dolorum fugiat velit hic culpa autem, quos quam ab soluta repudiandae officia! Numquam, qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, porro natus nesciunt aspernatur perferendis exercitationem repellendus dolorum fugiat velit hic culpa autem, quos quam ab soluta repudiandae officia! Numquam, qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, porro natus nesciunt aspernatur perferendis exercitationem repellendus dolorum fugiat velit hic culpa autem, quos quam ab soluta repudiandae officia! Numquam, qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, porro natus nesciunt aspernatur perferendis exercitationem repellendus dolorum fugiat velit hic culpa autem, quos quam ab soluta repudiandae officia! Numquam, qui."/>
            <Text_file id = '2' name = "banana"/>
            <Text_file id = '3' name = "canteloupe"/>
            <Text_file id = '4' name = "dragonfruit"/>
            <Text_file id = '5' name = "egg"/>
            <Text_file id = '6' name = "fruit"/>
            <Text_file id = '7' name = "gold"/>
            <Text_file id = '8' name = "happy"/>   
            <Folder/>     
        </div>
    )
}



export default Main_page;