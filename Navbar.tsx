import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';
const Navbar = () => {
  return (
<>

    <div className='container pt-5 w-[1170px] mx-auto text-white'> 
    <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'><Link href={'/'}>SHOAIB</Link></div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menuLink'><Link href={'/'}>Home</Link></li>
            <li className='menuLink'><Link href={'/projects'}>Projects</Link></li>
            <li className='menuLink'><Link href={'/skills'}>Skills</Link></li>
            <li className='menuLink'><Link href={'/about'}>About</Link></li>
            <li className='menuLink'><Link href={'/contact'}>Contact</Link></li>
        </ul>
        <AiOutlineMenu className='md:hidden' size={30}/>
    </div>
      
    </div>
</>
  )
}

export default Navbar
