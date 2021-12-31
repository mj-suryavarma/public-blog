import React,{useEffect, useState} from 'react'
import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faFeatherAlt} from '@fortawesome/free-solid-svg-icons';




function Header() {

      const [isToggle, setIsToggle] = useState(false); 
      
        
      
    return (
        <div className="page_header">
              <a href="/" style={{textDecoration:'none',color:'white'}}>
             <h1 className='logo'>
                YourWords <FontAwesomeIcon icon={faFeatherAlt} />
            </h1>
              </a>
            <nav 
            className='navbar   navigation_bar'   id="desktop_navbar"
            > 
              <ul className='navbar' >
                  <li className='nav-item'>
                     <a href='#' className='nav-link'>
                     Home
                    </a>
                </li>
                <li className='nav-item'>
                     <a href='#aboutus' className='nav-link'>
                    About us
                    </a>
                </li>
                <li className='nav-item'>
                     <a href='#howitworks' className='nav-link'>
                     How it works
                    </a>
                </li>
                  
                  <li className='nav-item '>
                     <a href='/register' className='nav-link loginLink'>
                     Register
                    </a> 
                </li>
                 </ul>

            </nav>
                <div className='mobile_navbar_background '
                 style={!isToggle ? {display:'none',transition:'ease-in-out',transitionDuration:'2s'} : { transition:'ease-in-out'}}
                 
                 onClick={() => setIsToggle(!isToggle)}
               >
              </div>    
                <nav 
            className='navbar navbar-expand'  id ="mobile_navbar"
            style={!isToggle ? {display:'none',transition:'ease-in-out',transitionDuration:'2s'} : { transition:'ease-in-out'}}
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
                     <a href='#aboutus' 
                     className='nav-link'
                     onClick={() => setIsToggle(!isToggle)}>
                    About us
                    </a>
                </li>
                
                <li className='nav-item'>
                     <a href='#howitworks'
                      className='nav-link'
                      onClick={() => setIsToggle(!isToggle)}>
                     How it works
                    </a>
                </li>
 
                  <li className='nav-item '>
                     <a href='/register' className='nav-link loginLink'>
                     Register
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
