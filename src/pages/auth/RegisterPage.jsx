import React, { useState } from 'react'
import "./auth.css"
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [password, setPassword] = useState('');

  
  const isPasswordValid = (password) => {
    // Minimum length of 8 characters
    const lengthCheck = password.length >= 8;

    // mix of letters and numbers
    const alphanumericCheck = /^(?=.*[0-9])(?=.*[a-zA-Z])/.test(password);

    // At least 1 special character
    const specialCharCheck = /[!@#$%^&*]/.test(password);

    // At least 1 lowercase and 1 uppercase letter
    const caseCheck = /^(?=.*[a-z])(?=.*[A-Z])/.test(password);

    return lengthCheck && alphanumericCheck && specialCharCheck && caseCheck;
  };

  return (
    <div className='reg__sec'>
      <h2>New account</h2>
        <form className='register'>
          
        <label>Email</label>
        <input type='email' placeholder='Enter email'/>

      <label>Password:</label>
      <input
        type="password"
        value={password}
        placeholder='Create password'
        onChange={(e) => setPassword(e.target.value)}
      />
      
      
      {isPasswordValid(password) ? (
        <p className="success">All required characters completed.)</p>
      ) : (
        <>
        <p className="error">Must contain mix of letters and numbers</p>
        <p className="error"> At least 1 special character</p>
        <p className="error">At least 1 lowercase and 1 uppercase letter</p>
        <p className="error">Must contain minimum length of 8 characters</p></>
        
        
      )}
      

      <div className='agent__box'>
        
        <input type='checkbox'/>
        <span>I am an agent that is interested in selling</span>   
      </div>

      <Link to="/" className='btn'>Submit</Link>
      <span className='ahc'>Already have an account? <Link to='/login'>Sign in</Link> instead</span>

      <div className='other__connect'>
        <Link to="/"><i class="fa-brands fa-apple"></i> Continue with Apple</Link>
        <Link to="/"><i class="fa-brands fa-facebook"></i>Continue with Facebook</Link>
        <Link to="/"><i class="fa-brands fa-google"></i> Continue with Google</Link>
      </div>

     

    </form>
    
    </div>
    
    
  );
};


export default RegisterPage