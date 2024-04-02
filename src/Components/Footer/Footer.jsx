import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='upper'>
                <div className='Newsletter'>
                    <p className='title'>Newsletter Sign-up</p>

                    <p>Get insider information about exclusive offers, events and more.</p>
                    <div className='email'>
                        <input type="email" placeholder='Email Address' />
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>

                <div className='aboutUs'>
                    <p>FNQ</p>
                    <p>Contact Us</p>
                    <p>Shipping & Return</p>
                    <p>Store Locator</p>
                    <p>Wholesale</p>
                    <p>Careers</p>
                </div>

                <div className='contact Us'>
                    <p className='title'>Contact Us</p>
                    <p>123.456.7890</p>
                    <p className='adress'>minigold@gmail.com</p>

                    <div className='social-media'>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-tiktok"></i>
                    </div>

                </div>

            </div>
            <hr />
            <div className='down'>
                <p>© 2024 MiniGold Inc. All rights reserved.</p>
                <div className='detail'>
                    <div className='detail-list'><p>Accessibility </p><span>|</span></div>
                    <div className='detail-list'><p>Privacy Policy </p><span>|</span></div>
                    <div className='detail-list'><p>Terms</p><span>|</span></div>
                    <p>Do Not Share My Information </p>
                </div>
            </div>
        </div>

    )
}

export default Footer
