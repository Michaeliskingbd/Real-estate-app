import React, { useState } from 'react'
import "./auth.css"
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 
  return (
    <div className='reg__sec'>
      <h2>Sign in</h2>
        <form className='register'>
          
        <label>Email</label>
        <input type='email' placeholder='Email'/>

      <label>Password:</label>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        
       
      />

      <a href='index.html' className='btn'>Submit</a>
      <span className='ahc'>Don't have an account? <Link to='/register'>Register</Link> here</span>

      <div className='other__connect'>
      <Link to="/"><i class="fa-brands fa-apple"></i> Continue with Apple</Link>
        <Link to="/"><i class="fa-brands fa-facebook"></i>Continue with Facebook</Link>
        <Link to="/"><i class="fa-brands fa-google"></i> Continue with Google</Link>

        <div className='eye' onClick={handleTogglePasswordVisibility}>
        <i className="fas fa-eye"  />
       </div>

        
      </div>
    </form>
    </div>
    
  );
};


export default LoginPage