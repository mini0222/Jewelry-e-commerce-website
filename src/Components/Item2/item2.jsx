import React from 'react'
import './Item2.css'
import { Link } from 'react-router-dom'

const Item2 = (props) => {
  return (
    <div className='item'>
      <div className="item">
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price}
            </div>
            <div className="item-price-old">
                {props.old_price}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item2