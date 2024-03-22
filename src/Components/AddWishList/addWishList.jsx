import React, { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext';



const AddWishList = ({product}) => {
    const {addToWishList} =useContext(ShopContext);
    const {removeFromWishList} = useContext(ShopContext);
    const [isClicked,setIsClicked] = useState(false);
    const [showPopup, setShowPopup] = useState(false)
 




    

  const selectedIndex = 5

   return (

  <div>
   
   <div onClick={addToWishList(product.id)}>Add to Wishlist! </div>


</div>
   )

}

export default AddWishList
