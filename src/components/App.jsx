import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import SingUp from "./SingUp/index"
import axios from "axios"
import Home from './Home/Index'
export default function App() {
    const [user, setUser] = useState(null)
    const getUer = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/auth/login/success', { withCredentials: true })
            setUser(data.user._json)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUer()
    }, [])
    return (
        <Routes>
            <Route element={<Login />} path='/login' />
            <Route element={<SingUp />} path='/singup' />
            <Route element={<Home user={user} />} path='/' />
        </Routes>
    )
}
