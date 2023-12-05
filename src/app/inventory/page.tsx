import React from 'react';
import Link from 'next/link';
import NavbarInventory from '@/components/navbar_inventory';

const Inventory: React.FC = () => {
    
    return (
        <div className='relative bg-white w-screen h-[1000] flex flex-col'>
            <NavbarInventory/>            
                <div className='flex'>
                    <div className='h-[190px] w-[140px] mt-[100px] ml-[40px] bg-[#F9F9F9] rounded-[10px] text-black relative' style={{ border: '1.5px solid #f2f2f2', boxShadow: '2px 2px 2px rgba(98, 98, 98, 0.13)' }}>
                        <div className='w-[112px] h-[98px] bg-[#D9D9D9] mx-3.5 mt-3.5 rounded-[10px]' style={{ opacity: '0.3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="/images/plant.svg" alt="" style={{ opacity: '1' }} />
                        </div>
                        <div className='text-center font-bold text-[#3B5A5C] mt-1' style={{ fontSize: '14px' }}>Item name</div>
                        <div className='text-center' style={{ fontSize: '10px' }}>Items: jumlah</div>
                        <div className='ml-[37px] mt-[4px] pt-1 w-[65px] h-[18px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-[9px]' style={{ fontSize: '8px', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Update</div>
                    </div>
                    <div className='h-[190px] w-[140px] mt-[100px] ml-[30px] bg-[#F9F9F9] rounded-[10px] text-black relative' style={{ border: '1.5px solid #f2f2f2', boxShadow: '2px 2px 2px rgba(98, 98, 98, 0.13)' }}>
                        <div className='w-[112px] h-[98px] bg-[#D9D9D9] mx-3.5 mt-3.5 rounded-[10px]' style={{ opacity: '0.3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="/images/plant.svg" alt="" style={{ opacity: '1' }} />
                        </div>
                        <div className='text-center font-bold text-[#3B5A5C] mt-1' style={{ fontSize: '14px' }}>Item name</div>
                        <div className='text-center' style={{ fontSize: '10px' }}>Items: jumlah</div>
                        <div className='ml-[37px] mt-[4px] pt-1 w-[65px] h-[18px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-[9px]' style={{ fontSize: '8px', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Update</div>
                    </div>
                </div>
                <div className='mt-[20px] flex'>
                    <div className='h-[190px] w-[140px] ml-[40px] bg-[#F9F9F9] rounded-[10px] text-black relative' style={{ border: '1.5px solid #f2f2f2', boxShadow: '2px 2px 2px rgba(98, 98, 98, 0.13)' }}>
                        <div className='w-[112px] h-[98px] bg-[#D9D9D9] mx-3.5 mt-3.5 rounded-[10px]' style={{ opacity: '0.3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="/images/plant.svg" alt="" style={{ opacity: '1' }} />
                        </div>
                        <div className='text-center font-bold text-[#3B5A5C] mt-1' style={{ fontSize: '14px' }}>Item name</div>
                        <div className='text-center' style={{ fontSize: '10px' }}>Items: jumlah</div>
                        <div className='ml-[37px] mt-[4px] pt-1 w-[65px] h-[18px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-[9px]' style={{ fontSize: '8px', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Update</div>
                    </div>
                    <div className='h-[190px] w-[140px] ml-[30px] bg-[#F9F9F9] rounded-[10px] text-black relative' style={{ border: '1.5px solid #f2f2f2', boxShadow: '2px 2px 2px rgba(98, 98, 98, 0.13)' }}>
                        <div className='w-[112px] h-[98px] bg-[#D9D9D9] mx-3.5 mt-3.5 rounded-[10px]' style={{ opacity: '0.3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="/images/plant.svg" alt="" style={{ opacity: '1' }} />
                        </div>
                        <div className='text-center font-bold text-[#3B5A5C] mt-1' style={{ fontSize: '14px' }}>Item name</div>
                        <div className='text-center' style={{ fontSize: '10px' }}>Items: jumlah</div>
                        <div className='ml-[37px] mt-[4px] pt-1 w-[65px] h-[18px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-[9px]' style={{ fontSize: '8px', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Update</div>
                    </div>
                </div>
                <div className='mt-[20px] flex'>
                    <div className='h-[190px] w-[140px] ml-[40px] bg-[#F9F9F9] rounded-[10px] text-black relative' style={{ border: '1.5px solid #f2f2f2', boxShadow: '2px 2px 2px rgba(98, 98, 98, 0.13)' }}>
                        <div className='w-[112px] h-[98px] bg-[#D9D9D9] mx-3.5 mt-3.5 rounded-[10px]' style={{ opacity: '0.3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="/images/plant.svg" alt="" style={{ opacity: '1' }} />
                        </div>
                        <div className='text-center font-bold text-[#3B5A5C] mt-1' style={{ fontSize: '14px' }}>Item name</div>
                        <div className='text-center' style={{ fontSize: '10px' }}>Items: jumlah</div>
                        <div className='ml-[37px] mt-[4px] pt-1 w-[65px] h-[18px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-[9px]' style={{ fontSize: '8px', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Update</div>
                    </div>
                    <div className='h-[190px] w-[140px] ml-[30px] bg-[#F9F9F9] rounded-[10px] text-black relative' style={{ border: '1.5px solid #f2f2f2', boxShadow: '2px 2px 2px rgba(98, 98, 98, 0.13)' }}>
                        <div className='w-[112px] h-[98px] bg-[#D9D9D9] mx-3.5 mt-3.5 rounded-[10px]' style={{ opacity: '0.3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="/images/plant.svg" alt="" style={{ opacity: '1' }} />
                        </div>
                        <div className='text-center font-bold text-[#3B5A5C] mt-1' style={{ fontSize: '14px' }}>Item name</div>
                        <div className='text-center' style={{ fontSize: '10px' }}>Items: jumlah</div>
                        <div className='ml-[37px] mt-[4px] pt-1 w-[65px] h-[18px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-[9px]' style={{ fontSize: '8px', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Update</div>
                    </div>
                </div>
                <div className='mt-[40px] mx-[95px] h-[45px] pt-2.5 text-white bg-[#3B5A5C] justify-center text-center rounded-[23px] mb-4'>Add New Item</div>
            </div>
    );
};

export default Inventory;