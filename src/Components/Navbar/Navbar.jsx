import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import flag from '../Assets/america.webp'
import all_product from '../Assets/all_product';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const {menu,setMenu,getTotalCartItems,wishListItems} = useContext(ShopContext)
    const [query, setQuery] = useState('');

    console.log(menu)

    const handleInputChange = (event) => {
        setQuery(event.target.value);

    }

    const filteredData = all_product.filter(item=> { 
      if(query==="") {return 0;} else if(item.name.toLowerCase().includes(query.toLocaleLowerCase())) {
      return item;
    }else {
      return 0;
    }})
   

    const dropdownRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
      function handleClickOutside(event) {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsVisible(false);
        }
      }

      document.addEventListener('click',handleClickOutside);

      return () => {
        document.removeEventListener('click',handleClickOutside);
      }
    },[isVisible]);




  return (

  
    <div className='navbar'>
      <div className='nav'>
        <div className="navbar-main">
        <div className='left-side'>
         <div className="search-box">
            <input type="text" placeholder='Search' value={query} ref ={dropdownRef} onChange={handleInputChange} onFocus={()=> setIsVisible(true)}/>
            <i class="fa-solid fa-magnifying-glass"></i>
         </div>
         <div className='usd'>
          <img src={flag} alt="" />
          <p>USD</p>
         </div>
        </div>
        <div className="minigold">
            <Link to='/'style={{textDecoration:'none',color:'black'}}><p onClick={()=>{setMenu("shop")}}>Mini Gold</p></Link>
        </div>
        <div className="nav-login-cart">
            <div><i class="fa-regular fa-circle-question"></i></div>
            <Link to='/favorite' style={{textDecoration:'none',color:'black'}}><div onClick={()=>{setMenu("favorite")}}className={menu==="favorite"?"colored":"normal"}><i class="fa-regular fa-heart"></i></div></Link>
            {wishListItems.length > 0 && <div className='circle'></div>}
            <Link to='/login' style={{textDecoration:'none',color:'black'}}><div onClick={()=>{setMenu("login")}}className={menu==="login"?"colored":"normal"}><i class="fa-regular fa-user"></i></div></Link> 
            <Link to='/cart' style={{textDecoration:'none',color:'black'}}><div onClick={()=>{setMenu("cart")}}className={menu==="cart"?"colored":"normal"}><i class="fa-solid fa-cart-shopping"></i></div></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        </div>
        <div className="nav-category">
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none',color:'black'}}>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("bestsellers")}}><Link to='/bestsellers' style={{textDecoration:'none',color:'black'}}>BEST SELLERS</Link>{menu==="bestsellers"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("newarrivals")}}><Link to='/newarrivals' style={{textDecoration:'none',color:'black'}}>NEW ARRIVALS</Link>{menu==="newarrivals"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("earrings")}}><Link to='/earrings' style={{textDecoration:'none',color:'black'}}>EARRINGS</Link>{menu==="earrings"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("necklace")}}><Link to='/necklace' style={{textDecoration:'none',color:'black'}}>NECKLACE</Link>{menu==="necklace"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("braclet")}}><Link to='/braclet' style={{textDecoration:'none',color:'black'}}>BRACELET</Link>{menu==="braclet"?<hr/>:<></>}</li>
            </ul>
        </div>
        </div>

        {isVisible && ( <div className='result'>
       <ul className={filteredData.length === 0?'none':'search-items'}>
        {filteredData.map((item,i) => {return (<li key={i}> <Link to={`/product/${item.id}`} style={{textDecoration:'none',color:'black'}}><p>{item.name}</p></Link> <img src={item.image} alt="" /></li>)})}
        </ul>
        </div>

      
        )}

    </div>
  )
}

export default Navbar
