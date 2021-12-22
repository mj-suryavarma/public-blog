import React,{Component, useState} from 'react';
import UserHeader from '../user-header/header';
import axios from '../../axios.js';


class WritePage extends Component {
 
   constructor(props) {
      super(props);
      this.state = {
        title : '',
        story : '',
      }

      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
   }

    onChangeHandler = (e) => {
         const name = e.target.name;
         const value = e.target.value;
         this.setState({[name] : value});

    }

      onSubmitHandler = (e) => {
          e.preventDefault();
          const title = this.state.title;
          const story = this.state.story;
          
          
          if(title.length > 11 && story.length > 21) {
            
            axios.post('/api/v1/app/blog',{title, story})
           .then(res => console.log(res.data))
           .then(err =>  console.log(err));
           
           console.log("title : ",title,"story : ", story);
           
        }else {
             console.log("please provide your title minlength - 10 char blog minlen 20 char")
         }

      }

  render() {

  return (
        <div>
             <UserHeader />

        <form 
         className="form container" 
          onSubmit={this.onSubmitHandler}
         >
           <div class="form-group">
             <label htmlFor="title">Title</label>
             <input type="text" 
             className="form-control" 
             name="title" 

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
              id='story'
              placeholder='football most famous game in the world...' 
             >
                    
             </textarea>  
               </div>
               <button className="btn mt-4 btn-primary">
                  Post
               </button>

        </form>

         
    </div>

    )
}
}

export default WritePage
