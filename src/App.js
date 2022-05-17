import React,{useState,useContext} from 'react';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Message from './Components/Message/Message';
import Login from './Components/Login/Login';
import {Routes,Route} from 'react-router-dom'
import { userContext } from './Context/userContext';

function App() {
  const {user} = useContext(userContext);
  
  return (
    user?(<Login/>):(
      <div className="App">
      <div className='app-body'>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<SideBar />}>
            <Route path='room/:roomID' element={<Message/>}/>
          </Route>
            
        </Routes>
        
        
      </div>
    </div>
    )
    
  );
}

export default App;
