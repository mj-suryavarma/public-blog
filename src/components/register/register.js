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
             
   axios.get('http://localhost:8000/api/v1/user/auth',)

      axios.post('http://localhost:8000/api/v1/user/auth', {name,email, password,}).then(res =>{ console.log(res.data)
      window.open('/',"_self");
    })
      .catch((err) => console.log(err));


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
            <div className="form-group mt-1">
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
              <h5 className='mt-3'>Do you have an Account <a href='/'
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

