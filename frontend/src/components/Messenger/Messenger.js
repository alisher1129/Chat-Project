import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import { io } from "socket.io-client"
import ChatOnline from "../ChatOnline/ChatOnline"
import Conversation from "../Conversations/Conversation"
import Message from "../Message/Message"
import "./Messenger.css"




function Messenger() {
    
    const [conversation, setConversation] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessages, setNewMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState({ _id: null });
    const socket = useRef();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const scrollRef = useRef();




    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        })
    }, []);
   
    // console.log("arrival message", arrivalMessage)
    // console.log("current  Chat ", currentChat)

    useEffect(() => {
        arrivalMessage && currentChat.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat]);


    useEffect(() => {
        if (currentUser?.data?._id !== null) {
            socket.current.emit("addUser", currentUser?._id);
            socket.current.on("getUsers", users => {
                // console.log(users);
                setOnlineUsers(users);
            })
        }
    }, [currentUser]);







    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


  


    // console.log("chat ", currentChat)

    useEffect(() => {
        const getMessages = async () => {
            try {
                if (currentChat) {
                    const res = await axios.get(`http://localhost:4000/getmessage/${currentChat?._id}`);
                    // console.log("check for set messages", res)
                    // console.log(res)
                    setMessages(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getMessages();
    }, [currentChat])

    // console.log("messages", messages)

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (currentUser) {
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
        } else {
            console.log("currentUser is null");
        }

        

    }
    useEffect(() => {
        const getConversation = async () => {
            try {
                // if (currentUser) {
                    const res = await axios.get(`http://localhost:4000/conversation/${currentUser?.data?._id}`);
                    // console.log("dekho pehly", currentUser.data._id)
                    // console.log("conversation", res)
                    setConversation(res.data)

                // }
            } catch (error) {
                console.log(error);
            }
        }
        getConversation();
    }, [currentUser._id])

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

export default Messenger