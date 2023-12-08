'use client'

import Router from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const handle = async() => {
    const res = await fetch(`/api/login/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // username: 'justin',
        email: 'justin@email.com',
        password: 'justin'
      })
    })

    const data = await res.json()
    console.log(data)
  }

  const handle2 = async() => {
    const res = await fetch(`/api/check-login/`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const data = await res.json()
    console.log(data)
  }

  const handle3 = async() => {
    const res = await fetch(`/api/logout/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const data = await res.json()
    console.log(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button className='bg-blue-500 text-white font-bold' onClick={handle}>TEST</button>
        <button className='bg-blue-500 text-white font-bold' onClick={handle2}>TEST2</button>
        <button className='bg-blue-500 text-white font-bold' onClick={handle3}>TEST2</button>
      </div>
    </main>
  )
}
