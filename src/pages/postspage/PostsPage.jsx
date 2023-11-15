import React  from 'react'
import "./postpage.css"
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer'
import data from "../../Data"


const PostsPage = () => {

  return (
    <>
    <div className='header createpage'>

    <div className='overlay'></div>
    
    <div className='header__content cp'  data-aos="fade-up"   data-aos-duration="2000">

    <h1>Find Homes</h1>
    <h2>Explore thousands of houses on citylight.</h2>
    <a  href='#create' className='explore__btn' style={{marginTop: "15px"}}>Get started</a>
      
    
    
    
    
    
    </div>
    </div>

    <div className='postpage__container'>
      

    <div className='filter'>
   
      <select>
        <option>Filter</option>
        <option>Lowest price</option>
        <option>Highest price</option>
        <option>Newly listed</option>
      </select>

      <select>
        <option>City</option>
        <option>Lagos</option>
        <option>Abuja</option>
        <option>PortHarcourt</option>
        <option>Ibadan</option>
      </select>

      <button className='explore__btn' style={{border: "none"}}>Save</button>

      </div>
     

   
    
      
       
      <div className='postpage'>
    

{data.map(({img, location1, price,createdAt, name, bedroom, bathroom}) => {
          return(
            <Link className='my__link' to="/post/:id">
            <div className='house__content' >
            <img className='house__image' src={img} alt='house'/>
      
            <div className='house__info'>
            <p className='price'>{price}</p>
            <p>{bedroom} bed | {bathroom} bath | For sale</p>
            <p className='location'>{location1}</p>
            <p className='name'>{name} | {createdAt} </p>
          
            </div>
      
            </div>
      
            </Link>
          )
           
        })}
      
        
   
     
      </div>
       
    </div>
    <Footer/>
    </>
  
  )
}

export default PostsPage