import React from 'react'
import trade from '../assets/trade.png'
import './Invest.css'

const Invest = () => {
  return (
    <div className='invest'>
      <div className='container'>
        {/**the rigth */}
        <div className='right'>
            <h1>Trading the crytocurrencies with IRA</h1>
            <p>Essay to buy the Cryptocurrencies and traiding with IRA</p>
            <button className='btn'>Start</button>
        </div>
        {/* the left*/}
        <div className='left'>
            <img src={trade} alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default Invest
