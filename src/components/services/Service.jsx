import React from 'react'

function Service({serviceImage, serviceTitle, serviceDescription, serviceAltImage}) {
  return (
    <div className='service'>
      <img className='service__img' src={serviceImage} alt="" />
      <img className='service__imgAlt' src={serviceAltImage} alt="" />
      {/* <div className="service__content">
        <h3 className='service__title'>{serviceTitle}</h3>
        <p className='service__description'>{serviceDescription}</p>
      </div> */}
    </div>
  )
}

export default Service
