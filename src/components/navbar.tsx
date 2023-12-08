'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from "@/components/sidebar";

interface Navbar {
    currentUrl: string;
}

const Navbar: React.FC<Navbar> = ({ currentUrl }) => {
    const [sidebar, setSidebar] = useState(false);

    const handleMenuClick = () => {
        setSidebar(!sidebar);
    }

    const getImage = () => {
        if (currentUrl === "/homepage") {
            return '/images/logo_navbar.svg';
        } else if (currentUrl === "/inventory") {
            return '/images/Inventory.svg';
        } else if (currentUrl === "/yield") {
            return '/images/Yield.svg';
        }
    }

    return (
        <>
            <div className="bg-[#67989B] w-screen h-[67.7px] fixed top-0 left-0 right-0 items-center z-10">
                <div className='flex w-screen h-full items-center justify-between mt-[2px]'>
                    <div className='mr-auto'/>
                    <Link href="/homepage">
                        <img className="ml-10" src={getImage()} alt="" />
                    </Link>
                    <button className='ml-auto mr-4 cursor-pointer mt-[-5px]' onClick={handleMenuClick}>
                        <img src="/icons/Menu.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className={`flex fixed justify-end w-screen h-screen z-20 transition-transform ease-in-out duration-500 ${sidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                <Sidebar setSidebar={setSidebar}/>
            </div>
        </>
    );
}

export default Navbar;
