import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import image3 from "../../assets/007-chat.png"
import image4 from "../../assets/Asset 4citylight.png"
import {AiFillHome} from "react-icons/ai"
import {GiHouseKeys} from "react-icons/gi"
import {VscAccount} from "react-icons/vsc"
import {MdOutlineRealEstateAgent} from "react-icons/md"
import { useState } from 'react';

const NavBar = () => {

  const [activeNav, setActiveNav] = useState("")

  return (
   <>
    <nav>
      <h1>
      <Link to="/">
       <img className='logo' src={image4} alt='citylight'/>
      </Link>
      </h1>
      

      <div>
        <ul id="navbar"> 
          <li><Link to="/post:id/">Buy</Link></li>
          <li><Link to="/login">Rent</Link></li>
          <li><Link to="/create">Sell</Link></li>
          <li><Link to="/profile">My dashboard</Link></li>
          <div className='signin__box'>
          <Link to="/register"><li>Log out</li></Link>   
          </div>
         
          
        </ul>
      </div>
     

      <div className='mp'><Link to="/profile"><div className='profile__pic'>
            <img src={image3} alt='pp'/>
          </div></Link></div>


    </nav>

    <div className='navbar__mobile'>
    <Link id='link'  to="/"><div> <AiFillHome id='ic' onClick={() => setActiveNav("#home")} className={activeNav ==="#home" ? "active" : ""} />Home</div></Link>
    <Link id='link' to="/post:id"><div> <GiHouseKeys  id='ic'  onClick={() => setActiveNav("#buy")} className={activeNav ==="#buy" ? "active" : ""} />Buy</div></Link> 
    <Link id='link' to="/create"><div> <MdOutlineRealEstateAgent  id='ic'  onClick={() => setActiveNav("#sell")} className={activeNav ==="#sell" ? "active" : ""}/>Sell</div></Link>
    <Link id='link' to="/login"><div> <VscAccount  id='ic'  onClick={() => setActiveNav("#account")} className={activeNav ==="#account" ? "active" : ""}/>Account</div></Link>
      </div>

    </>
   
  )
}


export default NavBar