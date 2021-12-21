import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFeatherAlt} from '@fortawesome/free-solid-svg-icons';
import './homeBody.css';
import WritingImage from '../images/writing.png';
import StoryImage from '../images/story.jpg';
import Contactus from '../contactus/contactus';


function HomeBody() {
    return (
        <div>
        <div className='home_body_container' >
           <div className='welcome_container'>
               <h2>Write And Post your Story 
            <FontAwesomeIcon icon={faFeatherAlt} className='feather_icon' />
               </h2>
               <p>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
               </p>
             <button className='btn get_started text-light text-bold'>Get Started</button>
            <div className='mt-5 text-center'> 
                <q className='qoutes text-muted'>shower your talent to the world</q>
            </div>
           </div>
           <div className='writing_image'>
              <img src={WritingImage} alt='a men sit on the bench and write story' className='writing_image' />
           </div>
        
        </div>
       
             <h2 className='text-center mb-5' id="aboutus">About us</h2>
        <div className='aboutus_container container '>
             <div className='about_image_container'>
                <img src={StoryImage} alt="writing story using pen and peper" className='stroy_image' />
             </div>
             <div className='about_text_container'>
             <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.
            </p>
            <button className='btn btn-primary'>
                Read more
            </button>
             </div>
        </div>

              <h2 className='text-center mt-5' id="Contactus">Contact Us</h2>
              <Contactus  />
        </div>

    )
}

export default HomeBody
