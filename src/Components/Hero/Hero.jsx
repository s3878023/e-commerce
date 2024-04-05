import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
const Hero = () => {
  return (
    <div classname = 'hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
        </div>
        <div classname ="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
        </div>
        <div className="hero-right">

        </div>
    </div>
  )
}

export default Hero