import React from 'react'
import msg from './Message.module.css';


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={msg.avatarBlock}>
                <img className={msg.avatarImg}
                     src={props.avatar}
                     alt=""/>
            </div>
            <div className={msg.messageBuble}>
                <div className={msg.nameContainer}>{props.name}</div>
                <div>
                    <span className={msg.messageText}>{props.message}</span>
                    <span className={msg.timeIndicator}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
