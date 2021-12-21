import React,{useState} from 'react'
import UserHeader from '../user-header/header';
 
function WritePage() {

 
    return (
        <div>
           <h2>hello world how are you...</h2>

        <form
         className="form" >
            <h1>hello world</h1>
           <div class="form-group">
             <label htmlFor="title">Title</label>
             <input type="text" 
             className="form-control" 
             name="title" 
             id="title" 
             aria-describedby="helpId" placeholder="" />
           </div>
           <div class="form-group">
             <label htmlFor="title">Story</label>
             <textarea 
             className='form-control'
              name='story'
              maxLength='10'
              id='story' 
             >
                    
             </textarea>  
               </div>
           <div class="form-group">
             <label htmlFor="title">Title</label>
             <input type="text" 
             className="form-control" 
             name="title" 
             id="title" 
             aria-describedby="helpId" placeholder="" />
           </div>

        </form>
    </div>
    )
}

export default WritePage
