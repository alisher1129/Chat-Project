import React from 'react'
import "./ChatOnline.css"

function ChatOnline() {
    return (
        <> <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='' />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Ahsan</span>
            </div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='' />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Jawad</span>
            </div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='' />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Subhan</span>
            </div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='' />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Junaid</span>
            </div>
        </div></>

    )
}

export default ChatOnline