import React, {useRef} from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import data_product2 from '../Assets/data2'
import Item from '../Item/Item'

const Popular = () => {

    const myRef = useRef(null);

    const handleWheel = (evt) => {
       evt.preventDefault();
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
    <div className='popular'>
      <div className='best-seller'>
        <p>BEST SELLERS</p>
        <div className='arrow'>
        <i ref={myRef} onClick={backBtn}class="fa-solid fa-angles-left"></i>
        <i ref={myRef} onClick={nextBtn}class="fa-solid fa-angles-right"></i>
        </div>
     </div>
      <div className='gallery' ref={myRef} onWheel={handleWheel}>
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="popular-item">
            {data_product2.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default Popular
