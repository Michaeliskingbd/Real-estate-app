import React from 'react'
import "./explore.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from'../../assets/john-fornander-tVzyDSV84w8-unsplash.jpg';
import { Link } from 'react-router-dom';
import data from "../../Data"
import "../posts/post.css"




const Explore = ({posts}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  

  return (
    <section>
      

      <div className='section__title'>
        <h2>Explore Houses on Hlisting</h2>
        <h3>Take a deep dive and browse homes for sale, 
            original neighborhood photos, resident reviews
             and local insights to find what is right for you.
        </h3>
        </div>
        
        <Slider {...settings}>
        {data.map(({img, location1, location2, price,createdAt, name}) => {
          return(
            <Link className='my__link' to="/post:id/">
            <div className='house__content' >
            <img className='house__image' src={img} alt='house'/>
      
            <div className='house__info'>
            <p className='price'>{price}</p>
            <p className='location'>{location1}</p>
            <p className='location'>{location2}</p>
            <p className='name'>{name}</p>
            <p className='date'>{createdAt}</p>
            </div>
      
            </div>
      
            </Link>
          )
           
        })}

        

      

      </Slider>
     

  
        
      
        
        
       
       
    </section>
    
    
  )
}

export default Explore