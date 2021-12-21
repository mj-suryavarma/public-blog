import React from 'react';
import './contactus.css';


function Contactus() {
    return (
        <div className='contactus_container container'>
            <form className='form'>
              <div className="form-group mt-2">
                <label htmlFor="name">name</label>
                <input type="text" 
                className="form-control mt-3" 
                name="name" id="name" 
                aria-describedby="helpId" 
                placeholder="john..." /> 
              </div> 
              <div className="form-group mt-3">
                <label htmlFor="">Email</label>
                <input type="email"
                 className="form-control mt-3"
                  name="email"
                   id="email" 
                   aria-describedby="emailHelpId" 
                   placeholder="example@gamil.com" /> 
              </div> 
                <div className="form-group mt-3">
                  <label htmlFor="message">Feedback</label>
                  <textarea className="form-control"
                   name="message" 
                   id="message" 
                   placeholder='some text'
                   rows="3"></textarea>
                </div>
                <button type='submit' className='btn btn-primary mt-4'>Submit</button>
            </form>
            
        </div>
    )
}

export default Contactus
