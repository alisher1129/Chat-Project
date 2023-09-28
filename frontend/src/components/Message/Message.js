import React from 'react'
import "./Message.css"

function Message({own}) {
    return (

        <>
            <div className={own ? "message own": "message"}>

                <div className="messageTop">

                    <img className="messageImg" src='https://media.licdn.com/dms/image/D4D03AQFsy-qbPchffQ/profile-displayphoto-shrink_800_800/0/1671038455077?e=2147483647&v=beta&t=W44P_qN4Jv0CoiopgShfiR0hEuLEt8EI-p4hRSk43Mo' alt='' />
                    <p className="messageText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="messageBottom">1 hour ago</div>


            </div>
        </>

    )
}

export default Message