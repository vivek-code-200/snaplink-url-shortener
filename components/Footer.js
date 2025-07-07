import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-[rgba(255,0,183,0.04)] p-10'>
            <div className='flex md:flex-row flex-col gap-5 md:gap-0'>
                <div>
                    <h1 className='md:px-20 text-gray-400 font-bold'>Important Links</h1>
                    <ul className='flex flex-col gap-1 md:mt-3 mt-2  p-1 md:px-20 rounded-full text-gray-500 md:text-[15px] text-[14px]'>
                        <Link className='w-fit' href='/'><li className='hover:text-gray-400 ' >Home</li></Link>
                        <Link className='w-fit' href='/about'><li className='hover:text-gray-400 ' >About</li></Link>
                        <Link className='w-fit' href='/contact'><li className='hover:text-gray-400 '>Contact us</li></Link>
                        <Link className='w-fit' href='/shorten'><li className='hover:text-gray-400 '>Generate Links</li></Link>
                        <Link className='w-fit' href='/shorten/links'><li className='hover:text-gray-400 '>Your Links</li></Link>
                        <Link className='w-fit' href='/github' target='_blank'><li className='hover:text-gray-400 '>GitHub</li></Link>

                    </ul>
                </div>
                <div className='text-gray-500 md:text-[15px] text-[13px]'>
                    <h1 className=' text-gray-400 font-bold text-base'>Contact</h1>
                    <p className='mt-3 flex gap-3'><Image alt='email symbol' className='invert-50' width={15} height={15} src="/emailsvg.svg" /> vivekkumarsoni7646@gmail.com</p>
                    <p className='mt-1 flex gap-3'><Image alt='github symbol' className='invert-50' width={18} height={1} src="/github.svg" />viv-code-404</p>
                    <p className='mt-1 flex gap-2'><Image alt='call symbol' className='invert-50' width={18} height={18} src="/call.svg" />+91 7646062081</p>
                </div>
            </div>

            <p className='md:text-center text-center mt-8 md:mt-0 text-gray-400 md:text-[13px] text-[12px]'>Copyright &copy;{currentYear} SnapLink  | All rights reserved </p>
            <div className='md:text-center text-center text-gray-400 mt-2 md:text-[13px] text-[12px]'>Made with ❤️ by <span className='text-white font-bold'>viv-code-404</span> </div>
        </div>
    )
}

export default Footer
