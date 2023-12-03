import Link from 'next/link';

const Login: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-[#67989B] flex flex-col items-center justify-center">
          <div className="bg-[#FAFAFA] w-[290.9px] h-[274.77px] rounded-[20px]">
            <div className="mt-2 flex items-center justify-end mr-2">
              <Link href={"/landingpage"}>
                <img src="/icons/close.png" alt="" />
              </Link>
            </div>
            <div className="text-center text-[20px] text-[#3B5A5C]" style={{fontWeight: 700}}>Login</div>
            <div className="flex flex-col items-center justify-center my-3 mt-5">
              <input 
                type="email"
                placeholder='Email'
                className='rounded-[10px] w-[240px] h-[34px] pl-3 border-[1px] border-[#E2E2E2] text-[12px] text-black' 
                style={{fontWeight: 400}}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <input 
                type="password"
                placeholder='Password'
                className='rounded-[10px] w-[240px] h-[34px] pl-3 border-[1px] border-[#E2E2E2] text-[12px] text-black' 
                style={{fontWeight: 400}}
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-7">
              <button className='w-[175px] h-[35px] text-white text-[11px] bg-[#3B5A5C] rounded-[23px]' style={{fontWeight: 700}}>Login</button>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <div className="text-[8px] text-[#3B5A5C] flex">
                dont have an account?
                <Link href="/register">
                  <div className='mx-[2px]' style={{fontWeight: 700}}> Signup</div>
                </Link>
                now
              </div>
            </div>
          </div>
        </div>
    );
}

export default Login;