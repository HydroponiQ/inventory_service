'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useJsonOutput } from '@/utils/jsonOutputContext';
import { database } from '@/utils/database';
import Link from 'next/link';

const Register: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setJsonOutput } = useJsonOutput();

  const handleRegister = async () => {
    try {
      const { data } = await database.auth.signUp({ email: email, password: password })

      const user = data.user;

      if (user) {
          const { data: user_data } = await database.from('farmer').upsert([{ username: username, email: user.email, uid: user.id }]).select('*');
          setJsonOutput(user_data);
      }
    } catch (error) {
        return console.error(error);
    }

    router.push('/homepage')
  }

  return (
    <div className="w-screen h-screen bg-[#67989B] flex flex-col items-center justify-center">
      <div className="bg-[#FAFAFA] w-[290.9px] h-[331.83px] rounded-[20px]">
        <div className="mt-2 flex items-center justify-end mr-2">
          <Link href={"/"}>
            <img src="/icons/close.svg" alt="" />
          </Link>
        </div>
        <div className="text-center text-[20px] text-[#3B5A5C]" style={{fontWeight: 700}}>Create Account</div>
        <div className="flex flex-col items-center justify-center mt-7 my-3">
          <input 
            type="username"
            placeholder='Username'
            className='rounded-[10px] w-[240px] h-[34px] pl-3 border-[1px] border-[#E2E2E2] text-[12px] text-black' 
            onChange={(e) => setUsername(e.target.value)}
            style={{fontWeight: 400}}
          />
        </div>
        <div className="flex flex-col items-center justify-center my-3">
          <input 
            type="email"
            placeholder='Email'
            className='rounded-[10px] w-[240px] h-[34px] pl-3 border-[1px] border-[#E2E2E2] text-[12px] text-black' 
            onChange={(e) => setEmail(e.target.value)}
            style={{fontWeight: 400}}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <input 
            type="password"
            placeholder='Password'
            className='rounded-[10px] w-[240px] h-[34px] pl-3 border-[1px] border-[#E2E2E2] text-[12px] text-black' 
            onChange={(e) => setPassword(e.target.value)}
            style={{fontWeight: 400}}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <button 
            className='w-[175px] h-[35px] text-white text-[11px] bg-[#3B5A5C] rounded-[23px]' 
            style={{fontWeight: 700}} 
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-3">
          <div className="text-[8px] text-[#3B5A5C] flex">
            already have an account? 
            <Link href="/login">
              <div className='mx-[2px]' style={{fontWeight: 700}}> Login </div>
            </Link>
            to
          </div>
          <div className="text-[8px] text-[#3B5A5C]">your account</div>
        </div>
      </div>
    </div>
  );
}

export default Register;