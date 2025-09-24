import React from 'react'
import './Hero.css'
import profile_img1 from '../../assets/profile_img1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img1} alt="" />
      <h1><span>I'm Akshaya V</span>—Full-Stack Developer  <br/>Open to Opportunities</h1>
      <p>I am a recent MCA graduate with a strong foundation in web technologies. 
        As a fresher and aspiring Full-Stack / Frontend Developer, I am eager to 
        apply my skills, learn from real-world projects, and contribute to building 
        impactful applications.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
