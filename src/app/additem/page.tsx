import React from 'react';
import Link from 'next/link';

const UpdateItem: React.FC = () => {
    return (
        <div className='bg-white w-screen h-screen text-black'>test
            <nav className="bg-[#67989B] w-screen h-[67.7px] fixed top-0 left-0 right-0 flex items-center">
                <div className='flex w-screen'>
                    <div className='flex ml-[148px]'>
                        <img src="/images/logo_additem.svg" alt="" />
                    </div>
                    <div className='mb-0.5 ml-auto mr-4 cursor-pointer'>
                        <Link href={"/"}>
                            <img src="/icons/Menu.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='w-[294px] h-[257px] flex flex-col bg-[#d9d9d9] mx-[49px] mt-[90px] rounded-[10px]' style={{opacity:'0.6', justifyContent: 'center', alignItems: 'center' }}>
                <div><img src="/icons/file_upload.svg" alt="" className='w-[40px] h-[35px]'/></div>
                <div className='' style={{fontSize:'10px'}}>Upload photo</div>
            </div>

            <div className='ml-[50px] pl-2 pt-2 mt-[30px] h-[35px] w-[294px] rounded-lg text-[#cdcdcd]' style={{fontSize:'12px', border:'2px solid #e2e2e2'}}>Item Name</div>

            <div className='flex mt-[30px] mx-[135px]' style={{fontSize:'22px'}}>
                <img src="/icons/remove_circle.svg" alt="" className='w-[35px] h-[35px] mr-2'/>100
                <img src="/icons/add_circle.svg" alt="" className='w-[35px] h-[35px] ml-2'/>
            </div>
            <button className='mx-[118px] mt-[45px] px-[60px] py-[8px] items-center text-center text-[#F2F2F2] bg-[#3B5A5C] rounded-3xl' style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Save</button>
            <button className='text-[#9a9a9a] mt-[12px] mx-[170px]' style={{ fontSize: '14px'}}>Cancel</button>
        </div>
    );
};

export default UpdateItem;