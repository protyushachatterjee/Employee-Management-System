import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user, setUser] = useState('')
 const [loggedInUserData, setLoggedInUserData] = useState('')
 const [userData, setUserData]= useContext(AuthContext)
  
 useEffect(() => {

   const loggedInUser= localStorage.getItem('loggedInUser');
  if(loggedInUser){
    const userData= JSON.parse(loggedInUser);
   setUser(userData.role)
   setLoggedInUserData(userData.data)
  }
 }, [])
 

const handleLogin=(email, password)=>{
  if(email == 'admin@me.com' && password== "123"){
    setUser("admin")
    localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}))
  }
  else if(userData){
    const employee= userData.find((e)=>email == e.email && e.password==password)
    if(employee){           
      setUser("employee")
      setLoggedInUserData(employee)
    }
    localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data: employee}))
  }
  else{
    alert("Invalid Credentials");
  }
}


  return (
    <>
    

    {!user ? <Login handleLogin={handleLogin}/> : ""}
    {user== "admin"? <AdminDashBoard changeUser={setUser}/> : (user == "employee" ? <EmployeeDashBoard data={loggedInUserData} changeUser={setUser}/> : null)}
    </>
  )
}

export default App