import Registration from './components/SignUp/Registration';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './components/Login/UserLogin';
import HomePage from './components/Home/HomePage';
import StripePage from './components/Stripe/StripePage';
import UserProfile from "./components/User Profile/UserProfile"
import CreatePost from './components/Create Post/CreatePost';
import { UserContext } from './components/Context/UserContext';
import { PostContext } from './components/Context/PostContext';
import GetPost from './components/View/GetPost';
import { useState } from 'react';

function App() {
  const [ currentUser, setCurrentUser] = useState(null);
  const [postId , setPostId] = useState(null);

  return (

    <>
      <UserContext.Provider value={{currentUser, setCurrentUser} }>
      <PostContext.Provider value={{postId, setPostId} }>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/payment" element={<StripePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/UserPost" element={<GetPost />} />
         
        </Routes>
        </PostContext.Provider>
      </UserContext.Provider>

    </>
  );
}

export default App;   
