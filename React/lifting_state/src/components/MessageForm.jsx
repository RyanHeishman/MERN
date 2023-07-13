import React, { useState } from "react";

const MessageForm = (props) => {
  
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewMessage( message );
  }
 
  return(

      <form onSubmit={ handleSubmit }>
        
        <h1>Set Your Message</h1>
        
        <textarea cols="30" rows="10" onChange={ (e) => setMessage(e.target.value) } value={message}></textarea>
        
        <div>
            <input type="submit" value="Send Message"/>
        </div>
    
        
    </form>

  );

}

export default MessageForm;