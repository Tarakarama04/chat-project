import React, { useState } from 'react';
import './ChatSpace.css'

export default function ChatSpace({user}){
  
  const[text,setText]=useState(" ")
  const[content,setContent]=useState([])
  const clickEvent=()=>{
    const arr = []
      if(text!==" "){
        arr.push(text)
      }else{
        return arr
      }
      setContent([...content,arr])
      setText(" ")
  }
  return (
    <div className='chat_box'>
      {/* <nav className='Chatbox_nav'>
        <img src={user.image} alt='friend_dp' className='frnd_dp'/>
        <h3>{user.firstName}</h3>
      </nav>
      <div className='content'>
        {content.map(result=>{
          return(<div className='msg'><em>{result}</em> </div>)
        })}
      </div> */}
      <div className='text_area'>
        <input type='text' className='text_box' onChange={(e)=>{setText(e.target.value)}} value={text}/>
        {text?<button className='send_btn' onClick={clickEvent}>Send</button>:null}
      </div>

    </div>
  )
}
