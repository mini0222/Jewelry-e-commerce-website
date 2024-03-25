import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {}
    for(let index=0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [menu,setMenu] = useState('shop')
    const [cartItems,setCartItems] = useState(getDefaultCart());
    const [wishListItems,setWishListItems] = useState(JSON.parse(localStorage.getItem('wishListItems'))||[]);
    const [whatIsInCart,setWhatIsInCart] = useState(JSON.parse(localStorage.getItem('whatIsInCart'))||[]);
    


    useEffect(()=> {
        localStorage.setItem('wishListItems',JSON.stringify(wishListItems))
    },[wishListItems])
    
    useEffect(()=> {
        localStorage.setItem('whatIsInCart',JSON.stringify(whatIsInCart))
    },[whatIsInCart])


 
   const differentSize=(item)=> {
    const existingItemIndex = whatIsInCart.findIndex((whatIsInCart)=> whatIsInCart.id === item.id && whatIsInCart.size === item.size);

    

    if(existingItemIndex !== -1) { 
        const updatedCartItems = [...whatIsInCart];
    

    updatedCartItems[existingItemIndex].quantity += 1 ;

    setWhatIsInCart(updatedCartItems);
 
   } else {
    setWhatIsInCart([...whatIsInCart, {...item, quantity: 1}]);
   
   }
};

const onSelectSize=(item,size)=> 
{handleSizeSelect({id:item.id, name:item.name, image: item.image, old_price:item.old_price, new_price:item.new_price}, size)}

const handleSizeSelect = (item, size) => {
    differentSize({...item, size: size})
}

    console.log(whatIsInCart)
    
    const addToCart = (itemId) => {
        

       setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))

       
       
    }

   
  

    const removeFromCart = (item) => {
        setWhatIsInCart(prevWhatIsInCart => {
            const updatedCartItems = [...prevWhatIsInCart]
            const index = updatedCartItems.findIndex(updatedCartItem => updatedCartItem.id === item.id);
            if(index !== -1) {
                if(updatedCartItems[index].quantity > 1)
                {updatedCartItems[index].quantity -= 1} else {
                    updatedCartItems.splice(index, 1);
                }
            }
            return updatedCartItems;
        })
        /*setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))*/
    }

    const addToWishList = (itemId) => {
        if(!wishListItems.some(item => item.id === itemId)){
            const product = all_product.find(product => product.id ===itemId)
            setWishListItems((prev)=> [...prev,product])
           
        }
        
    }
  

    const removeFromWishList = (itemId) => {
       /* setwishListItems((prev)=> ({...prev,[itemId]: prev[itemId]-1}))*/
        setWishListItems((prevItems)=> prevItems.filter(item=> item.id !== itemId))    }

    const getTotalCartAmount = () => {

        return whatIsInCart.reduce((total, item)=> total+ (item.new_price * item.quantity), 0).toFixed(1)
        /*let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0) {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];

            }
           
        }

        return totalAmount; */
    }


    const getTotalCartItems = () => {
        return whatIsInCart.reduce((total,item)=> total + item.quantity,0)
        
       /* for(const item in cartItems) {
            if(cartItems[item]>0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;*/
    }
    const contextValue = {differentSize,whatIsInCart,onSelectSize,handleSizeSelect,menu,setMenu,wishListItems,addToWishList,removeFromWishList,getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )


}

export default ShopContextProvider;