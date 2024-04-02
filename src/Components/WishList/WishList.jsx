import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';
import './WishList.css'
import { Link } from 'react-router-dom';

const WishList = () => {
  const { wishListItems, removeFromWishList } = useContext(ShopContext);


  return (
    <div>
      <h1 className='yourwishlist'>Your WishList</h1>


      {wishListItems.length === 0 ? (
        <div className='empty-wishlist'>
          <div className='heart-icon'><i class="fa-solid fa-heart"></i></div>
          <p><Link to={`/login`} style={{ textDecoration: 'black', color: 'black' }}><span>Create your account or sign in</span> </Link>to save favorite!</p>
          <p>Your wish list is empty</p>
        </div>
      ) : (

        <ul className='item-list'>

          {wishListItems.map((e) => {

            return (
              <li>
                <div className="wishlist-items">
                  <div className='each-item'>
                    <Item id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />

                    <div className='wishlist-remove-icon' onClick={() => { removeFromWishList(e.id) }}><i class="fa-regular fa-circle-xmark"></i></div>
                  </div>
                </div>
              </li>


            )
          }
          )}
        </ul>

      )}


    </div>
  )
}

export default WishList
