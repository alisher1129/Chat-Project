import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Import useLocation in UserHomePage component



function UserHomePage() {
  const [userPosts, setUserPosts] = useState([]);
  const [buttonColor, setButtonColor] = useState();
  const [username, setUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filterData, setFilterData] = useState([])
  const [userAll, setUserAll] = useState([])



  useEffect(() => {
    axios.get(`http://localhost:4000/getalluser`)
      .then((res) => {
        setUserPosts(res.data)
      })
      .catch((err) => console.log("err", err))

    getUsers()
  }, [])



  // Function to change the button's color when clicked
  const changeColor = () => {
    // Change the color to a different color (e.g., green)
    setButtonColor('lightblue');
  };


  const handleSearch = async () => {

    await axios.post(`http://localhost:4000/searchuser`, {
      username: username
    }).then((response) => {
      setSearchResults(response.data);
      console.log("searchUserResult", response.data)
      console.log(response.data);
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



  const getUsers = async () => {

    await axios.get(`http://localhost:4000/allusers`).then((response) => {
      setUserAll(response.data);
      console.log("UserAll", response.data);
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



  const handleFindUser = (e) => {
    e.preventDefault();

    // Check if userAll is defined and not empty
    if (userAll && userAll.length > 0) {
      // Access the username property of the first item if it exists
      // Filter the data based on the username input
      const filter = userAll.filter((item) => item.username === username);

      setFilterData(filter);
    } else {
      // Handle the case where userAll is undefined or empty
      console.log("userAll is not defined or empty");
    }
  };



  console.log("FilterData", filterData, username)

  const dataToShare = 'Hello from Component UserHomePage';
  return (
    <>
      <div className='user-homepage'>

        <div ><h1>UserHomePage</h1></div>
        <div className='search-bar relative'>
          <form onSubmit={handleFindUser}>
            <input
              type="text"
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete='off'
              placeholder="Search..."
            />
            <button onClick={handleSearch} type='submit'>Search</button>

          </form>
          <div className='absolute'>
            {/* <Link to={`/search/${dataToShare}`}> {filterData.length > 0 && filterData[0].username}</Link>   */}
            <Link to='/search' dataToShare={searchResults}>{filterData.length > 0 && filterData[0].username}</Link>
          </div>
        </div>
        {/* <Link to={`/search/${dataToShare}`}>{filterData.length > 0 && filterData[0].username}</Link> */}



        <div>
          {userPosts.map((post) => (
            <>
              < Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <hr></hr>
                  <Card.Img variant="top" key={post._id}
                    src={post.photo}
                    alt={post.title} />


                </Card.Body>
              </Card>

              <div className='user-btn'>
                <button onClick={changeColor} style={{ backgroundColor: buttonColor }} >Like</button>
                <button>Comment</button>
              </div></>

          ))}


        </div>




      </div>
    </>

  )
}

export default UserHomePage