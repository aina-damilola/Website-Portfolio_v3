import profile from "../../assets/specific/about_txt_profile.jpg"

function About_txt(){
    return(
        <>
        <img src={profile} alt="Sample" style={{ width:'30%', float: "left", marginRight: "25px", borderRadius: "8px" }} />
        <p>
        Hallo, my name is Damilola Aina, a 3rd year Computer Engineering Student at the University of Toronto. I'm currently pursuing a career in Software Engineering and a minor in Artificial Intelligence with personal experience in Web development. I currently work with the NSBE UofT team as a Web developer and the UTSM team as an aerostructural team member.
        </p>
        <div>
            With a good number of projects and personal experience, my skills are more proficient in (but not limited) to the following areas:
            <ul style={{listStyleType: "circle"}}>
                <li><b>Software Engineering</b>: Most of my expertise is in low & high level programming and machine learning (<b>P</b>ython, <b>C</b>, <b>C</b>++, <b>A</b>ssembly)</li>
                <li><b>Web Development</b>: Most of my expertise is in front end development and I am currently learning backend development (<b>R</b>eact.js, <b>J</b>avascript, <b>N</b>ode.js, <b>H</b>TML/<b>C</b>SS, <b>T</b>hree.js, <b>P</b>ostgreSQL)</li>
                <li><b>3D modelling</b>: Most of my expertise is within <b>S</b>OLIDWORKS as I am currently learning how to use <b>B</b>lender for 3d models</li>
                <li><b>Hardware Engineering</b>: A more recent focus of mine, I mainly use <b>A</b>rduinos paired with different modules and 3D printed parts. With this, <b>V</b>erilog, <b>C</b>ircuit design with <b>H</b>ardware/<b>S</b>oftware Integration</li>
            </ul>
        </div>
        </>
    )
}

export default About_txt