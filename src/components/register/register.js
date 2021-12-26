import React, { Component } from 'react';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFeatherAlt} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


class Register extends Component {


    constructor(props){
        super(props)
        this.state = {
            name:'',
          email :"",
          password :'',
          isError: false,
          isSuccess: false,
          isMessage : '',
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
        console.log(response)
}

responseGoogleFailure = (response) =>{
       console.log(response);
}
onSubmitHandler = (e) => {
 e.preventDefault(); 
             const email = this.state.email;
             const password = this.state.password;
             const name = this.state.name;
             console.log("name",name,"password",password,"email",email);
             
 
      axios.post('http://localhost:8000/api/v1/user/register', {name,email, password,})
      .then(res =>{ 
        console.log(res.data)
       const {success,msg} = res.data;
       if(success){

         this.setState({isSuccess: true})
         this.setState({isError: false})

         setTimeout(()=>{

      window.open('/',"_self");
           
         },2000)
       }
    if(msg){
      this.setState({isMessage:msg})
    }
    
    })
      .catch((err) =>{
         console.log(err)
        this.setState({isError:true})

        });


}

    render() {

    return (
        <div className='register_page'>
             <div className='header_watermark'>
                YourWords <FontAwesomeIcon icon={faFeatherAlt} />
             </div>

             
            <div className='register_container'>
              <h3>Register</h3>
            <form className='form' onSubmit={this.onSubmitHandler}>
              <p style={{color:'green'}}>{this.state.isSuccess ? "successfully resgister your details": ""}</p>
              <p style={{color:'red'}}>{this.state.isError ? "something went wrong please try again later": ""}</p>
              <p style={{color:'blueviolet'}}>{this.state.isMessage ? this.state.isMessage : '' }</p>
            <div className="form-group mt-4">
                <label htmlFor="name">Name</label>
                <input type="text"
                 className="form-control mt-1"
                  name="name"
                  onChange={this.changeHandler}
                   id="name" 
                   aria-describedby="emailHelpId" 
                   placeholder="Jonh..." /> 
              </div>   
              <div className="form-group mt-1">
                <label htmlFor="">Email</label>
                <input type="email"
                 className="form-control mt-1"
                  name="email"
                  onChange={this.changeHandler}
                   id="email" 
                   aria-describedby="emailHelpId" 
                   placeholder="example@gamil.com" /> 
              </div>  
              <div className="form-group mt-1">
                <label htmlFor="password">password</label>
                <input type="password" 
                className="form-control mt-2" 
                name="password" 
                id="password" 
                onChange={this.changeHandler}
                aria-describedby="helpId" 
                placeholder='password' 
                /> 

              </div> 
                <button type='submit' className='btn btn-primary mt-4'>Submit</button>
              <h5 className='mt-3'>Do you have an Account ? go <a href='/'
              className='link'
              style={{textDecoration:'none'}}>Home page</a></h5>
            </form>
            <div> 
         </div>
 </div>
 </div>
    )
}
}
export default Register;

