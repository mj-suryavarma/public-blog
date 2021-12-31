import React,{useState,useEffect} from 'react';
import UserHeader from "../user-header/header";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './personal.css';
import {IconButton, Avatar} from '@mui/material';
import axios from '../../axios.js';



function PersonalPage() {

 const [isToggle, setIsToggle] = useState(false);
 const [account, setAccount] = useState("myBlog");
  const [userBlog, serUserBlog] = useState([]);
 const [isSuccess, setIsSuccess] = useState(false);
 const [userInfo, setUserInfo] = useState({});
 const [deleteToggle, setDeleteToggle] = useState(false);
 const [isError , setIsError]= useState(false);


  const token = localStorage.getItem('token');
  const id = localStorage.getItem('userId');
  const type = localStorage.getItem('type');
  
  let params = window.location.search;
  const BlogId = new URLSearchParams(params).get('id');
 
     
       ///// delete user's blog
  const deleteHandler = async() => {
 
      const reqOptions = {
          headers : {
             'contentType': 'application/json',
             Authorization: `Bearer ${token}`,
            },
            data : {type,BlogId}
       }
    axios.delete(`api/v1/app/user/blog/${BlogId}`,reqOptions)
    .then(res =>{ console.log(res.data)
         const {success} = res.data
         if(success){
             setIsSuccess(success)
             return
         }
    })
      .catch(err =>{
        
       setIsError(true)
       setTimeout(() => {
           setIsError(false)
       }, 5000);  
        console.log(err)});
   
      setTimeout(() => {
         return window.open("/app/user/account","_self");

      }, 5000);
    }


    ///// fetch data

  const fetchBlogData = async() => {
      /// get users blog
    const options = {
        headers : {
            authorization : `Bearer ${token}`,
        },
    }
    const body = { googleUserId:id, type}

   await axios.post('/api/v1/app/user/blog',body,options)
   .then(res => serUserBlog(res.data))
   .catch(err =>{ 
       setIsError(true)
       setTimeout(() => {
           setIsError(false)
       }, 5000);
    console.log(err)}
   )
}

//// get data
const getUser = async() => {
      
      ///// get user info
      
         if(type ==="auth"){
       
            await axios.post('/api/v1/get/user',{id})
            .then(res =>{
                if(res.data){
           setUserInfo(res.data)
                }
                })
            .catch(err =>{
                
       setIsError(true)
       setTimeout(() => {
           setIsError(false)
       }, 5000);
                console.log(err)})
          
         }
          else if(type ==="google"){
      
              await axios.post('/api/v1/google/user',{id})
              .then(res =>{
                setUserInfo(res.data)  
                })
              .catch(err =>{
                
       setIsError(true)
       setTimeout(() => {
           setIsError(false)
       }, 5000);  
                console.log(err)})
        
          }

  }

  

  useEffect(() => {
    fetchBlogData();
    getUser();
  },[])


  //// delete user info

const userDeleteHandler = async() => {

    
    const reqOptions = {
        headers : {
           'contentType': 'application/json',
           Authorization: `Bearer ${token}`,
          },
          data : {type,id}
     }

    if(type ==="auth"){
       
        await axios.delete('/api/v1/get/user',reqOptions)
        .then(res =>{
            console.log(res.data)
           const {success} = res.data;
           if(success){ 
                        //              /// remove cache google user and normal user
                        localStorage.removeItem('googlename');
                        localStorage.removeItem('googleemail');
                        localStorage.removeItem('googlePicture');
          
                        localStorage.removeItem('name');
                        localStorage.removeItem('email');
                        localStorage.removeItem('userId');
                        localStorage.removeItem('type')
                        localStorage.removeItem('token');
          
                 window.open("/","_self");
            

           }
           else {
            
       setIsError(true)
       setTimeout(() => {
           setIsError(false)
       }, 5000);
                }
        })
        .catch(err =>{
            
       setIsError(true)
       setTimeout(() => {
           setIsError(false)
       }, 5000);
            console.log(err)})
        return
     }
      else if(type ==="google"){
  
          await axios.delete('/api/v1/google/user',reqOptions)
          .then(res =>{
                  console.log(res.data)
                  const {success} = res.data;
                  if(success){ 
                               //              /// remove cache google user and normal user
                               localStorage.removeItem('googlename');
                               localStorage.removeItem('googleemail');
                               localStorage.removeItem('googlePicture');
                 
                               localStorage.removeItem('name');
                               localStorage.removeItem('email');
                               localStorage.removeItem('userId');
                               localStorage.removeItem('type')
                               localStorage.removeItem('token');
                 
                               window.open("/","_self");
                  }
                  else {
                   
              setIsError(true)
              setTimeout(() => {
                  setIsError(false)
              }, 5000);
                       }
       
        })
          .catch(err =>{
       setIsError(true)
       setTimeout(() => {
           setIsError(false)
       }, 5000);  
            console.log(err)})
      return
      }
}

            console.log("userinfo is",userInfo);
    return (
        <div>
            <UserHeader />
            <div className="accountPage">
                <div style={{display:'flex',gap:'20px'}}>
                <IconButton style={{margin:'0px 20px'}} onClick={() => window.open("/app/public","_self")}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </IconButton>
                  <h3>Account</h3>
                </div>

             <div className="account_container">
                      
                <div className="account_slids">
                    <h5 onClick={()=>setAccount("userInfo")} className="slid_user">User Info</h5>
                    <h5 onClick={()=>setAccount("myBlog")} className="slid_blog">my blogs</h5> 
                    <h5 onClick={()=>setAccount("dangerZone")} id="slid_danger">Danger zone</h5>
                </div>
                
                 <div
                 className="account_slids_mobile"
                 style={isToggle ? {display:'block',transitionDuration:'4s'}: {display:'none'}}>
                <FontAwesomeIcon icon={faBars}  
                className="faBar_mobile"
                 onClick={() => setIsToggle(!isToggle)} />

                    <h5 onClick={()=>{
                        setIsToggle(false)
                        setAccount("userInfo")}}>User Info</h5>
                    <h5 onClick={()=>{
                        setIsToggle(false)
                        setAccount("myBlog")}}>my blogs</h5> 
                    <h5 onClick={()=>{
                        setIsToggle(false)
                        setAccount("dangerZone")}} id="slid_danger_mobile">Danger zone</h5>
                </div>
                <div className="account_details">
                      <h6 style={{color:'red',marginTop:'10px'}}>{isError ? "Something went wrong please try again later..":""}</h6>  

                <FontAwesomeIcon icon={faBars}
                     className="faBar" 
                    onClick={() => setIsToggle(!isToggle)} 
                    />
                <div className="user_info" style={account==="userInfo" ? {display:'block'}:{display:'none'}}>
                        <div className='userInfo_container'>
                            <Avatar src={userInfo.picture}  className="userInfo_avatar" />
                          <div className="userInfo_body">
                              {userInfo ? 
                              <div className="userInfo">
                              <h6>name : {userInfo.name}</h6>
                              <h6>Email :{userInfo.email}</h6> 
                               </div>   
                              : <div>
                                  <h4>Something went wrong.. please try again later</h4>
                                  </div>
                              }
                          </div>
                           </div>
                </div>
                <div className="blog_container" style={account === "myBlog" ? {display:'block'} : {display:'none'}}>
                        
                        <div className="myBlog_container">
                            {userBlog.length === 0 ? <h5 style={{textAlign:'center',color:'blue'}}>you nothing have any blog.</h5>:""}
                            {userBlog.map((data) => {
                                return <div className='myBlog' key={data._id} id={data._id}>
                                    <div className="delete_alert" style={data._id === BlogId ? {display:'block'} : {display:'none'}}>
                                        {
                                    isSuccess ? 
                                      <h6 className="text-success text-align-center">successfully deleted !</h6>
                                    :  <div className='delete_alert'>
                                        <p className='text-align-center text-center m-2'>Confirm ?</p> 
                                       <button className='btn btn-sm btn-light'
                                       onClick={()=>window.open(`/app/user/account`,"_self")}>Cancel</button>
                                       <button className='btn btn-sm btn-danger'onClick={deleteHandler}>Delete</button>
                                    </div>
                                        }
                                    </div>
                                    <div className='myBlog_head'>
                                    <div className="myBlog_time">{data.time}<span>&emsp;</span>{data.date}</div>
                                    <div className='myBlog_edit_delete'>
                                        <div className='myBlog_edit'>
                                           <a href={`/app/user/edit?id=${data._id}`}>Edit </a> 
                                            </div>
                                        <div className="myBlog_delete">
                                            <a href={`/app/user/account?id=${data._id}`}
                                             > Delete </a>
                                                </div>
                                    </div>
                                    </div>
                                    <h6 className='myBlog_title'>{data.title}</h6>
                                    
                                    <p className='myBlog_story'>{data.story}</p>
                                    
                                </div>
                            })}
                        </div>
                </div>
                <div className="danger_container" style={account === "dangerZone" ? {display:'block'} : {display:'none'}}>
                   <div className="user_delete_container">
                       <div className="user_delete">
                        <h5>Do you want to delete your account ?</h5>
                        <button className=" user_delete_btn" 
                        onClick={() => setDeleteToggle(!deleteToggle)}>delete my account</button>
                       </div>
                       <div className="user_delete_alert" style={deleteToggle ? {display:'block'} : {display:'none'}}>
                           <h6>confirm ?</h6> 
                           <div style={{marginTop:'20px'}}>
                           <button className='btn btn-light'
                            style={{margin:'0 10px'}}
                            onClick={() => setDeleteToggle(false)}
                           >cancel</button>
                           <button className="btn btn-danger user_delete_btn_confirm mr-3" 
                           style={{margin:'0 10px'}}
                           onClick={userDeleteHandler}
                           >delete</button>
                           </div>
                       </div>
                   </div>
                </div>
                </div>
             </div>
            </div>
        </div>
    )
}

export default PersonalPage
