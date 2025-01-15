import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import menulogo from '../assets/menu.gif'
import namelogo2 from '../assets/namelogo2.png'


const Navbar = () => {
    const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-blue-200 px-4 lg:px-0'>
      <div className=' max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
            <a href="#" className='mr-6 flex items-center space-x-2'>
                <img src={namelogo2} alt="" className='w-56 bg-none filter invert-0 transition-transform duration-300 hover:scale-105 hover:filter hover:invert-50' />
            </a>
            <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                <a href="#about" className='transition-colors hover:text-red-600 text-black/100 '>About</a>
                <a href="#projects" className='transition-colors hover:text-red-600 text-black/100 '>Projects</a>
                <a href="#testimonials" className='transition-colors hover:text-red-600 text-black/100 '>Education</a>
                <a href="#contact" className='transition-colors hover:text-red-600 text-black/100 '>Contact</a>
            </nav>
        </div>
        <button className='inline-flex items-center justify-center rounded-md md:hidden bg-gray-200' onClick={()=>setmMobileMenuOpen(!mobileMenuOpen)}>
           <span className='sr-only'>Open main menu</span>
           {mobileMenuOpen ? (
            <X className='h-6 w-6' aria-hidden="true"/>
           ):(
            <img src={menulogo} className='h-6 w-6' aria-hidden="true" alt="Menu "/>
           )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden bg-gray-200'>
            <div className='space-y-1 px-2 pb-3 pt-2 bg-gray-900'>
                <a href="#about" className='block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-50 hover:text-gray-900 '>About</a>
                <a href="#projects" className='block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-50 hover:text-gray-900 '>Project</a>
                <a href="#testimonials" className='block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-50 hover:text-gray-900 '>Education</a>
                <a href="#contact" className='block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-50 hover:text-gray-900 '>Contact</a>
            </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
