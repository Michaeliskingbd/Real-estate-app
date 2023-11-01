import React from 'react';
import "./option.css"
import image from "../../assets/005-user.png"
import image2 from "../../assets/003-user.png"
import image3 from "../../assets/007-chat.png"
import { Link } from 'react-router-dom';

const Option = () => {
  return (
    <div className='option__section'>
        <h1>We provide you with all the essentials for your home search</h1>
        <h3 className='subheading'>See how Citylights homes can help</h3>
        <div className='options'>
            <article className='options__content'>
                <img src={image} alt='pic'/>
                <div className='options__info'>
                <h2>Buy a home</h2>
                <h3>Lorem ipsum doporro et
                      error fugiat odit cupiditate quaerat tempora.</h3>
                     

                      <Link to="/" className='explore__btn'>Find a home</Link>
                </div>
                
            </article>

            <article className='options__content'>
                <img src={image2} alt='pic'/>
                <div className='options__info'>
                <h2>Rent a home</h2>
                <h3>Lorem ipsum doporro et
                      error fugiat odit cupiditate quaerat tempora.</h3>
                      <Link to="/" className='explore__btn'>Find a rental</Link>
                </div>
                
            </article>

            <article className='options__content'>
                <img src={image3} alt='pic'/>
                <div className='options__info'>
                <h2>Create</h2>
                <h3>Lorem ipsum doporro et
                      error fugiat odit cupiditate quaerat tempora.</h3>
                      <Link to="/create" className='explore__btn'>Be an agent</Link>
                </div>
                
            </article>


        </div>

       
    </div>
  )
}

export default Option