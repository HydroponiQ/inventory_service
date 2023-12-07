import React from 'react';
import Link from 'next/link';

interface SidebarProps {
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({setSidebar}) => {
    const handleCloseClick = () => {
        setSidebar(false);
    }

    return (
        <div className="h-screen w-[254.65px] bg-[#3B5A5C]">
            <button className='ml-[220px] mt-3' onClick={handleCloseClick}>
                <img src="/icons/close.svg" alt="" />
            </button>
            <div className="flex flex-col items-center justify-between h-full p-4">
                {/* Sidebar Logo */}
                <div>
                    <Link href="/homepage">
                        <img src="/images/logo_navbar.svg" alt="Sidebar Logo" className="mt-2 mb-10 ml-3" />
                    </Link>
                </div>

                {/* Sidebar Links */}
                <div className='my-3'>
                    <Link href="/homepage">
                        <div className="text-white text-lg">
                            Home
                        </div>
                    </Link>
                </div>

                <img src="/icons/line.svg" alt="" />

                <div className='my-3'>
                    <Link href="/inventory">
                        <div className="text-white text-lg">
                            Inventory
                        </div>
                    </Link>
                </div>

                <img src="/icons/line.svg" alt="" />

                <div className='my-3'>
                    <Link href="/yield">
                        <div className="text-white text-lg">
                            Yield
                        </div>
                    </Link>
                </div>

                <img src="/icons/line.svg" alt="" />

                {/* Logout Button */}
                <div className="mt-auto mb-[40px]">
                    <Link href={"/"}>
                        <button>
                            <img src="/icons/logout.svg" alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
