import React from "react";

const NotificationMessage = ({ content }: { content: string }) => {

    return <>
        {
            content === '문의해주셔서 감사합니다.' ?
                <div className="notification-container" style={{ backgroundColor: '#20c75b' }}>
                    <p>{content}</p>
                </div> :
                <div className="notification-container">
                    <p>{content}</p>
                </div>
        }
    </>
}

export default NotificationMessage