import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Conversation.css"

function Conversation({ conversation, currentUser }) {

    const [user, setUser] = useState(null);
    // const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser.data._id);
        // console.log("friendId", friendId);
        const getUser = async () => {
            const res = await axios.get(`http://localhost:4000/getuser/${friendId}`);
            // console.log("try", res.data)
            // setUser(res.data, setLoaded(true));
            setUser(res.data);

        }
        getUser();
    }, [currentUser, conversation])



















    return (
        <div className="conversation" >

            <img className="conversationImg"
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                alt='' />
            <span className='conversationName' >{user ? user.username : ''}</span>


        </div>
    )
}

export default Conversation