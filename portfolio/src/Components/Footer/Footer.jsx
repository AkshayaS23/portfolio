import React, { useState } from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  const [email, setEmail] = useState('') // state for email input

  const handleSubscribe = () => {
    if (!email) {
      alert('Please enter your email!')
      return
    }
    // Here you can connect to your backend or email service
    alert(`Subscribed successfully with: ${email}`)
    setEmail('') // clear input
  }

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Aksh<span>aya</span></h1>
          <p>
            I’m a Full Stack Developer passionate about building modern web applications.
            Let’s connect and create something amazing together.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user icon" />
            <input
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="footer-subscribe"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>

      <hr/>

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Akshaya V. All rights reserved</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
