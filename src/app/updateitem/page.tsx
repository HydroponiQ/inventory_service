'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useJsonOutput } from '@/utils/jsonOutputContext';
import { useRouter } from 'next/navigation';

const UpdateItem: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const itemString = searchParams.get('item');
    
    let item = null;
    if (itemString) {
        try {
            item = JSON.parse(itemString);
        } catch (error) {
            console.error('Error parsing item:', error);
        }
    }

    const { setJsonOutput } = useJsonOutput();
    const name = item.name;
    const [amount, setAmount] = useState(item.amount);
    const id_farmer = item.id_farmer;

    const handleSubmit = async () => {
        const res = await fetch(`/api/material/${name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_farmer: id_farmer,
                amount: amount,
            })
        })

        if (!res.ok) {
            console.log('Error creating item');
            return;
        }

        const data = await res.json();
        setJsonOutput(data);
        router.push('/inventory')
    }

    return (
        <div className='bg-white w-screen h-screen flex flex-col items-center'>
            <nav className="bg-[#67989B] w-screen h-[67.7px] fixed top-0 left-0 right-0 flex items-center">
                <div className='flex mt-1 w-screen justify-center'>
                    <img src="/images/logo_updateitem.svg" alt="" />
                </div>
            </nav>
            <div className='text-[#3b5a5c] mt-[90px]' style={{fontSize:'24px', fontWeight: '800'}}>{name}</div>
            <div className='w-[294px] h-[257px] bg-[#efefef] mx-[49px] mt-[20px] rounded-[10px]' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={item.image} alt="" style={{maxWidth:'100%', height:'100%'}}/>
            </div>
            <div className='flex items-center mt-[30px] mr-3 gap-1' style={{fontSize:'22px'}}>
                <button 
                    className='w-[35px] h-[35px] mr-2 rounded-[10px] text-[#3B5A5C] text-center'
                    onClick={() => {
                        let prevAmount = amount;
                        let newAmount = prevAmount - 1;

                        if (newAmount < 0) return;
                        setAmount(newAmount);
                    }}
                >
                    <img src="/icons/remove_circle.svg" alt="" className='w-[35px] h-[35px] mr-2'/>
                </button>
                <input
                    value={amount}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (isNaN(parseInt(value))) return;
                        if (parseInt(value) > 99999) return;
                        setAmount(parseInt(e.target.value))
                    }}
                    className='w-[100px] h-[35px] rounded-[10px] text-[#3B5A5C] text-center'
                    style={{fontSize:'22px', borderBottom:'2px solid #e2e2e2'}}
                />
                <button 
                    className='w-[35px] h-[35px] rounded-[10px] text-[#3B5A5C] text-center'
                    onClick={() => {
                        let prevAmount = amount;
                        let newAmount = prevAmount + 1;

                        if (newAmount > 99999) return;
                        setAmount(newAmount);
                    }}
                >
                    <img src="/icons/add_circle.svg" alt="" className='w-[35px] h-[35px] ml-2'/>
                </button>
            </div>
            <button 
                className='mx-[109px] mt-[40px] px-[60px] py-[9px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-3xl' 
                style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                onClick={handleSubmit}
            >
                Update
            </button>
            <Link href={'/inventory'}>
                <button className='text-[#9a9a9a] mt-[12px]' style={{ fontSize: '14px'}}>Cancel</button>
            </Link>
        </div> 
    )
};

export default UpdateItem;