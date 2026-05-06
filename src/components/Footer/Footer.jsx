import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>We deliver fresh and delicious food right to your doorstep. 
Our mission is to provide high-quality meals made with the finest ingredients, 
ensuring a great dining experience every time you order. 
From local favorites to popular dishes, we bring taste and convenience together.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Delivery</li>
                   <li>Privacy policy</li>
               </ul>
            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUGH</h2>
               <ul>
                   <li>6361788351</li>
                   <li>johnsonbalnad2512@gmail.com</li>
               </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
