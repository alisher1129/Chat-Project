import Registration from './components/SignUp/Registration';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
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
import Messenger from './components/Messenger/Messenger';



function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login'
  const payPage = location.pathname ==='/payment'; 
  const [currentUser, setCurrentUser] = useState(false);
  const [postId, setPostId] = useState(null);
  const navigate = useNavigate();
  // console.log(isLoginPage)
  useEffect(() => {

    const token = localStorage.getItem('token')
    if (token !== null) {

      const myDecodedToken = decodeToken(token);

      const func = async () => {
        await axios.get(`my_Api/getuser/${myDecodedToken.id}`).then((res) => {

          setCurrentUser(res)

          // if (res.data !== null) {

          //   navigate('/profile')
          // }
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
          {isLoginPage || payPage ? null : <SideBar />}
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/payment" element={<StripePage />} />


            {/* </Routes> */}

            {/* <SideBar> */}


            {/* <Routes> */}



            <Route path="/profile" element={<UserProfile />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/userhome" element={<UserHomePage />} />
            <Route path="/navbar" element={<SideBar />} />
            <Route path="/search/:username" element={<SearchUser />} />
            <Route path="/messenger" element={<Messenger />} />
          </Routes>
          {/* </SideBar> */}

        </PostContext.Provider>
      </UserContext.Provider>


    </>
  );
}

export default App;   
