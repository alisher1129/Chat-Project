import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Conversation.css"

function Conversation({ conversation, currentUser }) {

    const [user, setUser] = useState(null);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser.data._id);
        console.log("friendId", friendId);
        const getUser = async () => {
            const res = await axios.get(`http://localhost:4000/getuser/${friendId}`);
            console.log("try", res.data)
            setUser(res.data, setLoaded(true));

        }
        getUser();
    }, [currentUser, conversation])



















    return (
        <div className="conversation" >

            <img className="conversationImg"
                src='https://media.licdn.com/dms/image/D4D03AQFsy-qbPchffQ/profile-displayphoto-shrink_800_800/0/1671038455077?e=2147483647&v=beta&t=W44P_qN4Jv0CoiopgShfiR0hEuLEt8EI-p4hRSk43Mo'
                alt='' />
            <span className='conversationName' >{user ? user.username : ''}</span>


        </div>
    )
}

export default Conversation