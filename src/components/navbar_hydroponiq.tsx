import React from 'react';
import Link from 'next/link';

const NavbarHydroponiq: React.FC = () => {
    return (
        <div className="bg-[#67989B] w-screen h-[67.7px] fixed top-0 left-0 right-0 flex items-center">
            <div className='flex w-screen'>
                <div className='flex ml-[131px]'>
                    <img src="/images/logo_navbar.svg" alt="" />
                </div>
                <div className='ml-auto mr-4 cursor-pointer mt-[5px]'>
                    <Link href={"/"}>
                        <img src="/icons/Menu.svg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavbarHydroponiq;