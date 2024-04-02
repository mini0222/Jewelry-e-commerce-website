import React, { useContext } from 'react'
import WishList from '../Components/WishList/WishList'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Favorite = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  console.log(productId)
  return (
    <div>
      <WishList product={product} />
    </div>
  )
}

export default Favorite
