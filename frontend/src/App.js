import Registration from './components/SignUp/Registration';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './components/Login/UserLogin';
import HomePage from './components/Home/HomePage';
function App() {
  return (



    <>
      <Routes>
      <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<UserLogin />}/>
        <Route path="/signup" element={<Registration />}/>

      </Routes>
      
      </>
  );
}

export default App;   
