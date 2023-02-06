import React from 'react'

import './ChatList.css'
function ChatList({data,loading,captureUserData}) {
  


  return (
    <div className='chatlist'>
        <nav>
           <img src='' alt='dp' className='dp'/>
           <h1>Home</h1>
           <h1>Status</h1>
        </nav>

        {loading?(<h2>Loading.......</h2>):
         data.map(result=>{
            
         return(
            <div className='Chats' onClick={()=>{captureUserData(result)}} >
                <img src={result.image} alt='DP_picture' className='profile_pic'/>
                <div className='profile_name'>
                <h3 key={result.id}>{result.firstName}</h3>
                <h5>{result.email}</h5>
                <h5>{result.gender}</h5>
                </div>
            </div>   
             )
            })    
        }

    </div>
  )
}

export default ChatList