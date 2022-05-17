import React,{createContext, useState} from 'react';

const INITIAL_STATE={
    user:null,

}



export const userContext = createContext(INITIAL_STATE);


export const UserProvider=({children})=>{
    const [user,setUser] =useState(null);

    const update=(u)=>{
        console.log('aa')
        console.log(u.photoURL)
        setUser(u);
    }
    return(
        <userContext.Provider value={{
            user:user,
            updateuser:update 
        }}>
            {children}
        </userContext.Provider>
    )

};