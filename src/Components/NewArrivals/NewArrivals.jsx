import React, { useRef } from 'react'
import './NewArrivals.css'
import data_product3 from '../Assets/data3'
import data_product4 from '../Assets/data4'
import Item from '../Item/Item'

const NewArrivals = () => {

  const myRef = useRef(null);

  const handleWheel = (evt) => {
    myRef.current.scrollLeft += evt.deltaY;
  }

  const nextBtn = () => {
    myRef.current.style.scrollBehavior = "smooth";
    myRef.current.scrollLeft += 1500;

  }

  const backBtn = () => {
    myRef.current.style.scrollBehavior = "smooth";
    myRef.current.scrollLeft -= 1500;
  }
  return (
    <div className='new-arrivals'>
      <div className='best-seller'>
        <p>NEW ARRIVALS</p>
        <div className='arrow'>
          <i ref={myRef} onClick={backBtn} class="fa-solid fa-angles-left"></i>
          <i ref={myRef} onClick={nextBtn} class="fa-solid fa-angles-right"></i>
        </div>
      </div>
      <div className='gallery' ref={myRef} onWheel={handleWheel}>
        <div className="popular-item">
          {data_product3.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
        <div className="popular-item">
          {data_product4.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
      </div>
    </div>
  )
}

export default NewArrivals
