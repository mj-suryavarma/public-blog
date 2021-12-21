import React from 'react';
import UserHeader from '../user-header/header';
import './public-home.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton/IconButton';

function PublicHome() {


    return (
        <div>
            <UserHeader /> 
              <div className='blog_home'>
               <div className='blog_list_header'>
             <h1>Now everything is ready for deployment how to feel like that</h1>
               </div>

              </div>

        </div>
    )
}

export default PublicHome
