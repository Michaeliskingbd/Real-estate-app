import React from 'react'
import "./createpage.css"
import { Link } from 'react-router-dom'

const CreatePage = () => {
  return (
    <div className='secondary__container'>
        
            <form>
                <div className='details'>
                <h2>House details</h2>
                <label>Title</label>
                <input className='create__input' type='text' placeholder='Name of property'/>

                <label >Category</label>
                <select >
                    <option>Condo</option>
                    <option>Apartment</option>
                    <option>Flat</option>
                </select>

                <label>Description</label>
                <textarea type='text' placeholder='Name of property'/>

                <div className='bnb'>
                <label>Beds and Bathrooms</label>
                <div><span>Number of bedrooms</span>  <div className='count__box'><i class="fa-solid fa-minus"></i> <p> 4</p> <i class="fa-solid fa-plus"></i></div> </div>
                <div><span>Number of bathrooms</span>   <div className='count__box'><i class="fa-solid fa-minus"></i> <p> 4</p> <i class="fa-solid fa-plus"></i></div></div>
                </div>
                

                </div>

                <div className='create__location'>
                    <h2>Location</h2>
                    <p>Where is thid property located?</p>
                    <input className='create__input' type='text' placeholder='Location'/>
                </div>

                <div className='create__pricing'>
                    <h2>Pricing</h2>
                    <p>How much is this property?</p>
                    <div>
                    <select >
                        <option>NGN</option>
                        <option>USD</option>
                    </select>
                    <input  className='create__input'type='number' placeholder='Price'/>
                    </div>
                    
                </div>

                <div className='create'>
                    <a href='#' className='btn'>Create</a>
                </div>

                

            </form>
       
     
    </div>
  )
}

export default CreatePage