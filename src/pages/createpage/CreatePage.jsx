import React, { useEffect, useState } from 'react'
import "./createpage.css"
import Footer from '../../components/footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FcImageFile} from "react-icons/fc"


const CreatePage = () => {

  useEffect(()=> {
    AOS.init();
  }, [])

    const [count, setCount] = useState(0)
    const [counttwo, setCounttwo] = useState(0)

    const Increase = () => {

            setCount(count +1)  
    }

    const Decrease = () => {
        if (
            count > 0 
        ) {
            setCount(count -1)
        }
       
    }


    const Increasetwo = () => {

            setCounttwo(counttwo +1)  
    }

    const Decreasetwo = () => {
        if (
            counttwo > 0 
        ) {
            setCounttwo(counttwo -1)
        }
       
    }




    const handleSubmit = async (e) => {
        e.preventDefault();
       
      };

  return (
    <>
  <div className='header createpage'>

  <div className='overlay'></div>

  <div className='header__content cp' data-aos="fade-up"   data-aos-duration="2000" >
  <h1>Sell your home with confidence</h1>
  <h2>Citylight makes it simpler to sell your home and move forward.</h2>
  <a  href='#create' className='explore__btn crr' style={{marginTop: "15px"}}>Get started</a>

  
  

</div>



</div>






    <div className='secondary__container' data-aos="fade-up"   data-aos-duration="2000">
        
            <form>
              <div className='create__title' id='create' data-aos="fade-right"   data-aos-duration="2000"><h1>Create a Home For Listing</h1></div>
              
                <div className='details'>
                <h2>House details</h2>
                <label>Title</label>
                <input className='create__input' type='text' placeholder='Name of property'
                  />

                <label>Company's name</label>
                <input className='create__input' type='text' placeholder='Name of property'
               />

              
                <label >Category</label>
                <select >
                    <option>Condo</option>
                    <option>Apartment</option>
                    <option>Flat</option>
                </select>

              

                <label>Description</label>
                <textarea type='text' placeholder='Describe what the property looks like'
               />

                  

                <div className='bnb'>
                <label style={{fontWeight: "500", fontSize: ".9rem"}}>Beds and Bathrooms</label>
                <div ><span style={{fontSize: ".8rem"}} >Number of bedrooms</span>  <div style={{fontSize: ".8rem"}} className='count__box'><i  onClick={Decrease} class="fa-solid fa-minus"></i> <p>{count}</p> <i onClick={Increase} class="fa-solid fa-plus"></i></div> </div>
                <div><span style={{fontSize: ".8rem"}}>Number of bathrooms</span>   <div style={{fontSize: ".8rem"}} className='count__box'><i  onClick={Decreasetwo} class="fa-solid fa-minus"></i> <p>{counttwo}</p> <i  onClick={Increasetwo} class="fa-solid fa-plus"></i></div></div>
                </div>
                

                </div>

                <div className='create__location'>
                    <h2>Location</h2>
                    <p style={{fontSize: ".8rem"}}>Where is this property located?</p>
                    <input className='create__input' type='text' placeholder='Location'
                    />
                </div>

                <div className='create__pricing'>
                    <h2>Pricing</h2>
                    <p style={{fontSize: ".8rem"}}>How much is this property?</p>
                    <div>
                    <select >
                        <option>NGN</option>
                        <option>USD</option>
                    </select>
                    <input  className='create__input'type='number' placeholder='Price'
                     />
                    </div>
                    
                </div>

                <div className='create__location' data-aos="fade-up"   data-aos-duration="2000"  data-aos-delay="500">
                    <h2>Add image <FcImageFile/></h2>
                    <input className='create__input' type='file'
                    id='fileInput'
                    />

                </div>

                <div className='create'>
                    <div className='btn' onClick={handleSubmit}>Create</div>
                </div>

                

            </form>
       
     
    </div>
    <Footer/>
    </>
  )
}

export default CreatePage