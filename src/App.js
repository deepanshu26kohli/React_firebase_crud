import React, { useState, useEffect } from 'react'
import {db} from './firebase.config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
const App = () => {
  const [name,setName] = useState("")
  const [age,setAge] = useState(0)
  const [users,setUsers] = useState([])
  const usersCollectionRef = collection(db, 'users')
  const createUser = async () => {
        await addDoc(usersCollectionRef, {Name: name, Age: age} )
  }
  const updateUser = async (id,age) => {
        const userDoc = doc(db,"users",id)
        const newFields = {Age: age+1}
        await updateDoc(userDoc,newFields)
  }
  const DeleteUser = async (id) => {
    const userDoc = doc(db,"users",id)
    await deleteDoc(userDoc);
}
  useEffect(()=>{
    const getUsers = async()=>{
          const data = await getDocs(usersCollectionRef)
          setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }
    getUsers()
  },[])
  return (
    <div>
      <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}} />
      <input number="text" placeholder='Age' onChange={(e)=>{setAge(e.target.value)}} />
      <button onClick={createUser}>Create User</button>
      {
        users.map((user)=>{
          return <div>
            <h1>Name: {user.Name}</h1>
            <h1>Age: {user.Age}</h1>
            <button onClick={()=>DeleteUser(user.id)}>Delete User</button>
            <button onClick={()=>{updateUser(user.id,user.Age)}}>Increase Age</button>
          </div>
        })
      }
    </div>
  )
}

export default App

