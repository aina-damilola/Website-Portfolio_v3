import "./styles/Document.css"

function Shortcut(props){
    return(
        <>
        <a id="main_tf" className="blue" href={props.link} target="_blank">
            <img id="icon_tf" src={props.icon}/>
            <p id="file_name_tf" >{props.name}</p>
        </a>
        </>
    )
}

export default Shortcut;