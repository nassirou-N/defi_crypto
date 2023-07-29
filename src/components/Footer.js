import React from 'react'
import './Footer.css'
import { FaFacebook,FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <h1>De<span className='primary'>Fi</span></h1>
        <div className='footer_items'>
          <div className='item'>
            <h2>Support</h2>
            <span className='bar'></span>
            <ul>
              <li>contact</li>
              <li>chat</li>
              <li>Help center</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='item'>
            <h2>Developer</h2>
            <span className='bar'></span>
            <ul>
              <li>cloud</li>
              <li>compagnie</li>
              <li>A proche</li>
              <li>Feature</li>
            </ul>
          </div>
          <div className='item'>
            <h2>Company</h2>
            <span className='bar'></span>
            <ul>
              <li>About</li>
              <li>Information</li>
              <li>Legal</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className='item'>
            <h2>Social</h2>
            <span className='bar'></span>
            <div className='items_social'>
              <span className='social_itme color'><FaFacebook /></span>
              <span className='social_itme color'><FaTwitter /></span>
              <span className='social_itme color'><FaLinkedin /></span>
              <span className='social_itme'><FaGithub /></span>

            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Footer
