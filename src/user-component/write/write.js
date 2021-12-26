import React,{Component, useState} from 'react';
import UserHeader from '../user-header/header';
import axios from '../../axios.js';
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons';


class WritePage extends Component {
 
   constructor(props) {
      super(props);
      this.state = {
        title : '',
        story : '',
        success : false,
        isError:false,
        isLoading: false,
      }

      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
   }

    onChangeHandler = (e) => {
         const name = e.target.name;
         const value = e.target.value;
         this.setState({[name] : value});

    }

      onSubmitHandler = async(e) => {
          e.preventDefault();
      
          this.setState({isLoading : true})

          const title = this.state.title;
          const story = this.state.story;
          const userId = localStorage.getItem('userId');
          const token = localStorage.getItem('token');
          const type = localStorage.getItem('type');
          const userName = localStorage.getItem('name');
          const googlePicture = localStorage.getItem('googlepicture')


          if(title.length > 11 && story.length > 21) {
      const options = {
        headers : {
             authorization : `Bearer ${token}`
        } 
      }
          
       const body = {
         title, story, type, googlePicture, userName, googleUserId:userId }

           await axios.post('/api/v1/app/blog',body,options)
           .then(res => {
             const {success} = res.data;
             console.log(res.data)
             this.setState({success: success})
               setTimeout(() => {
                 window.open("/app/public","_self");
               }, 3000); 

            })
           .then(err => {
              console.log(err)
              if(err) {
                this.setState({isError:true})
                setTimeout(() => {
                  this.setState({isError:false})
                }, 5000);             
              }

            });
           
           
        } 

        this.setState({isLoading:false});

      }

  render() {

  return (
        <div>
             <UserHeader />

        <form 
         className="form container" 
          onSubmit={this.onSubmitHandler}
         >
           <p style={{color:'green'}}>{this.state.success ? "successfully created": ""}</p>
          <p style={{color:'red'}}>{this.state.isError ? "something went wrong please try again later..": ''}</p>
           <div class="form-group">
             <label htmlFor="title">Title</label>
             <input type="text" 
             className="form-control" 
             name="title" 
             minLength={10}
             onChange={this.onChangeHandler}
             id="title" 
             aria-describedby="helpId" placeholder="history of football" />
           </div>
           <div class="form-group">
             <label htmlFor="title">Story</label>
             <textarea 
             className='form-control'
              name='story'
              onChange={this.onChangeHandler}
               rows={10}
               minLength={20}
              id='story'
              placeholder='football most famous game in the world...' 
             >
                    
             </textarea>  
            
               </div>
               <p className='text-muted'>title :  min - 10 char , story : min - 20 char</p>
               <button className="btn mt-4 btn-primary">
                 {this.state.isLoading ? "Posting.." : "Post"}
               </button>

        </form>

         
    </div>

    )
}
}

export default WritePage
