import React, {useEffect,useState} from 'react';
import UserHeader from '../user-header/header';
import './public-home.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton/IconButton';
import axios from '../../axios.js';
import {Avatar} from '@mui/material';
import {Button,Collapse} from 'react-bootstrap'


function PublicHome() {

    const [storyData, setStoryData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const token = localStorage.getItem('token')
    const type = localStorage.getItem('type'); 
    const userId = localStorage.getItem('userId');


    const fetchData = async() => {
              
        setIsLoading(true);

        const options = {
          headers :  { 
              authorization : `Bearer ${token}`
          }
        }
         const body = { type}
    
     await axios.post('/api/v1/app/allBlog',body,options)
      .then(res =>{
           console.log(res.data)
          setStoryData(res.data)})
      .catch(err =>{
        setIsError(true)
        setTimeout(() => {
            setIsError(false)
        }, 5000);  
        console.log(err)});

        setIsLoading(false)
    }

    
    useEffect(() => {

fetchData();
    },[])


    return (
        <div>
            <UserHeader /> 
              <div className='blog_home'>
               <div className='blog_list_header'> 
                   <h6 style={{color:'red',textAlign:'center'}}>{isError ? "something went wrong please try again later":""}</h6>
                   <h5 style={{textAlign:'center'}}>{isLoading ? "Loading....":""}</h5>
                </div>
                    <div>
                        {
                            storyData.map((data) =>{ 
                                var dateArray = data.createdAt.split(/[.,\/ T-]/)
                                var blogArray = data.story.split(/[.]/)
                                
                                return <div className="blog_container" key={data._id}>
                                       <div className='blog_header'>
                                       <Avatar src={data.googlePicture} className="blog_avatar"/>
                                    <div className='blog_header_detail'>
                                       <p>{data.userName}</p> 
                                        <div className="blog_time_container">
                                           <div>
                                            <span>{dateArray[0]}</span>-
                                            <span>{dateArray[1]}</span>-
                                            <span>{dateArray[2]}</span> 
                                            </div>   
                                            <div> 
                                                {data.time}
                                            </div>
                                    </div> 

                                        </div>
                                       </div>
                                       <div className='public_blog_body'> 
                                       <h4>{data.title}</h4>
                                        <p>{blogArray[0]}....<a href={`/app/public/read?id=${data._id}`} target="_self">read more</a></p>
                                       </div>
                                         </div>
                            })
                        }
                    </div>
              </div>

        </div>
    )
}

export default PublicHome
