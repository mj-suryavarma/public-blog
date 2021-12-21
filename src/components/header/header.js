import React,{useEffect, useState} from 'react'
import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faFeatherAlt} from '@fortawesome/free-solid-svg-icons';




function Header() {

      const [isToggle, setIsToggle] = useState(true); 
      
       
      
    return (
        <div className="page_header">
             <h1 className='logo'>
                YourWords <FontAwesomeIcon icon={faFeatherAlt} />
            </h1>
            <nav 
            className='navbar   navigation_bar desktop_navbar'  
            >
              <ul className='navbar' >
                  <li className='nav-item'>
                     <a href='#' className='nav-link'>
                     Home
                    </a>
                </li>
                <li className='nav-item'>
                     <a href='http://localhost:3000#aboutus' className='nav-link'>
                    About us
                    </a>
                </li>
                  <li className='nav-item'>
                     <a href='http://localhost:3000#Contactus' className='nav-link'>
                    Contact us
                    </a>
                </li>
                  <li className='nav-item '>
                     <a href='/app/login' className='nav-link loginLink'>
                     Login
                    </a> 
                </li>
                 </ul>

            </nav>
                <div className='mobile_navbar_background '
                 style={isToggle ? {display:'none',transition:'ease-in-out',transitionDuration:'2s'} : { transition:'ease-in-out'}}
                 
                 onClick={() => setIsToggle(!isToggle)}
               >
              </div>    
                <nav 
            className='navbar navbar-expand mobile_navbar' 
            style={isToggle ? {display:'none',transition:'ease-in-out',transitionDuration:'2s'} : { transition:'ease-in-out'}}
            >
              <div className='x_mark'
               onClick={() => setIsToggle(!isToggle)}>X</div>

              <ul className='nav' >
                  <li className='nav-item'>
                     <a href='#' className='nav-link'
                     onClick={() => setIsToggle(!isToggle)}>
                     Home
                    </a>
                </li>
                <li className='nav-item'>
                     <a href='http://localhost:3000#aboutus' 
                     className='nav-link'
                     onClick={() => setIsToggle(!isToggle)}>
                    About us
                    </a>
                </li>
                  <li className='nav-item'>
                     <a href='http://localhost:3000#Contactus' 
                     className='nav-link'
                     onClick={() => setIsToggle(!isToggle)}>
                    Contact us
                    </a>
                </li>
                  <li className='nav-item '>
                     <a href='/app/login' className='nav-link loginLink'>
                     Login
                    </a> 
                </li>
                 </ul>

            </nav>

             <FontAwesomeIcon icon={faBars} 
             className='fontawesome_icon' 
              onClick={() => setIsToggle(!isToggle)} 
             />
            </div>
    )
}

export default Header
