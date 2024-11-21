import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import video1 from '../assets/videos/video1.mp4'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btn'>
        <Button 
          className='btn' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
            GET STARTED
        </Button>
        <Button 
          className='btn' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            WATCH TRAILER <i className='far fa-play-cirle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection