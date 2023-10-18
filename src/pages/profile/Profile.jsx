import React from 'react'
import image3 from "../../assets/007-chat.png"
import "./profile.css"


const Profile = () => {
  return (
    <div className='profile__universal'>
      <div className='profile__container'>
      <div className='profile'>
        <h2>Hello</h2>
        <h3>Michael King</h3>
        <span>@mking123</span>
        <div className='main__profilepic'>
          <img src={image3} alt='img'/>
        </div>
        <a href='/' className='btn'>Upload picture</a>
        <div className='upload__details'>Make sure the file you are uoloading is not bigger than 5mb and size not over 1200px by 800px </div>
      </div>



      <div className='dashboard'>
      <h2>Edit Profile</h2>
      <form className='dashboard__content'>

        <div>
          <label>Full name</label>
          <input type='text' placeholder='Michael King'/>
        </div>

        <div>
          <label>Username</label>
          <input type='text' placeholder='@michaelking'/>
        </div>

        <div>
          <label>Email</label>
          <input type='email' placeholder='Email@gmail.com'/>
        </div>

        <div>
          <label>Password:</label>
          <input type='password'  placeholder='Password'/>
        </div>

        <div> 
          <label>Confirm password:</label>
          <input type='password'  placeholder='Confirm password'/>
        </div>
  
       
      
      </form>
      <a href='#' className='btn'>Update info</a>
      </div>
      </div>
     
    </div>
  )
}

export default Profile