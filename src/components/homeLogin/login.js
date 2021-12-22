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
import axios from 'axios';


class Login extends Component {

        constructor(props){
           super(props)
           this.state = {
             email :"",
             password :'',
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

         
         axios.post('http://localhost:8000/api/v1/google/auth',{tokenId : response.tokenId})
         .then(res => {
           console.log(res.data.data)
            const {email_verified, name ,email, picture} = res.data.data;
             if(email_verified){ 
               localStorage.setItem('googlename',name);
               localStorage.setItem('googleemail',email);
               localStorage.setItem('googlepicture',picture);

                      window.open('/app/public',"_self");
             }
          })
         .catch(err => console.log(err)); 

  }

   responseGoogleFailure = (response) =>{
          console.log(response);
  }
 onSubmitHandler = (e) => {
    e.preventDefault(); 
    console.log(this.state.email," and  password is: ",this.state.password);
                const email = this.state.email;
                const password = this.state.password;

//// find the user 
            if(email && password) {

              axios.post('http://localhost:8000/api/v1/user/login',{email,password})
              .then(res =>{
      ///   get token
                  const {user,token} = res.data
                   console.log(user.name, token);
                   if(token && user.name) {
                           localStorage.setItem('token',token);
                           localStorage.setItem('name', user.name);
                           
                           window.open('/app/public',"_self");

                   }else{
                     console.log("something went wrong please try again later...")
                   }
              })
              .catch((err) =>  {
                  console.log("error: Bad request error....",err);  
              });
              
            }
            else {
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
            <form className='form' onSubmit={this.onSubmitHandler}>
              
              <div className="form-group mt-1">
                <label htmlFor="">Email</label>
                <input type="email"
                 className="form-control mt-1"
                  name="email"
                  onChange={this.changeHandler}
                   id="email" 
                   aria-describedby="emailHelpId" 
                   required
                   placeholder="example@gamil.com" /> 

              </div>  
              <div className="form-group mt-1">
                <label htmlFor="password">password</label>
                <input type="password" 
                className="form-control mt-2" 
                name="password" 
                required
                id="password" 
                onChange={this.changeHandler}
                aria-describedby="helpId" 
                placeholder='password' 
                /> 
              </div> 
                <button type='submit' className='btn btn-primary mt-4'>Submit</button>

            </form>
            <div className='mt-3 text-light' style={{fontSize:'1.1rem'}} >Are you new person? <a href="/register" style={{fontSize:'1rem',textDecoration:'none' }}>Register</a></div>
            <p className='text-light mt-4'>
              OR
            </p>
            <div>
            <GoogleLogin
    clientId="631249414397-4hklutmu3rn135q8h4j85ob79a0r5qmn.apps.googleusercontent.com"
    render={renderProps => (
      <button  className='google_custom_button btn btn-primary mt-3'
      onClick={renderProps.onClick} disabled={renderProps.disabled}>
        <FontAwesomeIcon icon={faArrowRight} />
         <span> </span>  Continue with google</button>
    )}
    buttonText="Login"
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
