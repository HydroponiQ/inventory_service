'use client'

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/utils/authContext';
import { useJsonOutput } from '@/utils/jsonOutputContext';
import { useRouter } from 'next/navigation';

import { database } from '@/utils/database';

const AddItem: React.FC = () => {
    const { id_farmer } = useAuth();
    const { setJsonOutput } = useJsonOutput();
    const router = useRouter();

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [image, setImage] = useState(null as any);
    const [imageUp, setImageUp] = useState(null as any);
    const imageRef = useRef('' as any);
  
    const handleImageChange = (e : any) => {
      const file = e.target.files[0];
      if (file && file.type.substr(0, 5) === "image") {
        setImage(URL.createObjectURL(file))
        setImageUp(file) 
      }
    };
    
    const handleSubmit = async () => {
        const pict_name = `picture/${id_farmer}-${name}.png` as string
        const { error } = await database.storage.from('items').upload(
            pict_name,
            imageUp,
            {
                contentType: 'image/png',
            }
        )

        var pict_url;
        if (error) {
            console.log(error);
            return;
        } else {
            const { data } = database.storage.from('items').getPublicUrl(pict_name);
            pict_url = data.publicUrl;
        }

        const res = await fetch('/api/material', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                amount: amount,
                image: pict_url,
                id_farmer: id_farmer,
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
        <div className='bg-white w-screen h-screen flex flex-col items-center justify-center'>
            <nav className="bg-[#67989B] w-screen h-[67.7px] fixed top-0 left-0 right-0 flex items-center">
                <div className='flex mt-1 w-screen justify-center'>
                    <img src="/images/logo_additem.svg" alt="" />
                </div>
            </nav>
            <div className='w-[294px] h-[257px] flex flex-col bg-[#e8e8e8] mx-[49px] mt-[90px] rounded-[10px]' style={{justifyContent: 'center', alignItems: 'center' }} onClick={() => imageRef.current.click()}>
                <input type="file" ref={imageRef} onChange={handleImageChange} className="hidden" accept="image/*"/>
                {!image ? (
                    <div>
                        <img src="/icons/file_upload.svg" alt="" className='w-[40px] h-[35px]'/>
                        <div className='text-[#c8c8c8]' style={{fontSize:'11px'}}>Upload photo</div>
                    </div>
                ) : (
                    <img src={image} alt="" className="w-full h-full object-cover object-center"/>
                )}
            </div>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Item Name'
                className='pl-2 mt-[30px] h-[35px] w-[294px] rounded-lg text-[#3B5A5C]' 
                style={{fontSize:'12px', border:'2px solid #e2e2e2'}}
            />
            <div className='flex tems-center mt-[30px] mx-[135px] gap-1' style={{fontSize:'22px'}}>
                <button onClick={() => {
                    let prevAmount = amount;
                    let newAmount = prevAmount - 1;

                    if (newAmount < 0) return;
                    setAmount(newAmount);
                }}>
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
                <button onClick={() => {
                    let prevAmount = amount;
                    let newAmount = prevAmount + 1;

                    if (newAmount > 99999) return;
                    setAmount(newAmount);
                
                }}>
                    <img src="/icons/add_circle.svg" alt="" className='w-[35px] h-[35px] ml-2'/>
                </button>
            </div>
            <button 
                className='mx-[118px] mt-[45px] px-[60px] py-[8px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-3xl' 
                style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                onClick={handleSubmit}
            >
                Save
            </button>
            <Link href={'/inventory'}>
                <button className='text-[#9a9a9a] mt-[12px] mx-[170px]' style={{ fontSize: '14px'}}>Cancel</button>
            </Link>
        </div>
    );
};

export default AddItem;