import React,{createContext, useState, useEffect} from 'react';
import {getData} from '../utils/firebase/firebase';
const INITIAL_STATE={
    rooms:[]
}


export const roomContext=createContext(INITIAL_STATE);



export const RoomProvider=({children})=>{
    const [rooms,setRooms] =useState([]);

    useEffect(()=>{
        const get=async()=>{
            const rsp=await getData();
            setRooms(rsp);
        }
        get();
    },[rooms])
    return(
        <roomContext.Provider value={{
            rooms
        }}>
            {children}
        </roomContext.Provider>
    )
};