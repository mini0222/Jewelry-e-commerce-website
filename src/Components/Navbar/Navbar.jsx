import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import flag from '../Assets/america.webp'
import all_product from '../Assets/all_product';
import { ShopContext } from '../../Context/ShopContext';
import data_product from '../Assets/data'
import data_product2 from '../Assets/data2'

const Navbar = () => {
  const { menu, setMenu, getTotalCartItems, wishListItems } = useContext(ShopContext)
  const [query, setQuery] = useState('');
  const menuRef = useRef();
  const searchRef = useRef();


  const dropdown_toggle = () => {
    menuRef.current.classList.toggle('nav-manu-visible');
  }


  const menuCloseMark = () => {
    menuRef.current.classList.toggle('nav-manu-visible');
  }

  const searchBar_toggle = () => {
    searchRef.current.classList.toggle('searchBar-visible');
  }

  const closeMark = () => {
    searchRef.current.classList.toggle('searchBar-visible');
  }


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredData = all_product.filter(item => {
    if (query === "") { return 0; } else if (item.name.toLowerCase().includes(query.toLocaleLowerCase())) {
      return item;
    } else {
      return 0;
    }
  })


  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleRes, setIsVisibleRes] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [isVisible]);



  return (
    <div className='navbar'>
      <div className='nav'>
        <div className="navbar-main">
          <div className='left-side'>

            <div className='menu-glass'>
              <div className='menu' onClick={dropdown_toggle}><i class="fa-solid fa-bars"></i></div>
              <div className='glass' onClick={searchBar_toggle}> <i class="fa-solid fa-magnifying-glass"></i></div>
            </div>

            <div ref={searchRef} className='res-searchBox'>
              <div className='close-section'>
                <p>MiniGold</p>
                <div onClick={closeMark} className='close-mark'><i class="fa-regular fa-circle-xmark"></i></div>
              </div>
              <hr />

              < div className="res-search-box">
                <input type="text" placeholder='Search' value={query} ref={dropdownRef2} onChange={handleInputChange} onFocus={() => setIsVisibleRes(true)} />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>

              {filteredData.length === 0 ?
                <div className='recommendation'>
                  <p>Jewerly that we love</p>
                  <ul className='rec-items'>
                    {data_product.map((item, i) => {
                      return (<Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}><li onClick={searchBar_toggle} key={i}> <img src={item.image} alt="" /> <p>{item.name}</p></li></Link>)
                    })
                    }
                    {data_product2.map((item, i) => {
                      return (<Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}><li onClick={searchBar_toggle} key={i}> <img src={item.image} alt="" /> <p>{item.name}</p></li></Link>)
                    })
                    }

                  </ul>
                </div> : <p className='suggestion'>Are you looking for...</p>
              }
              {isVisibleRes && (<div className='res-result'>
                <ul className={filteredData.length === 0 ? 'none' : 'res-search-items'}>
                  {filteredData.map((item, i) => { return (<Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}><li onClick={searchBar_toggle} key={i}> <img src={item.image} alt="" /> <p>{item.name}</p></li></Link>) })}
                </ul>
              </div>
              )}

            </div>

            < div className="search-box">
              <input type="text" placeholder='Search' value={query} ref={dropdownRef} onChange={handleInputChange} onFocus={() => setIsVisible(true)} />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>


            <div className='usd'>
              <img src={flag} alt="" />
              <p>USD</p>
            </div>
          </div>
          <div className="minigold">
            <Link to='/Jewelry-e-commerce-website/' style={{ textDecoration: 'none', color: 'black' }}><p onClick={() => { setMenu("shop") }}>Mini Gold</p></Link>
          </div>
          <div className="nav-login-cart">
            <div className='help'><i class="fa-regular fa-circle-question"></i></div>
            <Link to='/favorite' style={{ textDecoration: 'none', color: 'black' }}><div onClick={() => { setMenu("favorite") }} className={menu === "favorite" ? "colored" : "normal"}><i class="fa-regular fa-heart"></i></div></Link>
            {wishListItems.length > 0 && <div className='circle'></div>}
            <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}><div onClick={() => { setMenu("login") }} className={menu === "login" ? "colored" : "normal"}><i class="fa-regular fa-user"></i></div></Link>
            <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}><div onClick={() => { setMenu("cart") }} className={menu === "cart" ? "colored" : "normal"}><i class="fa-solid fa-cart-shopping"></i></div></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </div>

        <div ref={menuRef} className="nav-category">

          <div className='close-section'>
            <p>MiniGold</p>
            <div onClick={menuCloseMark} className='close-mark'><i class="fa-regular fa-circle-xmark"></i></div>
          </div>
          <hr className='res-hr' />

          <ul className="nav-menu">
            <Link to='/Jewelry-e-commerce-website/' style={{ textDecoration: 'none', color: 'black' }}><li className='category-shop' onClick={() => { dropdown_toggle(); setMenu("shop") }}>SHOP{menu === "shop" ? <hr /> : <></>}</li></Link>
            <Link to='/bestsellers' style={{ textDecoration: 'none', color: 'black' }}><li className='category-bestsellers' onClick={() => { dropdown_toggle(); setMenu("bestsellers") }}>BEST SELLERS{menu === "bestsellers" ? <hr /> : <></>}</li></Link>
            <Link to='/newarrivals' style={{ textDecoration: 'none', color: 'black' }}><li className='category-newarrivals' onClick={() => { dropdown_toggle(); setMenu("newarrivals") }}>NEW ARRIVALS{menu === "newarrivals" ? <hr /> : <></>}</li></Link>
            <Link to='/earrings' style={{ textDecoration: 'none', color: 'black' }}><li className='category-earrings' onClick={() => { dropdown_toggle(); setMenu("earrings") }}>EARRINGS{menu === "earrings" ? <hr /> : <></>}</li></Link>
            <Link to='/necklace' style={{ textDecoration: 'none', color: 'black' }}><li className='category-necklace' onClick={() => { dropdown_toggle(); setMenu("necklace") }}>NECKLACE{menu === "necklace" ? <hr /> : <></>}</li></Link>
            <Link to='/braclet' style={{ textDecoration: 'none', color: 'black' }}><li className='category-braclet' onClick={() => { dropdown_toggle(); setMenu("braclet") }}>BRACELET{menu === "braclet" ? <hr /> : <></>}</li></Link>
          </ul>
        </div>
      </div>

      {isVisible && (<div className='result'>
        <ul className={filteredData.length === 0 ? 'none' : 'search-items'}>
          {filteredData.map((item, i) => { return (<li key={i}> <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}><p>{item.name}</p></Link> <img src={item.image} alt="" /></li>) })}
        </ul>
      </div>
      )}

    </div>
  )
}

export default Navbar
