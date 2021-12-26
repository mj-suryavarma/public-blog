import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFeatherAlt} from '@fortawesome/free-solid-svg-icons';
import './homeBody.css';
import AboutSection from './about';
import womenWritingImage from '../images/women-writing.jpg';
import writingBackground from '../images/writing-background.jpg';
import digitalReadImage from '../images/digital-read.jpg'


function HomeBody() {
    return (
        <div className="home_body" id="howitworks">
               <div className='home_body_background p-5'>
                   <h4>How it Works</h4>
                   <p className='home_body_text' >Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. </p>
               </div>
               <div className='digitalRead'>
                   <img src={digitalReadImage}  className='digitalReadImage'/>
               </div>
               <div className='writingBackground'>
               <img src={writingBackground}  className='writingBackgroundImage'/>
               </div>
               <div className='womenWriting'>
               <img src={womenWritingImage} className='womenWritingImage' />
               </div>
        </div>

    )
}

export default HomeBody
