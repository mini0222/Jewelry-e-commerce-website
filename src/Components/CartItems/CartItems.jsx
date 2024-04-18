import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { whatIsInCart, setMenu, getTotalCartAmount, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      {whatIsInCart.length === 0 ? <></> : (
        <div className='cart-title'>
          <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Size</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />

        </div>
      )

      }

      {whatIsInCart.length === 0 ?
        <div className='empty-cart'>

          <i class="fa-solid fa-cart-shopping"></i>
          <p>Your Cart is Empty</p>

          <div className="tothelink">
            <Link to={`/bestsellers`} ><button onClick={() => { setMenu("bestsellers") }}>BEST SELLERS</button></Link>
            <Link to={`/newarrivals`}><button onClick={() => { setMenu("newarrivals") }}>NEW ARRIVALS</button></Link>
          </div>

        </div> :
        whatIsInCart.map((item) => (
          <>
            <div className="cartitems-format cartitems-format-main">
              <Link to={`/product/${item.id}`}><img src={item.image} alt="" className='carticon-product-icon' /></Link>
              <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}><p className='cartItemName'>{item.name}</p></Link>
              <p>{item.size}</p>
              <p>${item.new_price}</p>
              <button className='cartitmes-quantitiy'>{item.quantity}</button>
              <p>${item.new_price * item.quantity}</p>
              <div className='cartitems-remove-icon' onClick={() => { removeFromCart(item) }}><i class="fa-solid fa-trash-can"></i></div>
            </div>

            <hr />

          </>

        ))
      }

      {whatIsInCart.length === 0 ? <></> :

        <div className='cartitems-down'>
          <div className='cartitems-promocode-mobile'>
            <h1>Promo Code</h1>
            <p>If you have a promo code, Enter it here</p>
            <div className='cartitems-promobox'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
          <div className='cartitems-total-mobile'>
            <h1>Cart Totals</h1>
            <div>
              <div className='cartitems-total-item'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>


          <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div>
              <div className='cartitems-total-item'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className='cartitems-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cartitems-promobox'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default CartItems
