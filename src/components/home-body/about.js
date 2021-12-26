import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeadset} from '@fortawesome/free-solid-svg-icons'

function AboutSection() {
    return (
        <div  className="about_container container" >
             <div className='about_style_one'>
                 <h3 className='m-4'>About Us</h3>
             </div>

             <div className='about_style_two p-4'>
             <h4>Services</h4>
              <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. </p> 
             <button className='btn btn-primary m-3'>read more</button>
             </div>
             <div className='about_style_three p-3'>
                 <h4>cutomer support</h4> <FontAwesomeIcon icon={faHeadset} style={{fontSize:'1.5rem'}} />
                  <p style={{width:'80px'}}>
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.
                  </p>
             </div>
        </div>
    )
}

export default AboutSection
