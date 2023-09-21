import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext';
import { PostContext } from '../Context/PostContext';
import { Link } from 'react-router-dom'
import axios from 'axios';


function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // const { postId, setPostId } = useContext(PostContext);
  const [ postArray , setPostArray ] = useState('');

  useEffect(() => {
      console.log("currentUser", currentUser);
      axios.get(`http://localhost:4000/getuserpost/${currentUser.id}`)
      .then((res) => { 
        console.log("All Posts",res  ) 
        setPostArray(res);
        console.log(postArray);
      }).catch((err) => { console.log(err) })
// }
  }, [currentUser])


  // console.log(postArray);
  return (
     <>
      {currentUser ?
        (<div><h3> hello {currentUser.username}</h3>
        </div>
        ) : (<div></div>)
      }
      <Link to="/create">Create Post </Link>
    </>
  )
}

export default UserProfile