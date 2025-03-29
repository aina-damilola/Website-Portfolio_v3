import { useEffect, useState } from "react";
import "./styles/footer.css"

import windows_logo from "../assets/windows_logo.png" 
import youtube_logo from  "../assets/social_logos/youtube_logo.svg"
import github_logo from   "../assets/social_logos/github_logo.svg"
import linkedin_logo from "../assets/social_logos/linkedin_logo.svg"
import devpost_logo from "../assets/social_logos/devpost.svg"
import outlook_logo from "../assets/social_logos/outlook_logo.svg"

import left_ft from "../assets/arrow_left.svg"
import right_ft from "../assets/arrow_right.svg"

function Social_hyperlinks(){
    return(
        <>
            <a href="https://www.youtube.com/@aina-damilola" target="_blank" className="logos_ft grey"><img src={youtube_logo} width="20px" /></a>
            <a href="https://www.github.com/aina-damilola" target="_blank" className="logos_ft grey"><img src={github_logo} width="20px" /></a>
            <a href="https://www.linkedin.com/in/aina-damilola" target="_blank"className="logos_ft grey"><img src={linkedin_logo} width="20px" /></a>
            
       
        </>
    )
}

function Footer(){

    // For the date and time
    const [date, setDate] = useState({
        day: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    });
    useEffect(() => {
        const interval = setInterval(() => {
            setDate({
                day: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    // // For the social window
    const [open, setOpen] = useState(true);

    const handleSignClick = () => {
        setOpen(!open);
    };

    const handleRefresh = () => {
        window.location.reload();
      };

    return(
        <div id="main_ft">
            <button className="grey" id="windows_logo_ft" onClick={handleRefresh}>
                <img src={windows_logo} height='60%' id="windows_logo"/>
            </button>
            <input id="search_bar_ft" disabled placeholder="Search for files..."></input>
            <div id="recents_ft"></div>
          
            <div id="logos_ft">
                {
                open ? 
                <><button id="arrow_ft" className="grey" onClick={handleSignClick}><img src={right_ft}/></button><p>Socials: </p></>
                : 
                <button id="arrow_ft" className="grey" onClick={handleSignClick}><img src={left_ft}/></button>
                }
                <div id="con_a_ft">
                    <div className="con_b_ft"><a href="https://www.github.com/aina-damilola" target="_blank" className="logos_ft grey"><img src={github_logo} width="20px" /></a><div className="footer_hover inter">Github</div></div>
                    <div className="con_b_ft"><a href="https://www.linkedin.com/in/aina-damilola" target="_blank"className="logos_ft grey"><img src={linkedin_logo} width="20px" /></a><div className="footer_hover inter">LinkedIn</div></div>
                    <div className="con_b_ft"><a href="https://www.youtube.com/@aina-damilola" target="_blank" className="logos_ft grey"><img src={youtube_logo} width="20px" /></a><div className="footer_hover inter">YouTube</div></div>
                    
                    {open ? 
                    <>
                    <div className="con_b_ft"><a href="mailto:dami.aina@mail.utoronto.ca" target="_blank"className="logos_ft grey"><img src={outlook_logo} width="20px" /></a><div className="footer_hover inter">Outlook</div></div>
                    <div className="con_b_ft"><a href="https://devpost.com/aina-damilola?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank"className="logos_ft grey"><img src={devpost_logo} width="20px" /></a><div className="footer_hover inter">Devpost</div></div>
                    </>:
                    <></>}
                </div>
                {/* <div className="footer_hover inter">Outlook</div> */}

            </div>
            <div id="time_ft">
                <p>{date.time}</p>
                <p>{date.day}</p>
            </div>
        </div>
    )
}

export default Footer;
