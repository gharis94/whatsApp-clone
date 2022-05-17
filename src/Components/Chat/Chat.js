import React,{useState,useEffect} from 'react';
import './Chat.css';
import {Avatar} from '@mui/material';
import {Link} from 'react-router-dom';
import {addChat} from '../../utils/firebase/firebase';

const Chat = ({addNewChat,chatname}) => {
    const [seed,setSeed] = useState('');
    
    useEffect(()=>{
        let num = Math.floor(Math.random()*5000)
        setSeed(num);
    },[])
    const createChat =()=>{
        const roomName = prompt("New Chat Name");
        if(roomName){
            console.log('a')
            addChat(roomName)
        }
    }
  return !addNewChat ? (
      <Link to={`/room/${chatname.name}`}>
        <div className ='chat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${chatname.name}.svg`}/>
        <div className='info'>
            <h2>{chatname.name}</h2>
            <p>Last message..</p>
        </div>    
    </div>
      </Link>
    
  ):
  (<div onClick={()=>createChat()} className='chat'>
    <h2>Add New Chat</h2>
  </div>)
}

export default Chat;