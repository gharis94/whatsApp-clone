import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import './Login.css';
import {signIn} from '../../utils/firebase/firebase';
import { userContext } from '../../Context/userContext';


const Login = () => {
    const {updateuser} = useContext(userContext);
    const sign =async() => {
        console.log('c')
         const {user}=await signIn();
         console.log('data',user)
         updateuser(user);
    }
  return (
    <div className='login'>
        <div className='login-container'>
            <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png' />
            <div className='text'>
                <h3>Sign in to WhatsApp</h3>
                <Button onClick={()=>sign()} variant='contained'>Sign In With Google</Button>
            </div>
        </div>
    </div>
  )
}

export default Login