import React from 'react'
import Crypto from '../assets/hero-img.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/* */}
            <div className='left'>
                <p>By & Sell Crypto 24/7 using your retirement account</p>
                <h1>Invest in Cryptocurreny with Your IRA</h1>
                <p>Buy, Sell, and store hundreds of crytocurrencies</p>
                <div className='input-container'>
                    <input type="email" placeholder="Enter your email" />
                    <button className='btn btn_hero'>Learn More</button>
                </div>
            </div>

            {/* */}
            <div className='rigth'>
                <div className=''>
                    <div className="img-container">
                        <img src={Crypto} alt='/'/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
