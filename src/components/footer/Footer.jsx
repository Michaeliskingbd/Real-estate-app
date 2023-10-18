import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer__section'>
        <div className='footer'>
            <hr/>
            <h2>
            Search over 1 million listings including apartments, houses, condos, and townhomes available for rent. You’ll find your next home, in any style you prefer.
            </h2>
            <hr/>

            <div className='footer__content'>
                <a href="#about">About</a>
                <Link to="/">career </Link>
                <Link to="/">Agents</Link>
                <Link to="/">Contacts</Link>
                <Link to="/">Maps</Link>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Maps</Link>
                <Link to="/">Help</Link>
                <Link to="/">FAQ</Link>
               
                
                <div>
                 
                
                </div>
            </div>
            <div className='footer__socials'>
                  <Link href="/" tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></Link>
                <Link href="/" tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></Link>
                  </div>
        </div>
    </div>
  )
}

export default Footer