import React, { useContext } from 'react'
import './HeroDots.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const HeroDots = ({ heroData, setHeroCount, heroCount }) => {
  const { setMenu } = useContext(ShopContext)
  return (
    <div className='heroDots'>
      <div className='hero-text'>
        <p className='big-text'>{heroData.text1}</p>
        <p className='small-text'>{heroData.text2}</p>
      </div>
      <Link to='/bestsellers'><button onClick={() => setMenu("bestsellers")}>SHOP NOW</button></Link>

      <ul className='hero-dots'>

        <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
        <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
        <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
      </ul>

    </div>
  )
}

export default HeroDots
