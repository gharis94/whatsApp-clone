import React, { useEffect, useState } from 'react';
import './Message.css'
import {Avatar,IconButton} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import {useParams} from 'react-router-dom'
import {getMessage} from '../../utils/firebase/firebase';

const Message = () => {
    const [input,setInput]=useState('');
    const {roomID} = useParams();
    const sendMessage=(e)=>{
        e.preventDefault();
        console.log('hello')
        setInput('')
    }
    const handleChange=(e)=>{
        setInput(e.target.value)
    };

    useEffect(()=>{
        const fn = async()=>{
            const rsp = await getMessage(roomID)
        }
        fn()
    },[])

  return (
    <div className='main'>
        <div className='header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${roomID}.svg`}/>
            <div className='info'>
                <h3>{roomID}</h3>
                <p>Last seen</p>
            </div>
            <div className='header-right'>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>    
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>    
                </IconButton>
            </div>
        </div>
        <div className='body'>
            <p className='chat-message'>
            
            <span className='chat-name'>gharis</span>
            Chat
            <span className='time'>
                {new Date().getUTCHours()}
            </span>
            </p>

            <p className='chat-message chat-reciever'>
            
            <span className='chat-name'>gharis</span>
            Chat
            <span className='time'>
                {new Date().getUTCHours()}
            </span>
            </p>
            
        </div>
        <div className ='footer'>
            <IconButton>
                <InsertEmoticonIcon/>
            </IconButton>
            <form>
                <input value={input} onChange={(e)=>handleChange(e)} placeholder='Type Message' type='text'/>
                <button type='submit' onClick={()=>sendMessage()}>
                    <SendIcon/>
                </button>
            </form>
            
            <IconButton>
                <MicIcon/>
            </IconButton>
            
        </div>

    </div>
  )
}

export default Message