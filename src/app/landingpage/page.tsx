import Link from 'next/link';

const LandingPage: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-[#67989B] flex flex-col items-center justify-center">
          <div className='ml-[21px]'>
              <img src="/images/logo.png" alt="" />
          </div>
          <div className='mt-10'>
              <Link href={"/register"}>
                  <button className='w-[175px] h-[35px] text-[#3B5A5C] text-[11px] bg-[#FFFFFF] rounded-[23px]' style={{fontWeight: 700}}>Register</button>
              </Link>
          </div>
          <div className='mt-5'>
              <Link href={"/login"}>
                  <button className='w-[175px] h-[35px] text-[#3B5A5C] text-[11px] bg-[#FFFFFF] rounded-[23px]' style={{fontWeight: 700}}>Login</button>
              </Link>
          </div>
        </div>
    );
}

export default LandingPage;