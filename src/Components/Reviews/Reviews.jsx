import React, { useRef } from 'react'
import './Reviews.css'

const Reviews = () => {
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
    <div className='customer-reviews'>
      <div className='title-arrow'>
        <p>3,000+ Five Stars Customer Reviews</p>
        <div className='c-arrow'>
          <i ref={myRef} onClick={backBtn} class="fa-solid fa-angles-left"></i>
          <i ref={myRef} onClick={nextBtn} class="fa-solid fa-angles-right"></i>
        </div>
      </div>

      <div className='reviews' ref={myRef} onWheel={handleWheel}>
        <div className='c-review'>
          <div className='review'>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <i class="fa-solid fa-quote-left"></i>
            <p className='comment'>Absolutely love these earrings. No tarnishing even though I wear them in the shower often. I get compliments all the time!
              Hoping to get the blue one soon!
            </p>
            <i class="fa-solid fa-quote-right"></i>
            <p className='name'>-Samantha</p>
          </div>
          <div className='review'>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <i class="fa-solid fa-quote-left"></i>
            <p className='comment'>Mini Gold offers stunning jewelry for any occasion. The pieces are exquisite, with a seamless ordering process and beautiful packaging. Whether for yourself or a gift, it's a must-visit!</p>
            <i class="fa-solid fa-quote-right"></i>
            <p className='name'>-Ethan</p>
          </div>
          <div className='review'>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <i class="fa-solid fa-quote-left"></i>
            <p className='comment'>This website is a treasure trove of unique jewelry. Their diverse selection and top-notch customer service make it a standout choice. For those seeking quality and style, look no further!</p>
            <i class="fa-solid fa-quote-right"></i>
            <p className='name'>-Isabella</p>
          </div>
        </div>

        <div className='c-review'>
          <div className='review'>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <i class="fa-solid fa-quote-left"></i>
            <p className='comment'>Discover elegance with a modern twist on this website. Their vintage-inspired pieces and easy shopping experience make it a go-to for those seeking sophistication. Don't miss out on this gem of a find!</p>
            <i class="fa-solid fa-quote-right"></i>
            <p className='name'>-Ava</p>
          </div>
          <div className='review'>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <i class="fa-solid fa-quote-left"></i>
            <p className='comment'>Elevate your style effortlessly with Mini Gold chic jewelry collection. With a diverse range of designs and impeccable service, it's the perfect destination for fashion-forward individuals.</p>
            <i class="fa-solid fa-quote-right"></i>
            <p className='name'>-Emily</p>
          </div>
          <div className='review'>
            <div className='stars'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <i class="fa-solid fa-quote-left"></i>
            <p className='comment'>This website combines sophistication with simplicity, offering timeless pieces that speak volumes. With easy navigation and prompt delivery, it's the ideal destination for those seeking elegance without the fuss.</p>
            <i class="fa-solid fa-quote-right"></i>
            <p className='name'>-Shopia</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Reviews
