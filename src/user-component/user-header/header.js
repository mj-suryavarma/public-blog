import React from 'react'
import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faFeatherAlt,faGlobe, faEllipsisV, faUserCircle} from '@fortawesome/free-solid-svg-icons'; 
import IconButton from '@mui/material/IconButton/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';


function UserHeader() {
    return (
        <div className='user_header'>  
        <h1 className='user_logo'>
        YourWords <FontAwesomeIcon icon={faFeatherAlt} />
    </h1>
         <div className='header_nav'>
         <div className='header_nav_user'>
                <div>
                     <IconButton>
                     <FontAwesomeIcon icon={faGlobe} className="user_header_Icon globeIcon" />
                     </IconButton>
               </div>  

                 <div>
                   <IconButton onClick={() => {window.open('/app/write',"_blank")}}>
                <FontAwesomeIcon icon={faEdit} className='user_header_icon WriteIcon'  /> 
                   </IconButton>
                 </div>  
          
               <div>
                   <IconButton>
                <Avatar className='userIcon' />
                   </IconButton>
                   <span>{localStorage.getItem('name')}</span>
                 </div>     
       </div >

             <div className='toolIcon_container'>
             <div>
                     <IconButton>
                     <FontAwesomeIcon icon={faGlobe} className="user_header_Icon globeIcon" />
                     </IconButton>
               </div>  

                 
                 <IconButton>
                <FontAwesomeIcon icon={faEllipsisV} className='user_header_icon toolIcon' />
                 </IconButton>

             </div>   

         </div>
          
        </div>
    )
}

export default UserHeader
