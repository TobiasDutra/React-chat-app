import React, { useState } from 'react'

export const InputText = ({addMessage}) => {
    const [message, setMessage] = useState()
    const sendMessage = () => {
        addMessage(message)
        setMessage("")
    }
  return (
    <div className='inputtext_container'>
        <textarea name="message" id="message" rows="6" placeholder='Write a message' onChange={(e) => setMessage(e.target.value)} ></textarea>
        <button onClick={sendMessage}>Send</button>
    </div>
  )
}
