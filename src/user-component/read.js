import React,{useState,useEffect} from 'react';
import Header from './user-header/header.js';
import './read.css';
import axios from '../axios.js';
import {Avatar,IconButton} from '@mui/material';
import {ArrowLeftRounded} from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft,faArrowLeft} from '@fortawesome/free-solid-svg-icons'




function ReadPublic() {

      const [isError, setIsError] = useState(false);
      const [readBlog, setReadBlog] = useState({});
      
      const type = localStorage.getItem('type');
      const token = localStorage.getItem('token');
      
        
      let params = window.location.search;
      const id = new URLSearchParams(params).get('id');
      

   const fetchData = async() => {

       const options = {
       headers : {  authorization : `Bearer ${token}`,},
    }
       const body = {type , id}
       
           if(id){
    
               await axios.post(`/api/v1/app/blog/${id}`,body,options)
               .then(res => { 
                  setReadBlog(res.data)})
               .catch(err => console.log(err));
    
           }else{
            setIsError(true);                
           }

   }


    useEffect(() => {

  fetchData();

    },[id,token,type])
  
 

    return (
        <div>
            <Header />
            <div>
                <h3  className="text-center" style={isError ? {color:'red'} : {display:'none'}}>Oops! something went wrong please try again later....</h3>
            </div> 
             
            <div className="read_page">
               {readBlog ?        
                <div className="read_container">
                    <div className="back_arrow">
                        <IconButton onClick={() => window.open("/app/public","_self")}>
                         <FontAwesomeIcon icon={faArrowLeft}  />
                        </IconButton>
                    </div>
                <div className='read_head'>
                   <Avatar src={readBlog.googlePicture} />
                   <div className='read_head_details'>
                      <p className="read_head_name">{readBlog.userName}</p>
                      <div className="read_head_time_container">
                        <div> 
                             {readBlog.date}
                        </div>  
                        <div>
                            {readBlog.time}
                        </div>

                        </div>   
                    </div>  
                </div>

                <div className="read_body">
                <h3>{readBlog.title}</h3>
                <div className="read_body_content">
                    <p>&nbsp;&emsp;&emsp;&nbsp;{readBlog.story}</p>
                </div>

                </div>
                </div>
               :"nothing happen "} 
            </div>
              

        </div>
    )
}

export default ReadPublic
