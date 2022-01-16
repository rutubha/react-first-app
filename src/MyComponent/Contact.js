import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div className='container'>
            <h1>Contact Us</h1>
            <div className='description'>
                <div>For any type of query or opprtunity you can contact me with my Email or Linkedin</div>
                <label>Email : <a href="mailto: ruturajsinhrathod3@gmailcom" target="_blank">ruturajsinhrathod3@gmail.com</a></label><br />
                <label>Linkedin : <a href="https://www.linkdin.com/in/ruturajsinh-rathod-93a02822b" target="_blank">ruturajsinh-rathod</a></label>
            </div>
        </div>
    )
}
