import React, { useEffect, useState,useContext } from 'react';
import './SideBar.css';
import {Avatar,IconButton} from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Chat from '../Chat/Chat';
import { Outlet } from 'react-router-dom';
import { userContext } from '../../Context/userContext';
import { roomContext } from '../../Context/roomContext';

const SideBar = () => {
    const {user} = useContext(userContext);
    const {rooms} = useContext(roomContext) 
   
  return (
      <>
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar src={user?.photoURL}/>
                <div className='header-right'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='sidebar-search'>
                <div className='search-container'>
                    <SearchIcon/>
                    <input type='text' placeholder='search here'/>
                </div>
            
            </div>
            <div className='sidebar-chat'>
                <Chat addNewChat={'a'} />
                {
                    rooms.length && rooms.map(chatname=><Chat  chatname={chatname} />)
                }
            
            </div>
        </div>
        <Outlet/>
    </>
    
  )
}

export default SideBar;