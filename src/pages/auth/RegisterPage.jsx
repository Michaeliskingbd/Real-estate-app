import React, { useEffect, useState } from 'react'
import "./auth.css"
import { Link} from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"
import {SiFacebook} from "react-icons/si"
import {BsApple} from "react-icons/bs"
import { IoMdAlert } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

 const RegisterPage = () => {


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

 const handleSubmit = async (event) => {
  event.preventDefault();
  window.location.replace("/")
 }
  

  return (
    <div className='reg__sec' >
      <h2>REGISTER</h2>
        <form className='register'>
        {showPopup && <span className='popup'><IoMdAlert style={{fontSize:"3ren"}} />Just click Submit ! <MdOutlineCancel onClick={ closePopup} /></span>}
        <label>Full Name</label>
        <input type='text' placeholder='Enter Full Name'
    />
          
        <label>Email</label>
        <input type='email' placeholder='Enter email'
        />

        <label>Username</label>
        <input type='text' placeholder='Create Username'
     />

      <label>Password:</label>
      <input type="password" placeholder='Create password'
      />
      

      

      <div className='agent__box'>
        
        <input type='checkbox'/>
        <span>I am an agent who is interested in selling</span>   
      </div>

      <div className='btn' onClick={handleSubmit}>Submit</div>
      <span className='ahc'>Already have an account? <Link to='/login'>Sign in</Link> instead</span>

      <div className='other__connect'>
        <Link to="/"><i><BsApple/></i> Continue with Apple</Link>
        <Link to="/"><i><SiFacebook/></i>Continue with Facebook</Link>
        <Link to="/"><i ><FcGoogle/></i> Continue with Google</Link>
      </div>

     

    </form>
    
    </div>
    
    
  );
};


export default RegisterPage