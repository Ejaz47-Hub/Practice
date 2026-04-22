import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Notes from './Pages/Notes.jsx'
import ProtectedRoutes from './Routes/ProtectedRoutes.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Login/>}>login</Route>
      <Route path='/register'element={<Register/>}>register</Route>
      <Route path='/notes' element={<ProtectedRoutes><Notes/></ProtectedRoutes>}>notes</Route>
    </Routes>
  )
}

export default App