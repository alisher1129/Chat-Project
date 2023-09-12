import Registration from './components/SignUp/Registration';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './components/Login/UserLogin';
import HomePage from './components/Home/HomePage';
import StripePage from './components/Stripe/StripePage';
import UserPage from "./components/User/UserLogin"

function App() {


  

  return (



    <>
      


      <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/payment" element={<StripePage />} />
        <Route path="/user" element={<UserPage />} />

      </Routes>

    </>
  );
}

export default App;   
