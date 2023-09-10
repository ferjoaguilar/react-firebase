import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getDatabase, onValue, ref} from 'firebase/database'
import app from '../utils/firebase';
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

  const auth = getAuth(app)
  const database = getDatabase(app)

  const [messages, setMessages] = useState()
  const [userData, setUserData] = useState()

  let arrayData;

  // Read data in realtime
  const getRealTimeData = async () => {
    const data = await ref(database, 'chats')
    await onValue(data, (snapshot) => {
      const data = snapshot.val()
      arrayData = Object.values(data)
      console.log(arrayData);
      setMessages(arrayData)
    })
  }



  const navigate = useNavigate()

  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    if(user){
      console.log("Bienvenido a la ruta protegida");
      setUserData(user)
      console.log("USER DATA", userData?.email);
    }else {
      console.log("Ve devuelta a hacer login");
      navigate('/login')
    }
  })  
  
  
}, [])

  useEffect(() => {
    getRealTimeData()
  }, [arrayData])

  return (

    <>
      <h1 className='text-white'>CREAR SU REALTIME CHAT {userData?.email}</h1>

      {
       messages?.map((item, index) => (
        <div key={index}>
          <h1 className='text-white'>{item.name}</h1>
          <h2 className='text-white'>{item.message}</h2>
        </div>
       )
  )}
    </>



  )
}

export default Dashboard