import React, { Component } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import image3 from "../../assets/007-chat.png"

class NavBar extends Component  {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked })
  }
  render() {
  return (
    <>
    <nav>
      <h1>
      <Link to="/">
        HLISTNG.com
      </Link>
      </h1>
      

      <div>
        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "navbar"}> 
          <li><Link to="/post:id/">Buy</Link></li>
          <li><Link to="/login">Rent</Link></li>
          <li><Link to="/create">Sell</Link></li>
          <li><Link to="/profile">My dashboard</Link></li>
          <div className='signin__box'>
          <Link to="/register"><li>Sign up</li></Link>   
          </div>
          <Link to="/profile"><div className='profile__pic'>
            <img src={image3} alt='pp'/>
          </div></Link>
          
        </ul>
        
        {/*<ul className='active'>
          <li>
            Sign in
          </li>
          <li>
            Login
          </li>
        </ul>*/}
      </div>

      <div id='mobile' onClick={this.handleClick}> 
        <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
  
      </div>
    </nav>
    </>
  )
}
}

export default NavBar