import Registration from './components/SignUp/Registration';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import UserLogin from './components/Login/UserLogin';
import HomePage from './components/Home/HomePage';
import StripePage from './components/Stripe/StripePage';
import UserProfile from "./components/User Profile/UserProfile"
import CreatePost from './components/Create Post/CreatePost';
import { UserContext } from './components/Context/UserContext';
import { PostContext } from './components/Context/PostContext';
import UserHomePage from './components/UserHomePage/UserHomePage';
import SideBar from './components/SideBar/SideBar';
// import GetPost from './components/View/GetPost';
import { useContext, useEffect, useState } from 'react';
import { decodeToken } from "react-jwt";
import axios from 'axios';
import './Style.css'
import SearchUser from './components/SearchUser/SearchUser';


function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [postId, setPostId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {

    const token = localStorage.getItem('token')
    if (token !== null) {
      console.log("hello")
      const myDecodedToken = decodeToken(token);
      console.log("myDecodedToken", myDecodedToken);
      // console.log(myDecodedToken.id)
      const func = async () => {
        await axios.get(`http://localhost:4000/getuser/${myDecodedToken.id}`).then((res) => {
          console.log(res)
          setCurrentUser(res)
          console.log(currentUser)
          if (res.data !== null) {
            console.log("......")
            navigate('/profile')
          }
        }).catch((error) => console.log(error));
        //  console.log(result)
        //  setCurrentUser(result)

        // 
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

          </Routes>
          <SideBar>


            <Routes>


              <Route path="/payment" element={<StripePage />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/userhome" element={<UserHomePage />} />
              <Route path="/navbar" element={<SideBar />} />
              <Route path="/search/:data" element={<SearchUser />} />


            </Routes>
          </SideBar>

        </PostContext.Provider>
      </UserContext.Provider>


    </>
  );
}

export default App;   
