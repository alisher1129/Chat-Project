import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';

function UserHomePage() {
    const [userPosts, setUserPosts] = useState([]);

useEffect(()=>{
    axios.get(`http://localhost:4000/getalluser`)
    .then((res) =>{ console.log("res",res)
    console.log(res.data)
    setUserPosts(res.data)
    

})
    .catch((err) => console.log("err", err))

},[])

    return (
        <> <div><h1>UserHomePage</h1></div>
        
      <div>
        {userPosts.map((post) => (
        <>
        <h4>{post.title}</h4>
        <img
        key={post._id} // Assuming there's an _id field in your data
        src={post.photo} // Replace with the actual image URL field in your data
        alt={post.title} // Replace with the actual alt text field in your data
      />
      <div>
          <button>Like</button>
          <button>Comment</button>
        </div></>  
          
        ))}
        
        
      </div>
     
      
      
      
      
      
      </>
       
    )
}

export default UserHomePage