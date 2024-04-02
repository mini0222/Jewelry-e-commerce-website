import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';






const ProductDisplay = (props) => {
  const { product } = props;
  const [showPopup, setShowPopup] = useState(false);
  const [itemSize, setItemSize] = useState("")

  const { addToWishList, onSelectSize } = useContext(ShopContext);
  const [isClicked, setIsClicked] = useState(false);
  const [selectSizeMsg, setSelectSizeMsg] = useState("");



  const handleLikeToggle = (itemId) => {
    setIsClicked(!isClicked);
    addToWishList(product.id)
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, 3000)




  }


  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>


        <div className='addtowishlist'>
          <p>Add to Wishlist!</p>
          <div className='like' onClick={handleLikeToggle}><i class="fa-solid fa-heart"></i></div>
          {showPopup && <div className='popup'>You added this item to your wishlist! check it out.</div>}


        </div>

        <img src={product.image} alt="" />

      </div>

      <div className='productdisplay-right'>

        <h1>{product.name}</h1>

        <div className='productdisplay-right-star'>
          <div className='stars'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className='review-rate'> <p>4.82 (124 reviews)</p> </div>
        </div>

        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>${product.old_price}</div>
          <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>

        <div className='productdisplay-right-description'>
          twinkling with miniature crystals reminiscent of celestial sky, <br />
          adding a touch of elegance and enchantment to any ensemble.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='sizes'>
            <div onClick={() => { setItemSize("Mini") }} className={itemSize === "Mini" ? "sizebackground pink" : "sizebackground"} >Mini</div>
            <div onClick={() => { setItemSize("Small") }} className={itemSize === "Small" ? "sizebackground pink" : "sizebackground"}>Small</div>
            <div onClick={() => { setItemSize("Medium") }} className={itemSize === "Medium" ? "sizebackground pink" : "sizebackground"}>Medium</div>
            <div onClick={() => { setItemSize("Large") }} className={itemSize === "Large" ? "sizebackground pink" : "sizebackground"}>Large</div>

          </div>
        </div>
        <button onClick={() => { if (itemSize !== "") { onSelectSize(product, itemSize); } else { alert("Please select the size you want")/*setSelectSizeMsg("Please select the size you want")*/ } }} >ADD TO CART <i class="fa-solid fa-cart-shopping"></i></button>
        {<div>{selectSizeMsg}</div>}
        <p className='productdisplay-right-category'><span>Category:</span> {product.category}, gold, silver</p>
        <p className='productdisplay-right-category'><span>Tags:</span> Modern, Dainty, Elegant</p>
      </div>
    </div>
  )
}

export default ProductDisplay
