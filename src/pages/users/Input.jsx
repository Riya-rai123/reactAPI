import React, { useState } from 'react'
import { BaseUrl } from '../../App';
import axios from 'axios';

const Input = () => {
  const POST_URL=`${BaseUrl}/posts`
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const createPost=async()=>{
    const payload={
      id:new Date().getTime(),
      userId:1,

      title:title,
      body:desc,
    }; try{
    await axios.post(POST_URL,payload);
  } catch(error){
    console.error("Error creating post:",error);
  }
    };
  return (
    <div style={{backgroundColor:"lightcoral",
        padding:"10px",
        borderRadius:"6px",
        display:"flex",
        flexDirection:"column",
        gap:"4px",
    }}>
      <input type="text" placeholder="Enter title...."
      onChange={(e)=>setTitle(e.target.value)}/>
      <textarea placeholder="Enter description...."
      onChange={(e)=>setDesc(e.target.ariaValueNow)}
      />
      <button 
      disabled={!title||!desc}
      onClick={createPost}>Hit Create API</button>
    </div>
  );
};

export default Input;
