
import { useEffect, useState } from 'react';
import Hero from '../Components/Hero/Hero'
import HeroDots from '../Components/HeroDots/HeroDots'
import Popular from '../Components/Popular/Popular'
import NewArrivals from '../Components/NewArrivals/NewArrivals';
import Reviews from '../Components/Reviews/Reviews';
import Video from '../Components/Video/Video';
import ClickPopup from '../Components/ClickPopup/ClickPopup';

const Shop = () => {

  let heroData = [
    { text1: "SHOP 80% OFF SITEWIDE", text2: "No promo code needed" },
    { text1: "Explore our new Arrivals", text2: "Find your next favorite piece" },
    { text1: "Free Shipping Worldwide", text2: "No minimum purchase required" },

  ]

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000);
  }, [])


  return (
    <div>
      <ClickPopup />
      <Hero heroCount={heroCount} />
      <HeroDots setHeroCount={setHeroCount} heroCount={heroCount} heroData={heroData[heroCount]} />
      <Popular />
      <Video />
      <Reviews />
      <NewArrivals />
    </div>
  )
}

export default Shop
