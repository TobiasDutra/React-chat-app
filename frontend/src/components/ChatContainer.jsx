import React, {useEffect, useRef, useState} from "react"
import { ChatLists } from "./ChatLists"
import { InputText } from "./InputText"
import UserLogin from "./UserLogin"
import socketIOClient from "socket.io-client"

const ChatContainer = () => {
    const [user,setUser] = useState(localStorage.getItem("user"))
    const socketio = socketIOClient("http://localhost:3002")
    // const socketio = socketIOClient("https://react-chat-app-tobiasdutra-6y2r.onrender.com/app")
    const [chats, setChats] = useState([])
    
    useEffect(() => {
        socketio.on("chat", (chats) => {
            setChats(chats)
        })

        socketio.on("message", (msg) => {
            setChats((prevChats) => [...prevChats, msg])
        })

        return () => {
            socketio.off("chat")
            socketio.off("message")
        }
    }, []);

    const addMessage = (chat) => {
        const newChat = {
        username: localStorage.getItem("user"),
        message: chat,
        avatar: localStorage.getItem("avatar")
    }
    socketio.emit("newMessage", newChat)
    }

    const Logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("avatar")
        setUser("")
    }

    return (
        <div>
            {user ? (
            <div>
                <div className="chats_header">
                    <h4>
                        Bienvenido {user} 
                    </h4>
                    <p className="chats_logout" onClick={Logout}>
                        <strong>Logout</strong>
                    </p>
                </div>
                <ChatLists chats={chats}/>
                <InputText addMessage={addMessage}/>
            </div>
            ) :
            <UserLogin setUser = {setUser}/>
        }
        </div>
    )
}

export default ChatContainer