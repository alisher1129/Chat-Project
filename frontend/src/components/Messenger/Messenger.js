import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import ChatOnline from "../ChatOnline/ChatOnline"
import Conversation from "../Conversations/Conversation"
import Message from "../Message/Message"
import "./Messenger.css"




function Messenger() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [conversation, setConversation] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessages, setNewMessages] = useState([]);
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    useEffect(() => {
        const getConversation = async () => {
            try {
                if (currentUser) {
                    const res = await axios.get(`http://localhost:4000/conversation/${currentUser?.data._id}`);
                    console.log("dekho pehly", currentUser.data._id)
                    console.log("conversation", res)
                    setConversation(res.data)

                }
            } catch (error) {
                console.log(error);
            }
        }
        getConversation();
    }, [currentUser])


    console.log("chat", currentChat)

    useEffect(() => {
        const getMessages = async () => {
            try {
                if (currentChat) {
                    const res = await axios.get(`http://localhost:4000/getmessage/${currentChat?._id}`);
                    setMessages(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getMessages();
    }, [currentChat])

    console.log("messages", messages)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: currentUser._id,
            text: newMessages,
            conversationId: currentChat._id,
        }
        const receiverId = currentChat.members.find(member => member !== currentUser._id);
        socket.current.emit("sendMessage", {
            senderId: currentUser._id,
            receiverId,
            text: newMessages
        });
        try {
            const sendMessage = await axios.post(`http://localhost:4000/sendmessage`, message);
            setMessages([...messages, sendMessage.data]);
            setNewMessages("");
        } catch (error) {
            console.log(error);
        }

      

        return (
            <>
                <div className="messenger">
                    <div className="chatMenu">

                        <div className="chatMenuWrapper">


                            <input placeholder="Search For Friends" className="chatMenuInput" />

                            {
                                conversation.map((c) => (
                                    <div key={c._id} onClick={() => setCurrentChat(c)}>
                                        <Conversation conversation={c} currentUser={currentUser} />
                                    </div>
                                ))}

                        </div>
                    </div>

                    <div className="chatBox">
                        <div className="chatBoxWrapper">
                            {
                                currentChat ? <>



                                    <div className="chatBoxTop">

                                        {messages.map((m) => (
                                            <div key={m._id} ref={scrollRef}>
                                                <Message message={m} own={m.sender === currentUser._id} />
                                            </div>
                                        ))}
                                    </div>




                                    <div className="chatBoxBottom">
                                        <textarea className="chatMessageInput"
                                            placeholder="Wrtie Something..."
                                            onChange={(e) => setNewMessages(e.target.value)}
                                            value={newMessages}
                                        ></textarea>
                                        <button className="chatSubmitButton"
                                            onClick={handleSubmit}
                                        >Send</button>

                                    </div> </> : <span className='noConversationText'>Open a Conversation to start the Chat.</span>}


                        </div>


                    </div>
                    <div className="chatOnline">
                        <div className="chatOnlineWrapper">
                            <ChatOnline />
                        </div>

                    </div>



                </div>
            </>

        )
    }
}

export default Messenger