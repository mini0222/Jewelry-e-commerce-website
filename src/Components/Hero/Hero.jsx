import React from 'react'
import './Hero.css'
import heroBanner from '../Assets/hero_banner.jpg'
import heroBanner2 from '../Assets/hero_banner2.jpg'
import heroBanner3 from '../Assets/hero_banner3.jpg'

const Hero = ({ heroCount }) => {

  if (heroCount === 0) {
    return (
      <div className='hero'>
        <img src={heroBanner} alt="" className='banner' />
      </div>
    )
  }
  else if (heroCount === 1) {
    return (
      <div className='hero'>
        <img src={heroBanner2} alt="" className='banner' />
      </div>
    )
  }
  else if (heroCount === 2) {
    return (
      <div className='hero'>
        <img src={heroBanner3} alt="" className='banner' />
      </div>
    )
  }


}
export default Hero
