import React from 'react';
import Link from 'next/link';

const UpdateItem: React.FC = () => {
    return (
        <div className='bg-white w-screen h-screen text-black'>test
            <nav className="bg-[#67989B] w-screen h-[67.7px] fixed top-0 left-0 right-0 flex items-center">
                <div className='flex w-screen'>
                    <div className='flex ml-[132px]'>
                        <img src="/images/logo_updateitem.svg" alt="" />
                    </div>
                </div>
            </nav>
            <div className='ml-[128px] text-[#3b5a5c] mt-[90px]' style={{fontSize:'24px', fontWeight: '800'}}>Item Name</div>
            <div className='w-[294px] h-[257px] bg-[#efefef] mx-[49px] mt-[40px] rounded-[10px]' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/plant.svg" alt="" className='w-[102px] h-[160px]'/>
            </div>
            <div className='flex mt-[40px] mx-[135px]' style={{fontSize:'22px'}}>
                <img src="/icons/remove_circle.svg" alt="" className='w-[35px] h-[35px] mr-2'/>100
                <img src="/icons/add_circle.svg" alt="" className='w-[35px] h-[35px] ml-2'/>
            </div>
            <div className='flex-col'>
                <button className='mx-[109px] mt-[40px] px-[60px] py-[9px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-3xl' style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Update</button>
                <Link href={'/inventory'}>
                    <button className='text-[#9a9a9a] mt-[12px] mx-[170px]' style={{ fontSize: '14px'}}>Cancel</button>
                </Link>
            </div>
        </div> 
    )
};

export default UpdateItem;