import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext';
import { PostContext } from '../Context/PostContext';
import { Link } from 'react-router-dom'
import axios from 'axios';


function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { postId, setPostId } = useContext(PostContext);
  const [postArray, setPostArray] = useState([]);
  console.log(currentUser);
  console.log("check user")
  useEffect(() => {
    if (currentUser) {
      console.log("currentUser", currentUser);
      console.log(currentUser.data._id);
      axios.get(`http://localhost:4000/getuserpost/${currentUser.data._id}`)
        .then((res) => {
          console.log("All Posts", res.data)
          setPostArray(res.data);
          console.log(postArray);
        }).catch((err) => { console.log(err) })
    }
  }, [currentUser])
  console.log("currentUser")
  console.log(currentUser);
  console.log(postArray)

  // console.log(postArray);
  return (
    <>
      {currentUser ?
        (<div><h2> {currentUser.data.username}</h2><div>
          <div > <h3>0</h3> <button>followers</button> </div>
          <div> <h3>0</h3><button>following</button> </div></div>
          <Link to="/create">Create Post </Link>
          <Link to="/userhome">User Home Page </Link>

          <hr></hr>
          <div>
            {postArray.map((post) => (
              <img key={post._id} src={post.photo} alt="Post" />
            ))}
          </div>


        </div>

        ) : (<div></div>)
      }

    </>
  )
}

export default UserProfile