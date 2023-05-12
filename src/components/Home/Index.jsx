import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
export default function Home({ user }) {
  console.log(user)
  return (
    <>
      {user ? <>
        <div className='card'>
          <img src={user.picture} />
          <p>{user.name}</p>
          <div>
            <label htmlFor="email">Email</label>
            <input className='form-control' id='email' value={user.email} disabled />
          </div>
        </div>
      </> : <p>Loading...</p>}
    </>
  )
}
