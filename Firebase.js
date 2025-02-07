import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDMTABbV_h0RcEnVkXVNjd4gYFqU6XxVFc",
  authDomain: "netflix-4b14b.firebaseapp.com",
  projectId: "netflix-4b14b",
  storageBucket: "netflix-4b14b.firebasestorage.app",
  messagingSenderId: "439150012608",
  appId: "1:439150012608:web:8ca38f098de95b7b3ea525"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try{
        const res= await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            authProvider:'local',
            email,
        })

    }catch(error){
        console.log(error)
        toast(error.error.code.split('/')[1].split(0).join(' '))
    }

}
const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)

        
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split(0).join(' '))
        
    }
}
const logout=async()=>{
    signOut(auth)

}
export {auth,db,login,signup,logout};