import React from 'react'
import './Card.css'
import CardItem from './CardItem'
import img9 from '../assets/images/img9.jpg'
import img8 from '../assets/images/img8.jpg'
import img3 from '../assets/images/img3.jpg'
import img1 from '../assets/images/img1.jpg'
import imgHome from '../assets/images/imgHome.jpg'


const Card = () => {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                      src={img9}
                      text='expore the hidden waterfall deep inside the Amazon Jungle'
                      label="Adventure"
                      path="/services"
                    />
                    <CardItem 
                      src={imgHome}
                      text='An island with an active or dormant volcano in the background.'
                      label="Island"
                      path="/services"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                      src={img3}
                      text='A dramatic scene of large waves crashing against a rocky 
                      coastline'
                      label="Ocean"
                      path="/services"
                    />
                    <CardItem 
                      src={img8}
                      text='A caravan of camels moving through the desert.'
                      label="Camel Caravan"
                      path="/services"
                    />
                    <CardItem 
                      src={img1}
                      text='The sun setting behind jagged mountain peaks,
                      casting a warm golden glow across the landscape'
                      label="Golden Horizon"
                      path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card