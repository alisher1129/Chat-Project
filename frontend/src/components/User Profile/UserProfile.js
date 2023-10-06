import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext';
import { PostContext } from '../Context/PostContext';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './UserProfile.css';
// import Helmet from 'react-helmet';



function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { postId, setPostId } = useContext(PostContext);
  const [postArray, setPostArray] = useState([]);
  const [followersCount, setFollowersCount] = useState(0);
  const [isFollowed, setIsFollowed] = useState(false);
 
  useEffect(() => {
    if (currentUser) {
      
       axios.get(`http://localhost:4000/getuserpost/${currentUser.data._id}`)
        .then((res) => {
          
          setPostArray(res.data);
          
        
        }).catch((err) => { console.log(err) })
    }
  }, [currentUser])

 
  const handleFollowClick = () => {
    // Toggle the follow status and increment/decrement followers accordingly
    if (isFollowed) {
      setFollowersCount((prevCount) => prevCount - 1);
    } else {
      setFollowersCount((prevCount) => prevCount + 1);
    }
    // Toggle the follow status
    setIsFollowed(!isFollowed);
  };


  return (
    <>

    
    
   <div className="user-profile-container">
   {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet> */}
      {currentUser ? (
        <div>
          <h2>{currentUser.data.username}</h2>
          <div className="user-stats">
            <div className="followers">
              <h4>{followersCount}</h4>
              <h4>Followers</h4>
            </div>
            <div className="following">
              <h4>0</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div className="profile-btn">
            <Button onClick={handleFollowClick} variant="primary"> {isFollowed ? 'Unfollow' : 'Follow'}</Button>
            <Button variant="primary"><Link style={{color:'white'}} to="/messenger" >Message</Link></Button>
          </div>
          <hr />
          <div className="user-profile">
            {postArray.map((post) => (
              <Card style={{ width: '25rem', height: '250px' }} key={post._id}>
                <Card.Img width='200px' height='250px' variant="top" src={post.photo} alt="Post" />
              </Card>
            ))}
          </div>
        </div>
        // just check
      ) : (
        <div></div>
      )}
    </div>

      
    </>
  )
}

export default UserProfile