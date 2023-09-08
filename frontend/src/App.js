import Registration from './components/SignUp/Registration';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './components/Login/UserLogin';
import HomePage from './components/Home/HomePage';
import StripePage from './components/Stripe/StripePage';

function App() {


  

  return (



    <>
      


      <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/payment" element={<StripePage />} />

      </Routes>

    </>
  );
}

export default App;   
