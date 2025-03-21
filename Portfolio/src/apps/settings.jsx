import "./styles/settings.css"

import link_icon from "../assets/external_link.svg"

function Settings(){
    return(
        <>
            <div id="profile_banner">
                <div id="pfp"/>
                <div id="right">
                    <h1>Damilola Aina</h1>
                    <div id="info">
                        <p>LinkedIn: @aina-damilola<a href="https://www.linkedin.com/in/aina-damilola" target="_blank"><img src={link_icon}/></a></p>
                        <p>Github: @aina-damilola<a href="https://www.github.com/aina-damilola" target="_blank"><img src={link_icon}/></a></p>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </>
    )
}

export default Settings