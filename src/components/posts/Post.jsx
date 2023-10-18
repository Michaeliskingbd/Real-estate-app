import React from 'react'
import image from'../../assets/john-fornander-tVzyDSV84w8-unsplash.jpg';
import "./post.css"
import { Link } from 'react-router-dom';



const Post = () => {
  return (
    
    
      <Link className='my__link' to="/post:id/">

     

        
             <div className='house__content' >
          
            
             <img className='house__image' src={image} alt='house'/>
 
             <div className='house__info'>
             <p className='price'> $236,56</p>
             <p className='location'>Lekki Phase II, Lagos State,</p>
             <p className='location'>P.O Box 5330</p>
             <p className='name'> St Johnson Real Estate</p>
             <p className='date'> 9 days ago</p>
             </div>
             
         </div>
         
         <div className='house__content' >
          
            
          <img className='house__image' src={image} alt='house'/>

          <div className='house__info'>
          <p className='price'> $236,56</p>
          <p className='location'>Lekki Phase II, Lagos State,</p>
          <p className='location'>P.O Box 5330</p>
          <p className='name'> St Johnson Real Estate</p>
          <p className='date'> 9 days ago</p>
          </div>
          
      </div>
      

      <div className='house__content' >
          
            
          <img className='house__image' src={image} alt='house'/>

          <div className='house__info'>
          <p className='price'> $236,56</p>
          <p className='location'>Lekki Phase II, Lagos State,</p>
          <p className='location'>P.O Box 5330</p>
          <p className='name'> St Johnson Real Estate</p>
          <p className='date'> 9 days ago</p>
          </div>
          
      </div>
      

      <div className='house__content' >
          
            
          <img className='house__image' src={image} alt='house'/>

          <div className='house__info'>
          <p className='price'> $236,56</p>
          <p className='location'>Lekki Phase II, Lagos State,</p>
          <p className='location'>P.O Box 5330</p>
          <p className='name'> St Johnson Real Estate</p>
          <p className='date'> 9 days ago</p>
          </div>
          
      </div>
      
       
    </Link>

    
        
  )
}

export default Post