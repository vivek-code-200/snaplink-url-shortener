"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path=usePathname();
  return (
    <nav className='text-white flex flex-col md:flex-row gap-3 md:justify-around items-center p-4  bg-[rgb(34,10,28)] fixed top-0 w-full z-10'>
      <div className='Logo font-bold text-xl '>
        <span>Snap</span><span className='text-[rgb(137,36,118)] text-2xl'>Link</span>
      </div>

      <ul className='flex justify-center gap-5  p-1 px-10  rounded-full text-gray-500 text-[15px]  border-y-[1px] border-gray-500'>
        <Link href='/'><li className={`${path==='/'||path==='/shorten'||path==='/shorten/links'?"text-white font-bold":"hover:text-white"}`} >Home</li></Link>
        <Link href='/about'><li className={`${path==='/about'?"text-white font-bold":"hover:text-white"}`} >About</li></Link>
        <Link href='/contact'><li className={`${path==='/contact'?"text-white  font-bold":"hover:text-white"}`}>Contact us</li></Link>
      </ul>

      <Link href="/github" target='_blank'><button className=' max-[361px]:text-xs hidden items-center md:gap-2 gap-1 md:flex cursor-pointer mr-6'><Image alt='github symbol' className='invert-50' width={18} height={18} src="/github.svg" /> Github</button></Link>
    </nav>
  )
}

export default Navbar
