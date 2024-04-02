import React, { useContext, useEffect, useRef, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import './CSS/ShopCategory.css'

const ShopSpecial = (props) => {
  const { all_product } = useContext(ShopContext)
  const [sortBy, setSortBy] = useState("low-high");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  console.log(isDropdownOpen)


  const dropdownRef = useRef(null);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  })

  const sortProducts = (sortBy) => {
    if (sortBy === 'low-high') {
      return all_product.sort((a, b) =>
        a.new_price - b.new_price)
    } else if (sortBy === 'high-low') {
      return all_product.sort((a, b) =>
        b.new_price - a.new_price)

    } else if (sortBy === 'A-Z') {
      return all_product.sort((a, b) =>
        a.name.localeCompare(b.name))
    }
    else if (sortBy === 'Z-A') {
      return all_product.sort((a, b) =>
        b.name.localeCompare(a.name))
    }
  }

  const handleSortChange = (sortByValue) => {
    setSortBy(sortByValue);
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const sortedProducts = sortProducts(sortBy)

  return (
    <div className='shop-category'>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>

        <div ref={dropdownRef} className='sortby'>
          <div className='shopcategory-sort'>
            <label onClick={toggleDropdown} htmlFor="sort">Sort by <img src={dropdown_icon} alt="" /></label>
          </div>


          {isDropdownOpen &&
            (<div className='dropdown'>
              <ul id="sort" className='dropdown-menu'>
                <li onClick={() => handleSortChange('low-high')}>Prices: low to high</li>
                <li onClick={() => handleSortChange('high-low')}>Prices: high to low</li>
                <li onClick={() => handleSortChange('A-Z')}>A - Z</li>
                <li onClick={() => handleSortChange('Z-A')}>Z - A</li>
              </ul>
            </div>)}
        </div>

      </div>
      <div className='shopcategory-products'>
        {sortedProducts.map((item, i) => {
          if (props.special === item.special) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          }
          else {
            return null;
          }

        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopSpecial