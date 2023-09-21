import Registration from './components/SignUp/Registration';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import UserLogin from './components/Login/UserLogin';
import HomePage from './components/Home/HomePage';
import StripePage from './components/Stripe/StripePage';
import UserProfile from "./components/User Profile/UserProfile"
import CreatePost from './components/Create Post/CreatePost';
import { UserContext } from './components/Context/UserContext';
import { PostContext } from './components/Context/PostContext';
// import GetPost from './components/View/GetPost';
import { useContext, useEffect, useState } from 'react';
import { decodeToken } from "react-jwt";
import axios from 'axios';



function App() {
  const [currentUser, setCurrentUser] = useState();
  const [postId, setPostId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {

    const token = localStorage.getItem('token')
    if (token !== null) {
      // console.log("hello")
      const myDecodedToken = decodeToken(token);
      // console.log("myDecodedToken", myDecodedToken);
      const func = async () => {      
     const result = await axios.get(`http://localhost:4000/getuser/${myDecodedToken.id}`).then((res)=>
     
     
     {
      console.log(res)
    setCurrentUser(res)
    console.log(currentUser)
    }).catch((error)=>console.log(error));
    //  console.log(result)
    //  setCurrentUser(result)
     
     if (result.data !== null){
      console.log("......")
      navigate('/profile')
     }
     }
     func();
    }
  }, [])



  return (

    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <PostContext.Provider value={{ postId, setPostId }}>
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/payment" element={<StripePage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/create" element={<CreatePost />} />
            {/* <Route path="/userpost" element={<GetPost />} /> */}

          </Routes>
        </PostContext.Provider>
      </UserContext.Provider>

    </>
  );
}

export default App;   
