import { useEffect, useState } from "react";
import "./styles/footer.css"

import windows_logo from "../assets/windows_logo.png" 
import youtube_logo from "../assets/youtube_logo.svg"
import github_logo from "../assets/github_logo.svg"
import linkedin_logo from "../assets/linkedin_logo.svg"

import up_ft from "../assets/arrow_down.svg"
import down_ft from "../assets/arrow_up.svg"

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
    const [open, setOpen] = useState(false);

    const handleSignClick = () => {
        setOpen(!open);
    };

    return(
        <div id="main_ft">
            <div className="grey" id="windows_logo_ft">
                <img src={windows_logo} height='60%' id="windows_logo"/>
            </div>
            <input id="search_bar_ft" placeholder="Search for files..."></input>
            <div id="recents_ft"></div>
          
            <div id="logos_ft">
                {open ? <button id="arrow_ft" className="grey" onClick={handleSignClick}><img src={up_ft}/></button> : <button id="arrow_ft" className="grey" onClick={handleSignClick}><img src={down_ft}/></button>}
                <div id="con_a_ft">
                    <a href="https://www.youtube.com/@aina-damilola" target="_blank" className="logos_ft grey"><img src={youtube_logo} width="20px" /></a>
                    <a href="https://www.github.com/aina-damilola" target="_blank" className="logos_ft grey"><img src={github_logo} width="20px" /></a>
                    <a href="https://www.linkedin.com/in/aina-damilola" target="_blank"className="logos_ft grey"><img src={linkedin_logo} width="20px" /></a>
                </div>

            </div>
            <button id="language_ft" className="grey">
                ENG
            </button>
            <div id="time_ft">
                <p>{date.time}</p>
                <p>{date.day}</p>
            </div>
        </div>
    )
}



export default Footer;


// useEffect(() => {
//     const interval = setInterval(() => {
//         var now = new Date().getTime();
//         var date = deadline - now;

//         var days = Math.floor(date / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((date % (1000 * 60)) / 1000);
        

//         updateCountdown(seconds,".digit-seconds");
//         updateCountdown(minutes,".digit-minutes");
//         updateCountdown(hours,".digit-hours");
//         updateCountdown(days,".digit-days");
//     }, 1000);
    
//     return () => clearInterval(interval);
// });