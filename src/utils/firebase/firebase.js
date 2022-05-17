// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {collection,query,getDocs,docs,doc,addDoc,serverTimestamp, getFirestore} from 'firebase/firestore';
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdyEcvn3qN1PBIjsULYDBA1pn4aIRcG54",
    authDomain: "whatsapp-clone-53170.firebaseapp.com",
    projectId: "whatsapp-clone-53170",
    storageBucket: "whatsapp-clone-53170.appspot.com",
    messagingSenderId: "974991189393",
    appId: "1:974991189393:web:0a0eedf1422bce58992630"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);

const db = getFirestore();

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:'select_account',
})

export const signIn = async()=>{
    const rsp=await signInWithPopup(auth,googleProvider)
    console.log(rsp)
    return rsp
}



export default db;

export const getData=async()=>{
    const collectionRef = collection(db,'rooms');
    
    const q = query(collectionRef)
    const querySnapShot =await getDocs(q);
    const rooms = querySnapShot.docs.reduce((acc,doc,idx)=>{
       acc[idx]=doc.data() 
        return acc
    },[])
    
    return rooms

};

export const addChat = async(data)=>{
    const collectionRef = collection(db,'rooms'); 
    
    try{
        const docRef = await addDoc(collectionRef,{
           name:data,
           createdAt: serverTimestamp()
        });
        console.log('added',docRef)

    }catch(error){
        console.log(error)
    }
};


export const getMessage =async(roomID)=>{
    const collectionRef = collection(db,'rooms')
    const q = query(collectionRef);
    
    const querySnapShot = await getDocs(q);
    
}                   