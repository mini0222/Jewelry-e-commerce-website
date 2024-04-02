import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(124)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>We’ve been heart eyes for some hoops lately—as if these double hoop earrings weren’t a dead giveaway. Designed by Minjeong Temechu, these 14K gold-dipped hoop earrings have two different patterned rings, so they add a bit of fun and texture to every outfit. Wear our double hoops with a few simple studs for a well balanced ear stack.
        </p>
        <ul>
          <li>Two textured hoops combined together</li>

          <li>High-polish, 14K gold finish</li>
        </ul>


      </div>

    </div>
  )
}

export default DescriptionBox
