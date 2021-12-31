import React,{useState,Component} from 'react';
import './login.css';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComments, 
  faClipboard, 
  faFeatherAlt, 
  faEdit, 
  faArrowRight,
faGlobe} from '@fortawesome/free-solid-svg-icons';

import {GoogleLogin} from 'react-google-login';
import axios from '../../axios.js';
 

class Login extends Component {

        constructor(props){
           super(props)
           this.state = {
             email :"",
             password :'',
             isError:'',
             isHaveAccount:false,
             isLoading:false,
           }
           this.changeHandler = this.changeHandler.bind(this);
           this.onSubmitHandler = this.onSubmitHandler.bind(this);
        }

        async componentDidMount(){
        }

      changeHandler = (e) => {
             const targetedName = e.target.name
             const targetedValue = e.target.value  
                    this.setState({[targetedName]:targetedValue});

            }
   responseGoogleSuccess = (response) => {

         
         axios.post('/api/v1/google/auth',{tokenId : response.tokenId})
         .then(res => {
          
            const {email_verified, name ,email,_id, picture} = res.data.data;
             if(email_verified){ 
               localStorage.setItem('name',name);
               localStorage.setItem('email',email);
               localStorage.setItem('userId',_id);
               localStorage.setItem('type',"google")
               localStorage.setItem('googlePicture',picture);

                      window.open('/app/public',"_self");
             }
          })
         .catch(err =>{
            console.log(err)
            this.setState({isError:"something went wrong try again"})
            setTimeout(() => {
             this.setState({isError:''})
            }, 4000);
          }); 

  }

   responseGoogleFailure = (response) =>{ 
          this.setState({isError:"something went wrong try again"})
          setTimeout(() => {
           this.setState({isError:''})
          }, 4000);
  }
 onSubmitHandler = (e) => {
    e.preventDefault(); 
      this.setState({isLoading : true}); 
                const email = this.state.email;
                const password = this.state.password;

//// find the user 
            if(email && password) {

              axios.post('/api/v1/user/login',{email,password})
              .then(res =>{
      ///   get token
                  const {user,token,msg} = res.data 
                   if(token && user.name) {

                    /// ser user via manual login
                           localStorage.setItem('token',token);
                           localStorage.setItem('name', user.name);
                           localStorage.setItem('userId',user.id);
                           localStorage.setItem('type',"auth")
                           
              //              /// remove cache google user
               localStorage.removeItem('googlename');
               localStorage.removeItem('googleemail');
               localStorage.removeItem('googlePicture');
                           
                      this.setState({isLoading:false});
                           window.open('/app/public',"_self");

                   }
                   if(msg){
                     this.setState({isError:msg})
                     setTimeout(() => {
                       this.setState({isError:''})
                     }, 5000); 
                  }
                    
              })
              .catch((err) =>  {
                this.setState({isError:"something went wrong try again"})
                setTimeout(() => {
                 this.setState({isError:''})
                }, 4000);
                  console.log("error: Bad request error....",err);  
              });
              
            }
            else {
              this.setState({isError:"something went wrong try again"})
              setTimeout(() => {
               this.setState({isError:''})
              }, 4000);
              console.log("bad request error");
            }
  }

  render() {
    
    return (
        <div className="entry_page">
          
            <div className="welcome_icon_container ">
              <div>
             <FontAwesomeIcon icon={faComments} className='welcome_icon' />
             <FontAwesomeIcon icon={faClipboard} className='welcome_icon' />
              </div> 
              <div>
             <FontAwesomeIcon icon={faFeatherAlt} className='welcome_icon' />
             <FontAwesomeIcon icon={faGlobe} className='welcome_icon' />
              </div> 
              <div>
             <FontAwesomeIcon icon={faEdit} className='welcome_icon' />
              </div>
              <div> 
              </div>
            </div> 
            
             <div className='login_container'>
              <h3>Login</h3>
              
            <form className='form mt-4' onSubmit={this.onSubmitHandler}>
              <p style={{color:'red'}}>{this.state.isError? this.state.isError : ''}</p>
              <div className="form-group mt-1">
                <label htmlFor="">Email</label>
                <input type="email"
                 className="form-control mt-1"
                  name="email"
                  autoComplete="off"
                  onChange={this.changeHandler}
                   id="email" 
                   aria-describedby="emailHelpId" 
                   required
                   placeholder="example@gamil.com" /> 

              </div>  
              <div className="form-group mt-1">
                <label htmlFor="password">password</label>
                <input type="password"
                autoComplete="off"
                className="form-control mt-2" 
                name="password" 
                required
                id="password" 
                onChange={this.changeHandler}
                aria-describedby="helpId" 
                placeholder='password' 
                /> 
              </div> 
                <button 
                type='submit' 
                className='btn btn-primary mt-4'
                 disabled={this.state.isLoading}>
                   {this.state.isLoading ? "Loading.." : "submit"}</button>

            </form>
            <div className='mt-3 text-light' style={{fontSize:'1.1rem'}} >Are you new person? <a href="/register" style={{fontSize:'1rem',textDecoration:'none' }}>Register</a></div>
            <p className='text-light mt-4'>
              OR
            </p>
            <div className='google_custom_button'>
            <GoogleLogin
    clientId="631249414397-4hklutmu3rn135q8h4j85ob79a0r5qmn.apps.googleusercontent.com"
     
    buttonText="continue with google"
    onSuccess={this.responseGoogleSuccess}
    onFailure={this.responseGoogleFailure}
    cookiePolicy={'single_host_origin'} />
   
              </div>
           
            </div>
        </div>
    )
  }

  }


export default Login
