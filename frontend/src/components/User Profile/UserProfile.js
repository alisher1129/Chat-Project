import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext';
import { PostContext } from '../Context/PostContext';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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







  return (
    <>
    <div>{currentUser ?
        (<div><h2> {currentUser.data.username}</h2><div>
          <div ><div  > <h4>0</h4> <h4>Followers</h4> </div>
          <div > <h4>0</h4><h4>Following</h4></div></div></div>
          
         
          <div className='profile-btn' ><Button variant="primary">Follow</Button>
            <Button variant="primary">Message</Button>
          </div>



        


          <hr></hr>
          <div className='user-profile'>
            {postArray.map((post) => (
              < Card style={{ width: '25rem' }}>
                <Card.Img variant="top" key={post._id} src={post.photo} alt="Post" />
              </Card>
            ))}
          </div>


        </div>
        

        ) : (<div></div>)
      }
</div>
      
    </>
  )
}

export default UserProfile