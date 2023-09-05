import Registration from './components/SignUp/Registration';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './components/Login/UserLogin';
function App() {
  return (



    <>
      <Routes>

        <Route path="/userlogin" element={<UserLogin />}/>
        <Route path="/userregister" element={<Registration />}/>

      </Routes>
      
      </>
  );
}

export default App;
