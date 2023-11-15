import React from 'react'
import image3 from "../../assets/PngItem_1503945.png"
import "./profile.css"
import {FcAddImage} from "react-icons/fc"
import userprofilepic from "../../assets/kendall.jpg"

const Profile = () => {

 
  
  const user = true

  return (
  
    <div className='profile__universal'>
      <div className='profile__container'>
      <div className='profile'>
        <h2>Hello</h2>
        <h3>Kendall Jenner</h3>
        <span>@Kendoll</span>
        
        <div className='main__profilepic'>
       
        <img
              src={user ?  userprofilepic : image3}
              alt=""
            />
          
        </div>
            <label htmlFor='fileInput' style={{ fontSize: "2rem", margin: "0" }} ><i ><FcAddImage/></i></label>
        <div  className='btn' >Upload picture  </div>
        <input
         type="file"
         id="fileInput"
         style={{ display: "none" }}
        />
       
        <div className='upload__details'>Make sure the file you are uoloading is not bigger than 5mb and size not over 1200px by 800px </div>
      </div>



      <div className='dashboard'>
      <h2>Edit Profile</h2>
      <form className='dashboard__content'>

        <div>
          <label>Full name</label>
          <input type='text' placeholder="Kendal Jenner"/>
        </div>

        <div>
          <label>Username</label>
          <input type='text' placeholder="Kendoll001"/>
        </div>

        <div>
          <label>Email</label>
          <input type='email' placeholder="kendalljenner@gmail.com"/>
        </div>

        <div>
          <label>Password:</label>
          <input type='password'  placeholder='New password'/>
        </div>

        <div> 
          <label>Confirm password:</label>
          <input type='password'  placeholder='Confirm password'/>
        </div>
  
       
      
      </form>
      <div className='btn'>Update info</div>
      </div>
      </div>
     
    </div>

   
   
  )
}

export default Profile