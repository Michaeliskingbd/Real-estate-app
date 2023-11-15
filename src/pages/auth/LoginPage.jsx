import React, { useEffect, useState } from 'react'
import "./auth.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FcGoogle} from "react-icons/fc"
import {SiFacebook} from "react-icons/si"
import {BsApple} from "react-icons/bs"
import { IoMdAlert } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";



const LoginPage = () => {

  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(false);
    }, 7000);

     //Clear the timeout if the component unmounts or if the pop-up is closed manually
    return () => clearTimeout(timeoutId);
  }, []);

  const closePopup = () => {
    setShowPopup(!showPopup)
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
     window.location.replace("/")
    }
    
    
 


  return (
    <div className='reg__sec'  >
    
      <h2>LOGIN</h2>
        <form className='register' >
        {showPopup && <span className='popup'><IoMdAlert style={{fontSize:"3ren"}} />Just click Submit ! <MdOutlineCancel onClick={ closePopup} /></span>}
          
        <label>Username</label>
        <input type='text' placeholder='Username'
          />

      <label>Password:</label>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Password'
        />



      <div className='btn' onClick={handleSubmit} >Submit</div>
      <span className='ahc'>Don't have an account? <Link to='/register'>Register</Link> here</span>

      <div className='other__connect'>
      <Link to="/"><i><BsApple/></i> Continue with Apple</Link>
        <Link to="/"><i><SiFacebook/></i>Continue with Facebook</Link>
        <Link to="/"><i ><FcGoogle/></i> Continue with Google</Link>

        <div className='eye' onClick={handleTogglePasswordVisibility}>
        <i className="fas fa-eye"  />
       </div>

        
      </div>
    </form>
    </div>
    
  );
};


export default LoginPage