import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeadset} from '@fortawesome/free-solid-svg-icons'

function AboutSection() {
    return (
        <div  className="about_container container" id="aboutus" >
             <div className='about_style_one'>
                 <h3 className='m-4'>About Us</h3>
             </div>

             <div className='about_style_two'>
             <h4>Services</h4>
              <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. <span className='removable_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.</span> </p> 
             <button className='btn btn-primary about_button'>read more</button>
             </div>
             <div className='about_style_three p-3'>
                 <h4>cutomer support</h4> <FontAwesomeIcon icon={faHeadset} style={{fontSize:'1.5rem'}} />
                  <p style={{width:'20vw'}}>
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.<span className='removable_content'>Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </span>
                  </p>
             </div>
        </div>
    )
}

export default AboutSection
