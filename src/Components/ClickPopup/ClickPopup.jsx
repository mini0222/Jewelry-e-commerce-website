import React, { useEffect, useState } from 'react'
import PopUp from '../PopUp/PopUp';
import './ClickPopup.css'

const ClickPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, [])
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div onClick={togglePopup} className='exclusiveOffer'>
                <p>EXCLUSIVE OFFER</p>
            </div>

            {isOpen && <PopUp onClose={togglePopup} />}

        </div>
    )
}

export default ClickPopup
