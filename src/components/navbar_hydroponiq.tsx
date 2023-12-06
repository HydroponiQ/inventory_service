import React from 'react';

const NavbarHydroponiq: React.FC = () => {
    return (
        <div className="bg-[#67989B] w-screen h-[67.7px] fixed top-0 left-0 right-0 flex items-center z-10">
            <div className='flex w-screen'>
                <div className='flex ml-[131px]'>
                    <img src="/images/logo_navbar.svg" alt="" />
                </div>
                <div className='ml-auto mr-4 cursor-pointer mt-[5px]'>
                    <img src="/icons/Menu.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default NavbarHydroponiq;
