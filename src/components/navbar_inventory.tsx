import React from 'react';
import Link from 'next/link';

const NavbarInventory: React.FC = () => {
    return (
        <nav className="bg-[#67989B] w-screen h-[67.7px] fixed top-0 left-0 right-0 flex items-center">
            <div className='flex w-screen'>
                <div className='flex ml-[147px]'>
                    <img src="/images/Inventory.svg" alt="" />
                </div>
                <div className='mb-0.5 ml-auto mr-4 cursor-pointer'>
                    <Link href={"/"}>
                        <img src="/icons/Menu.svg" alt="" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavbarInventory;
