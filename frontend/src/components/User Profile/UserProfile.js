import React from 'react'
import { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext';

function UserProfile() {
const {currentUser, setCurrentUser} = useContext(UserContext);

useEffect(() => {
  console.log(currentUser);
}, [currentUser, setCurrentUser]);

  // const ReceiveData = useContext(MyContext)
  return (
    // <div><h3>Hello {ReceiveData}</h3></div>
    
    <><div><h3>{currentUser}</h3></div></>
  )
}

export default UserProfile