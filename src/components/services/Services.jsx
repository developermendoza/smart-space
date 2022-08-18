import React from 'react';
import Service from './Service';
import service1 from '../../assets/howItWorksImg1.png'
import service2 from '../../assets/howItWorksImg2.png'
import service3 from '../../assets/howItWorksImg3.png';
import serviceAlt1 from '../../assets/howItWorksImgAlt1.png';
import serviceAlt2 from '../../assets/howItWorksImgAlt2.png';
import serviceLargeDevice from '../../assets/product-large-devices.png'
import service1SmallDevice from '../../assets/service1-small-devices.png'
import service2SmallDevice from '../../assets/service2-small-devices.png'
import service3SmallDevice from '../../assets/service3-small-devices.png'

import "./services.css";

const serviceTitle1 = "Research Suburbs";
const serviceTitle2 = "Instant Valuation";
const serviceTitle3 = "Track Property";

const serviceDesc1 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
const serviceDesc2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
const serviceDesc3 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

function Services() {
  return (
    <div className='services'>
    <div className='services__small-devices'>
      <div>
        <img src={service1SmallDevice} alt="" />
        <div style={{maxWidth:'300px', textAlign:'center', margin:'auto', marginTop:'-30px', marginBottom:'60px'}}>
          <h3>{serviceTitle1}</h3>
          <p>{serviceDesc1}</p>
        </div>
      </div>
      <div>
        <img src={service2SmallDevice} alt="" />
        <div style={{maxWidth:'300px', textAlign:'center', margin:'auto', marginTop:'-30px', marginBottom:'60px'}}>
          <h3>{serviceTitle2}</h3>
          <p>{serviceDesc2}</p>
        </div>
      </div>
      <div>
        <img src={service3SmallDevice} alt="" />
        <div style={{maxWidth:'300px', textAlign:'center', margin:'auto', marginTop:'-30px', marginBottom:'60px'}}>
          <h3>{serviceTitle3}</h3>
          <p>{serviceDesc3}</p>
        </div>
      </div>
    </div>
    <div className='services__large-devices'>
      <div style={{marginLeft:'70px', marginRight:'70px'}}>
        <img src={serviceLargeDevice} alt="" />
      </div>
      <div className='services__large-devices-text'>
        <div style={{maxWidth:'300px', textAlign:'center'}}>
          <h3>{serviceTitle1}</h3>
          <p>{serviceDesc1}</p>
        </div>
        <div style={{maxWidth:'300px', textAlign:'center'}}>
          <h3>{serviceTitle2}</h3>
          <p>{serviceDesc2}</p>
        </div>
        <div style={{maxWidth:'300px', textAlign:'center'}}>
          <h3>{serviceTitle3}</h3>
          <p>{serviceDesc3}</p>
        </div>
      </div>
    </div>
    
      {/* <div className='services__large-devices images'>
        <div>
          <img className='service__img' src={service1} alt="" />
        </div>
        <div>
          <img className='service__img-alt' src={serviceAlt1} alt="" />
        </div>
        <div>
          <img className='service__img' src={service2} alt="" />
        </div>
        <div>
          <img className='service__img-alt' src={serviceAlt2} alt="" />
        </div>
        <div>
          <img className='service__img' src={service3} alt="" />
        </div>
      </div> */}
      {/* <div className='services__large-devices'>
        <div style={{maxWidth:'300px', textAlign:'center'}}>
          <h3>{serviceTitle1}</h3>
          <p>{serviceDesc1}</p>
        </div>
        <div style={{maxWidth:'300px', textAlign:'center'}}>
          <h3>{serviceTitle2}</h3>
          <p>{serviceDesc2}</p>
        </div>
        <div style={{maxWidth:'300px', textAlign:'center'}}>
          <h3>{serviceTitle3}</h3>
          <p>{serviceDesc3}</p>
        </div>
      </div> */}
      {/* <Service serviceImage={service1} serviceTitle={serviceTitle1} serviceDescription={serviceDesc1} serviceAltImage={serviceAlt1} />
      <Service serviceImage={service2} serviceTitle={serviceTitle2} serviceDescription={serviceDesc2} serviceAltImage={serviceAlt2} />
      <Service serviceImage={service3} serviceTitle={serviceTitle3} serviceDescription={serviceDesc3} /> */}
    </div>
  )
}

export default Services
