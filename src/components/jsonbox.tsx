'use client'

import React, { useState } from 'react';
import { useJsonOutput } from '@/utils/jsonOutputContext';
import { usePathname } from 'next/navigation'

const JsonBox: React.FC = () => {
  const [showJsonOutput, setShowJsonOutput] = useState(false);
  const { jsonOutput } = useJsonOutput();
  const pathname = usePathname();

  const handleClose = () => {
    setShowJsonOutput(false);
  }

  const isPageBackgroundGreen = (pathname === '/' || pathname === '/login' || pathname === '/register');

  return (
    <div className="fixed bottom-0 right-0 mb-5 mr-5">
      <div 
          className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center text-[10px] text-white z-10"
          onClick={() => setShowJsonOutput(!showJsonOutput)}
          style={{ background: isPageBackgroundGreen ? '#FFFFFF' : '#67989B', color: isPageBackgroundGreen ? '#3B5A5C' : '#FFFFFF' }}
      >
          {'{ json }'}
      </div>
      {showJsonOutput && (
        <div className="fixed flex w-screen h-screen left-0 top-0 justify-center items-center text-[12px]" onClick={handleClose}>
            <div className="fixed w-screen h-screen left-0 top-0 bg-black opacity-30" />
            <div className="w-[90vw] h-[80vh] bg-[#3B5A5C] p-5 rounded-3xl z-10 overflow-auto">
                <pre>
                    {JSON.stringify(jsonOutput, null, 2)}
                </pre>
            </div>
        </div>
      )}
    </div>
  );
};

export default JsonBox;