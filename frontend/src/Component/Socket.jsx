import React from 'react'
import { useState,useEffect } from 'react'
import { io } from "socket.io-client";
const Socket = () => {
    const[input,setInput]=useState(" ");
    const[socket,setSocket]=useState(" ");

    useEffect(() => {
        const socketobj = io("http://localhost:3000");
        setSocket(socketobj);
        socketobj.on("recieve",function(data){
            console.log(data)
        })
      }, []);

    const handleChange=(e)=>{
        setInput(e.target.value)
    }
const hancleClick=()=>{

    socket.emit("message",input)
    
}

  return (
    <div>
        <h1>Chat app</h1>
        <input type={"text"} onChange={handleChange}/>
        <button onClick={hancleClick}>Send Message</button>
        

        </div>
  )
}

export default Socket