import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext';
import { PostContext } from '../Context/PostContext';
import { Link } from 'react-router-dom'
import axios from 'axios';


function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [ postArray , setPostArray ] = useState('');

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser, setCurrentUser]);

  const { postId, setPostId } = useContext(PostContext);
  useEffect(() => {
    console.log(postId)
      axios.get("http://localhost:4000/GetUserPost", {
          userId: postId
      }).then((res) => { 
        console.log("All Posts",res  ) 

        setPostArray(res);
        

        // setPostArray((prec) => [...prev]);
      }).catch((err) => { console.log(err) })

  }, [postId])


  console.log(postArray);
  return (


    <>
      {currentUser ?
        (<div><h3> hello {currentUser}</h3>
        {/* {postArray.map((p) =>{
          <div key={p.id}>
            {<img src={p.photo} alt='arraypicture'></img>}
          </div>
        })} */}
       <div> <img  src={postArray.photo} alt='picture'></img></div>



        </div>
        ) : (<div></div>)
      }
      <Link to="/create">Create Post </Link>

    </>

  )
}

export default UserProfile