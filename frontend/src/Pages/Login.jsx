import React from 'react'
import axiosInstance from '../api/axiosInstance.js'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const [formData,SetFormData] = useState({username:"",password:""})
  const [Error,Seterror] = useState("")
  const [loading,SetLoading] = useState(false)

  useEffect(()=>{
    if (localStorage.getItem("token"))
      navigate('/notes')
  },[])

  const handleChange = (e) =>{
      SetFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    SetLoading(true)
    Seterror("")
    try {
      const response = await axiosInstance.post('/login', formData)
      localStorage.getItem("token",response.data.token)
      navigate('/notes')
    } catch (error) {
      Seterror(error.response?.data?.message || "Login Failed")
    }finally{
      SetLoading(false)
    }
  }
  return (
    <div>Login</div>
  )
}

export default Login