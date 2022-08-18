import React from 'react'
import { Navbar, Hero } from '../../components';
import heroImage1 from "../../assets/hero1.jpg";
import heroImage2 from "../../assets/hero2.jpg";
import heroImage3 from "../../assets/hero3.jpg";
import "./header.css";

const title = "Smart Living Style for Smart People"

const subtitle = "RESIDENTIAL & OFFICE SPACES"

const description = "Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms.";

const images = [
  heroImage1,
  heroImage2,
  heroImage3
]

const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <Hero title={title} subtitle={subtitle} description={description} images={images} />
    </div>
  )
}

export default Header
