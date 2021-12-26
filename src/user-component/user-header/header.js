import React,{useState} from 'react'
import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faFeatherAlt,faGlobe, faEllipsisV, faUserCircle} from '@fortawesome/free-solid-svg-icons'; 
import IconButton from '@mui/material/IconButton/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';


function UserHeader() {

  const [isToggle, setIsToggle] =useState(false)


   const logoutHandler = ()=> {
              
              //              /// remove cache google user and normal user
              localStorage.removeItem('googlename');
              localStorage.removeItem('googleemail');
              localStorage.removeItem('googlepicture');

              localStorage.removeItem('name');
              localStorage.removeItem('email');
              localStorage.removeItem('userId');
              localStorage.removeItem('type')
              localStorage.removeItem('token');

              window.open("/","_self");
  
   }

    return (
        <div className='user_header'>  
        <h1 className='user_logo' onClick={() => window.open('/app/public',"_slef")}>
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
          
               <div className="header_user_avatar">
                   <span className="header_user_name">{localStorage.getItem('name') } </span> 
                   <IconButton onClick={() => setIsToggle(!isToggle)}>
                <Avatar src={localStorage.getItem('googlepicture')} className='userIcon' />
                   </IconButton>
                   <div className="logout_container" style={isToggle ?{display:'block'} : {display:'none'}}>
                     <p className="account" >Account</p>
                     <p onClick={logoutHandler} className="logout">Logout</p>
                    </div> 
                 </div> 
     
                    
           </div >
 
         </div>
          
        </div>
    )
}

export default UserHeader
