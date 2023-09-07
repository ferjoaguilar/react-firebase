import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../utils/firebase';
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

  const auth = getAuth(app)

  const navigate = useNavigate()

  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    if(user){
      console.log("Bienvenido a la ruta protegida");
    }else {
      console.log("Ve devuelta a hacer login");
      navigate('/login')
    }
   })  
  }, [])
  


  return (
    <h1 className='text-white'>DASHBOARD RUTA PROTEGIDA</h1>
  )
}

export default Dashboard