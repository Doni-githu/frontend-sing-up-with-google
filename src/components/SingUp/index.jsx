import React from 'react'
import { Link } from "react-router-dom"
export default function Login() {
    const googleAuth = () => {
        window.open(
            'http://localhost:8000/auth/google/callback',
            '_self'
        )
    }
    return (
        <div className='w-50 mx-auto mt-5 text-center'>
            <h1>Sing Up</h1>
            <form onSubmit={(e) => e.preventDefault()} className='d-flex flex-column align-items-center gap-2'>
                <input type="email" className='form-control' placeholder='Email' />
                <input type="password" className='form-control' placeholder='Password' />
                <button className='btn btn-outline-success'>Sing up</button>
            </form>
            <p className='text'>or</p>
            <button className='btn btn-outline-secondary' onClick={googleAuth}>Sing up with Google</button>
            <p className='text'>
                Already have ? <Link to={'/singup'}> Sing in</Link>
            </p>
        </div>
    )
}
