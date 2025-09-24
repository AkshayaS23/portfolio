import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profileimg.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a passionate Full-Stack Developer with a strong foundation in modern web technologies. I recently completed my MCA and have hands-on experience in building projects using React.js, Node.js, MongoDB, Vercel, and Stripe.</p>
                <p>As a fresher, I am eager to learn, adapt, and contribute to real-world projects that create meaningful impact. My interests lie in developing user-friendly applications, optimizing performance, and exploring innovative solutions.</p>
                <p>Beyond coding, I’m always curious, love problem-solving, and enjoy collaborating in dynamic team environments.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML5 & CSS3</p> <hr style={{width:"61%"}}/> </div>
                <div className="about-skill"><p>Python</p> <hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>ReactJs & <br/>ExpressJs</p> <hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>TailwindCSS</p> <hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>Javascript ES6</p> <hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Node.js</p> <hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>MongoDB</p> <hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>2</h1>
            <p>INTERNSHIPS COMPLETED</p>
        </div>
        <hr/>
         <div className="about-achievement">
            <h1>10+</h1>
            <p>CERTIFICATIONS EARNED</p>
        </div>
      </div>
    </div>
  )
}

export default About
