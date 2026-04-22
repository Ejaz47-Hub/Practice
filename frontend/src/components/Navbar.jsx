import {useNavigate} from "react-router-dom"
import axiosInstance from "../api/axiosInstance"
import React from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = async() =>{
    try {
     await axiosInstance.post('/logout')
    } catch (error) {
      console.log(error);
    }finally{
      localStorage.removeItem("token");
      navigate('/')
    }
  }
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "white"
    }}>
      
    
    </nav>
  )
}

export default Navbar