import React from 'react';
import { Carousel } from "antd";
import "./hero.css";
import partner1 from "../../assets/partner1.png"
import partner2 from "../../assets/partner2.png"
import partner3 from "../../assets/partner3.png"
import partner4 from "../../assets/partner4.png"
import partner5 from "../../assets/partner5.png"
import partner6 from "../../assets/partner6.png"

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6
]


const Hero = ({title, subtitle, description ,images }) => {

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="hero__content">
          <div className="hero__content-text">
            <p className="hero__subtitle">{subtitle}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="hero__search-container">
              <input type="search" placeholder='Enter Zipcode to search properties'/>
              <button className="btn">Search Now!</button>
            </div>
          </div>
          <div className="hero__carousel">
            <Carousel autoplay>
            {images.map( (image, i) => 
              <div key={i}>
                <img className="hero__img" src={image} alt="building" />
              </div>)}
            </Carousel>
          </div>
        </div>
        
        <div className="partners">
          <p>Our Amazing Partners</p>
          <div className="partners__images">
          {partners.map( (partner, i) => 
          <div className="partners__img">
            <img key={i} src={partner} alt="" />
          </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero


