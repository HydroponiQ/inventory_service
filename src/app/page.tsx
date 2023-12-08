'use client'

import Router from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const handle = async() => {
    const res = await fetch(`/api/material/add`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Tomat',
        amount: 10,
      })
    })

    const data = await res.json()
    console.log(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button className='bg-blue-500 text-white font-bold' onClick={handle}>TEST</button>
      </div>
    </main>
  )
}
