import React from 'react'
import "./singlepost.css"
import image3 from "../../assets/john-fornander-tVzyDSV84w8-unsplash.jpg"
import Slider from 'react-slick';
import data from "../../int"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SinglePost = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        arrows: true, // Show navigation arrows
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      }


    

     
    
 

  return (
    <div className='singlepost__container'>
        <div className='sp__image'>
          <img src={image3}alt='sp'/>
        </div>


       
              <Slider {...settings}>

              {data.map((items) => {
            return(
        
              <div className='more__image'>
                <div className='more__images'>
                <img src={items} alt='sp'/>
                </div>
              
              </div>
            )

          })}
            </Slider>
            
          
      

        <div className='box'>

        <div className='sp__details'>
            <div>Emmet Johnson Property & sons <p>Lekki Phase II, Lagos State</p></div>
            <div  className='sp__pricing'>$299,999</div>
            <a href='index.html' className='btn'>Make Enquiry</a>
        </div>

        <div className='sp__desc'>
            <h3>Description</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ratione mollitia culpa, facere repellat vel error quam optio, fugit voluptate, aliquam animi asperiores reprehenderit doloremque facilis officia magni distinctio? Optio impedit repellat ducimus reprehenderit unde ut ab eaque! Fugiat magni blanditiis non sapiente. Voluptates pariatur accusantium, esse sit fuga repellat?
            </p>
        </div>

        
            
            <div className='sp__bnb'>
            <h3>Interior description</h3>
                <label>Beds and Bathrooms</label>
                <div><span>Number of bedrooms</span> <div className='bnb__num'><p>5</p></div>   </div>
                <div><span>Number of bathrooms</span>  <div className='bnb__num'><p>2</p></div>  </div>
                </div>
                </div>

                <div className='com create__location'>
                    <h2>Add review...</h2>
                   
                    <textarea className='comment__area' type='text' placeholder='What do you think?'/>
                    <div className='comm btn'>Post</div>
                </div>

                <div className='comment__box'>

                <h1>Reviews</h1>
                <div className='comments'>
                 
                <article className='comment__content'>
                
                <div className='comment__info'>
                <h2>User</h2>
                <h3>I work around here and would like to own a house here one day</h3>

                     
                </div>
                
            </article>

            <article className='comment__content'>
                
                <div className='comment__info'>
                <h2>User</h2>
                <h3>It's a very beautiful house with lot of stores around, very safe and conducive</h3>

                     
                </div>
                
            </article>

            <article className='comment__content'>
                
                <div className='comment__info'>
                <h2>User</h2>
                <h3>It's a very beautiful house with lot of stores around, very safe and conducive</h3>

                     
                </div>
                
            </article>

            <article className='comment__content'>
                
                <div className='comment__info'>
                <h2>User</h2>
                <h3>It's a very beautiful house with lot of stores around, very safe and conducive</h3>

                     
                </div>
                
            </article>
            </div>
                </div>

                
       

    </div>
  )
}

export default SinglePost