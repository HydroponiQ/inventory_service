'use client';

import { useAuth } from '@/utils/authContext';
import { useJsonOutput } from '@/utils/jsonOutputContext';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Link from 'next/link';

const Yield: React.FC = () => {
    const { setJsonOutput } = useJsonOutput();
    const { id_farmer } = useAuth();
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([]);

        const getItems = async () => {
            if (!id_farmer) return;
            
            const res = await fetch(`/api/yield?id_farmer=${id_farmer}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
    
            if (!res.ok) {
                console.log('Error fetching items');
                return;
            }
            const data = await res.json();
            setItems(data);
            setJsonOutput(data);
        }

        getItems();
    }, [id_farmer]);
    
    return (
        <div className='relative bg-white min-h-screen flex flex-col items-center'>
            <Navbar currentUrl='/yield'/>       
            <div className='flex flex-wrap w-[298px] mt-[90px]'>
                {items && 
                    items.map((item: any, key: number) => (
                    <div key={key} className='h-[187px] w-[137px] mr-3 mb-3 bg-[#F2F2F2] rounded-[20px] text-black relative flex-col justify-center items-center' style={{ border: '1.5px solid #f2f2f2', boxShadow: '2px 2px 2px rgba(98, 98, 98, 0.13)' }}>
                        <div className='w-[119.92px] h-[98.03px] bg-[#e6e5e5] mx-auto mt-3.5 rounded-[10px]' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={item.image} alt="" style={{maxWidth:'100%', height:'100%'}}/>
                        </div>
                        <div className='text-center font-bold mt-1 text-[#3B5A5C] ' style={{ fontSize: '14px' }}>{item.name}</div>
                        <div className='flex text-center justify-center'>
                            <div className='mr-1' style={{ fontSize: '10px' }}>Items:</div>
                            <div style={{ fontSize: '10px' }}>{item.amount}</div>
                        </div>
                        <div className='mx-auto mt-2 pt-1 w-[65.48px] h-[17.1px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-[9px]' style={{ fontSize: '8px', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Link href={{ pathname: '/updateyield', query: { item: JSON.stringify(item) } }}>
                                Update
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-4 h-[35px] w-[175px] text-white bg-[#3B5A5C] rounded-[23px] mb-10' style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href="/addyield">
                    Add New Item
                </Link>
            </div>
        </div>
    );
};

export default Yield;