import React from 'react'
import './contact.css'
import { useState } from 'react'

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("")

  const handleSubmit = (e)=>{
        e.preventDefault();
        
       
        
        
  }
  
  
  return (
    
    <div className='container'>
      <div className='contact-container'>
        
        <div className='contact-text'>
          <h1>Share your story with us</h1>
        </div>

        <div className='divider'></div>

        <div className='contact-input'>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
             type="text"
             required/>
            
            <label>Email:</label>
            <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
             type="email"
             required/>

              <label>Message:</label>
             <textarea
             onChange={(e)=>{setMessage(e.target.value)}}
             value={message}
             required>

             </textarea>
            <br/>
            <input
            className='submit-btn'
            type="submit"/>
          
          </form>
        
        </div>
      </div>
    </div>
  )
}

export default Contact