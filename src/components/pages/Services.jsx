import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Card.css';

function Services() {
  const location = useLocation();
  return (
    <>
      <div className='img-container'>
        <h1 className='service'>SERVICES</h1>
        {
          location.state && (
          <>
            <img className='back-img' src={location.state.src}/>
            <p>{ location.state.text}</p>
          </>)
        }
      </div>
    </>
  )
}

export default Services