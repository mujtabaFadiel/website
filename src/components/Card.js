import React from 'react'
import './Card.css'
import CardItem from './CardItem'

const Card = () => {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                      src='/images/img-9.jpg'
                      text='expore the hidden waterfall deep inside the Amazon Jungle'
                      label="Adventure"
                      path="/services"
                    />
                    <CardItem 
                      src='/images/img-home.jpg'
                      text='An island with an active or dormant volcano in the background.'
                      label="Island"
                      path="/services"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                      src='/images/img-3.jpg'
                      text='A dramatic scene of large waves crashing against a rocky 
                      coastline'
                      label="Ocean"
                      path="/services"
                    />
                    <CardItem 
                      src='/images/img-8.jpg'
                      text='A caravan of camels moving through the desert.'
                      label="Camel Caravan"
                      path="/services"
                    />
                    <CardItem 
                      src='/images/img-1.jpg'
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