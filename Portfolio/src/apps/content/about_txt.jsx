import profile from "../../assets/specific/about_txt_profile.jpg"

function About_txt(){
    return(
        <>
            <img 
                src={profile} 
                alt="Profile Picture" 
                style={{ width: '30%', float: 'left', marginRight: '25px', borderRadius: '8px' }} />
            <p>
                Hi, I'm Damilola Aina, a 3rd-year Computer Engineering student at the University of Toronto. I'm currently pursuing a career in Software Engineering with a minor in Artificial Intelligence. I have hands-on experience in web development and currently work as a web developer with the NSBE UofT team, as well as an aerostructural team member with UTSM.
            </p>
            <div>
                Over the course of several projects and personal endeavors, I have developed a strong skillset in the following areas:
                <ul style={{ listStyleType: 'circle' }}>
                    <li><b>Software Engineering</b>: My expertise includes both low-level and high-level programming, as well as machine learning. I have experience with languages like <b>Python</b>, <b>C</b>, <b>C++</b>, and <b>Assembly</b>.</li>
                    <li><b>Web Development</b>: I specialize in front-end development and am actively learning backend technologies. I am proficient with <b>React.js</b>, <b>JavaScript</b>, <b>Node.js</b>, <b>HTML/CSS</b>, <b>Three.js</b>, and <b>PostgreSQL</b>. I am also currently learning <b>Flask</b> for backend development.</li>
                    <li><b>3D Modelling</b>: I am well-versed in <b>SOLIDWORKS</b> and am currently expanding my skills in 3D modelling with <b>Blender</b>.</li>
                    <li><b>Hardware Engineering</b>: A more recent area of focus, I work with <b>Arduinos</b> paired with various modules and 3D-printed parts. I also have experience in <b>Verilog</b>, <b>circuit design</b>, and hardware/software integration.</li>
                </ul>
            </div>
        </>

    )
}

export default About_txt