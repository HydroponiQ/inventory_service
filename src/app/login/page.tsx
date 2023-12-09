'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useJsonOutput } from '@/utils/jsonOutputContext';
import { database } from '@/utils/database';
import Link from 'next/link';

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogin, setFailedLogin] = useState(false);
  const { setJsonOutput } = useJsonOutput();

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setFailedLogin(true); 
      return;
    }

    try {
      const { data: loginRes } = await database.auth.signInWithPassword({ email: email, password: password })
      if (!loginRes) throw Error('No data returned from server!');

      const session = loginRes.session;
      const user = loginRes.user;

      if (!session || !user) {
        setFailedLogin(true);
        return;
      }

      setJsonOutput(loginRes.session);
      router.push('/homepage')
    } catch (error) {
        return console.error(error);
    }
  }

  return (
      <div className="w-screen h-screen bg-[#67989B] flex flex-col items-center justify-center">
        <div className="bg-[#FAFAFA] w-[290.9px] h-[274.77px] rounded-[20px]">
          <div className="mt-2 flex items-center justify-end mr-2">
            <Link href={"/"}>
              <img src="/icons/close.svg" alt="" />
            </Link>
          </div>
          <div className="text-center text-[20px] text-[#3B5A5C]" style={{fontWeight: 700}}>Login</div>
          <div className="flex flex-col items-center justify-center my-3 mt-5">
            <input 
              type="email"
              name='email'
              id='email'
              placeholder='Email'
              className='rounded-[10px] w-[240px] h-[34px] pl-3 border-[1px] text-[12px] text-black' 
              onChange={(e) => setEmail(e.target.value)}
              style={{fontWeight: 400, borderColor: failedLogin ? 'red' : '#E2E2E2'}}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <input 
              type="password"
              name='password'
              id='password'
              placeholder='Password'
              className='rounded-[10px] w-[240px] h-[34px] pl-3 border-[1px] text-[12px] text-black' 
              onChange={(e) => setPassword(e.target.value)}
              style={{fontWeight: 400, borderColor: failedLogin ? 'red' : '#E2E2E2'}}
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-7">
            <button 
              className='w-[175px] h-[35px] text-white text-[11px] bg-[#3B5A5C] rounded-[23px]'
              style={{fontWeight: 700}}
              onClick={handleLogin} 
            >Login</button>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <div className="text-[8px] text-[#3B5A5C] flex">
              dont have an account?
              <Link href="/register">
                <div className='mx-[2px]' style={{fontWeight: 700}}> Signup</div>
              </Link>
              now
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;