import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';

const HomePage: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <Navbar currentUrl='/homepage' />
            <div className="ml-[30px]">
                <img src="/images/box.svg" alt=""/>
            </div>
            <div className="text-[#3B5A5C] text-[36px] mt-3" style={{fontWeight: 700}}>Hi, User!</div>
            <div className="text-[#67989B] text-[16px]">Keep updated with your farm</div>
            <div className='mt-10'>
                <Link href={"/inventory"}>
                    <button className='w-[175px] h-[35px] text-white text-[11px] bg-[#67989B] rounded-[23px]' style={{fontWeight: 700}}>Inventory</button>
                </Link>
            </div>
            <div className='mt-5'>
                <Link href={"/yield"}>
                    <button className='w-[175px] h-[35px] text-white text-[11px] bg-[#67989B] rounded-[23px]' style={{fontWeight: 700}}>Yield</button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;