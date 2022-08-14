import { useEffect, useState } from "react";
import { getAuth,signInWithPopup,sendPasswordResetEmail, GoogleAuthProvider, updateProfile,createUserWithEmailAndPassword,onAuthStateChanged,signOut ,signInWithEmailAndPassword} from "firebase/auth";
import firebaseInit from './../components/Authintication/Firebase/FirebaseInit';

firebaseInit()
const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [error,setError]=useState('')
    const auth = getAuth();
    const [isLoading,setIsLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider();
    const [admin,setAdmin] = useState(false)

    // createuser 
    const createUser = (email,password,navigate,name)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = {email,displayName:name}
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name,
                  }).then(() => {
                  }).catch((error) => {
                  });
                  saveUser(email,name,'POST')

                navigate('/')
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false));
        }

    const loginUser = (email,password,location,navigate)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }


    // on auth change 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              } else {
                setUser({})
              }
          setIsLoading(false)
        });
        return ()=> unSubscribe;
    },[])
    // sing in with google 
    const googleSingIn = (location,navigate) =>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                saveUser(user.email,user.displayName,'PUT')

                const destination = location?.state?.from || '/'
                navigate(destination)
                
            }).catch((error) => {
                setError(error.message)
            });

    }

    const ResetPassword = (email)=>{
        sendPasswordResetEmail(auth, email)
            .then(() => {
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false));
    }

    // Logout 
    const Logout = e =>{
        signOut(auth).then(() => {
          }).catch((error) => {
        setError(error.message)
          })
        .finally(()=>setIsLoading(false))

    }

    const saveUser =(email,displayName,method)=>{
        const user =  {email,displayName}
        fetch('https://glacial-sands-19620.herokuapp.com/user',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => data)
    } 

    // admin 
    useEffect(()=>{
        fetch(`https://glacial-sands-19620.herokuapp.com/user/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])


    return {
        user,
        createUser,
        loginUser,
        isLoading,
        Logout,
        error,
        googleSingIn,
        admin,
        ResetPassword
    }
}

export default useFirebase;