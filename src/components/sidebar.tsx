import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <div className={`fixed top-0 right-0 h-full w-[254.65px] bg-[#3B5A5C] z-20`}>
            <div className='ml-[220px] mt-3'>
                <img src="/icons/close.png" alt="" />
            </div>
            <div className="flex flex-col items-center justify-between h-full p-4">
                {/* Sidebar Logo */}
                <img src="/images/logo_navbar.svg" alt="Sidebar Logo" className="mt-2 mb-10 ml-3" />

                {/* Sidebar Links */}
                <div className='my-3'>
                    <Link href="/homepage">
                        <div className="text-white text-lg">
                            Home
                        </div>
                    </Link>
                </div>

                <img src="/icons/Line.png" alt="" />

                <div className='my-3'>
                    <Link href="/inventory">
                        <div className="text-white text-lg">
                            Inventory
                        </div>
                    </Link>
                </div>

                <img src="/icons/Line.png" alt="" />

                <div className='my-3'>
                    <Link href="/yield">
                        <div className="text-white text-lg">
                            Yield
                        </div>
                    </Link>
                </div>

                <img src="/icons/Line.png" alt="" />

                {/* Logout Button */}
                <div className="mt-auto mb-[40px]">
                    <Link href={"/"}>
                        <button>
                            <img src="/icons/logout.png" alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
