import React, { useState } from 'react'
import popupimage from '../Assets/popupimage.jpg'
import './PopUp.css'


const PopUp = ({ onClose }) => {

  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (event) => {
    let inputValue = event.target.value.replace(/\D/g, '');
    let formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);

  }

  function formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

  }

  return (
    <div className='modal'>

      <div className='modal-left'>
        <p className='minigold-logo'>Mini Gold</p>
        <img src={popupimage} alt="" />
      </div>

      <div className='modal-right'>
        <h2>WE'D LOVE YOUR NUMBER.</h2>
        <h1>SIGN UP FOR EXCLUSIVE OFFERS</h1>
        <p>as in texts too good to leave on read.</p>
        <p className='by-submitting'>by submitting this form, you agree to recieve recurring automated promptional and
          personalized marketing text messages(e.g. cart reminders) from Aurate at the cell Number
          used when signing up. Consent is not a condition of any purchase. Reply HELP
          for help and STOP to cancel. Msg frequency varies. Msg and data rates may apply.
          <br />view <span> Terms & Privacy</span>
        </p>
        <div className='tel'>
          <input value={phoneNumber} onChange={handleChange} className="phoneNum" type="tel" placeholder='Phone Number' />
        </div>
        <button>
          <p>EXCLUSIVE OFFERS</p>
          <p>when you sign up for text</p>
        </button>
        <p onClick={onClose} className='no-thanks'>NO THANKS</p>
      </div>
      <div className='close-mark' onClick={onClose}><i class="fa-solid fa-xmark"></i></div>
    </div>
  )
}

export default PopUp
