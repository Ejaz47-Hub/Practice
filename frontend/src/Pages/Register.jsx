import React from 'react'
import { useState } from 'react'
import axiosInstance from '../api/axiosInstance.js'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const[formData,setFormData] = useState({username:"",password:""})
    const[error,setError]=useState("");
    const[loading,setLoading] = useState(false)
    const handleChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();

        setLoading(true);
        setError("")
        try {
            const response = await axiosInstance.post('/register', formData)
            localStorage.setItem("token",response.data.token)
            navigate('/notes')
        } catch (err) {
            setError(err.response?.data?.message || "Registration Failed")
        }finally{
            setLoading(false)
        }
    }
  return (
    <div style={{ maxWidth: "200px", margin: "100px auto", padding: "20px" }}>
        <h1>Register</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Enter username' required />
            </div>
            <div>
                <label>Password</label>
                <input type="text" name='password' value={formData.password} onChange={handleChange} placeholder='Enter Password' required />
            </div>
            <button type='submit' disabled={loading}>
                {loading ? "Logging in...": "Login"}

            </button>
        </form>
        <p>
            Dont't have an account?{" "}
            <span onClick={()=>navigate("/register")}
                style={{color:"blue", cursor:"pointer"}}>
                Resgister here
            </span>
        </p>
    </div>
  )
}

export default Register