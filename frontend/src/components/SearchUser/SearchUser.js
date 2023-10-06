import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Searchuser.css';






function SearchUser() {
    const [data, setData] = useState();
    const [_name, set_name] = useState();
    const location = useLocation();
    const parts = location.pathname.split('/');
    const [searchImage , setSearchImage ] = useState([]);
    const [followersCount, setFollowersCount] = useState(0);
    const [isFollowed, setIsFollowed] = useState(false);
    // Split the path into an array
    
    useEffect(() => {
        set_name(parts[2]);

    },[]);


useEffect(()=>{
    const func = async () => {
    await axios.post(`http://localhost:4000/searchuser`, {
    username: _name
  }).then((response) => {
    setData(response.data[0].userId.username);
    setSearchImage(response.data)
    // console.log("USERDATA: ",response.data[0].userId.username);
    console.log("USERDATA: ",response.data);

  })
    .catch((error) => {
      console.error('Error:', error);
    })
}
func();
},[_name])


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
    
        <div>
          <h2>{data}</h2>
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
            <Button onClick={handleFollowClick} variant="primary">{isFollowed ? 'Unfollow' : 'Follow'}</Button>
            <Button variant="primary"><Link style={{color:'white'}} to="/messenger" >Message</Link></Button>
          </div>
          <hr />
          <div className="user-profile">
            {searchImage.map((post) => (
              <Card style={{ width: '25rem', height: '250px' }} key={post._id}>
                <Card.Img width='200px' height='250px' variant="top" src={post.photo} alt="Post" />
              </Card>
            ))}
          </div>
        </div>
        </div>

          
        </>

    )
}

export default SearchUser