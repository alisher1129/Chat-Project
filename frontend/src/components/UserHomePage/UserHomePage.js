import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


function UserHomePage() {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/getalluser`)
      .then((res) => {
        console.log("res", res)
        console.log(res.data)
        setUserPosts(res.data)


      })
      .catch((err) => console.log("err", err))

  }, [])

  return (
    <> 
    <div className='user-homepage'>




    <div ><h1>UserHomePage</h1></div>
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search..."
        />
        <button >Search</button>
      </div>

      <div>
        {userPosts.map((post) => (
          <>
            < Card style={{ width: '30rem' }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <hr></hr>
                <Card.Img variant="top" key={post._id} 
                  src={post.photo} 
                  alt={post.title}  />
                

              </Card.Body>
            </Card>
      
            <div className='user-btn'>
              <button>Like</button>
              <button>Comment</button>
            </div></>

        ))}


      </div>




    </div>
   






    </>

  )
}

export default UserHomePage