import React, { useState } from 'react'
import {logo,logo2} from '../assets'
import './NavBar.css'
const NavBar = () => {
  const [toggle,setToggle]=useState(false);
  return (
    <div>
      <div className='mt-3 px-3 flex justify-between text-white'>
        
        <div className='flex'>
           <img src={logo} className='h-[30px] w-[30px] mt-1.5 rounded-full'/>

           <img src={logo2} className='h-[30px] w-[100px] px-3 mt-1.5'/>
           {/* <h1 className=' pin2 text-[30px] mx-2 underline  decoration-2 font-semibold'>Pin2</h1> */}
        </div>
        <div className='hidden md:flex lg:flex text-purple-600 items-end ml-auto'>
          <ul className='flex flex-row w-full'>
            <li className='menuItem transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer duration-300'>
                <a href="/#home">Home</a>
            </li>
            <li className='menuItem transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer'>
                <a href="/#aboutme">About Me</a> 
            </li>
            <li className='menuItem transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer'>
                <a href="/#skills">Skills</a>
            </li>
            <li className='menuItem transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer'>
                <a href="/#companies">Companies</a>
            </li>
            {/* <li className='mr-4 transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer'>Potfolio</li> */}
            <li className='menuItem transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer'>
                <a href="/#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      
        {/* menubar */}
              <div className='flex flex-col items-end'>
                {!toggle?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                onClick={()=>setToggle(true)}
                viewBox="0 0 24 24" stroke-width={1.5} 
                stroke="currentColor" class="w-6 h-6 cursor-pointer md:hidden">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              onClick={()=>setToggle(false)}
              viewBox="0 0 24 24" stroke-width="1.5" 
              stroke="currentColor" class="w
              -6 h-6 cursor-pointer float-right">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              }
              {
                toggle?
                <ul className='flex absolute flex-col mt-8 bg-slate-700 p-2 rounded-md text-sm opacity-1'>
                    <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>
                        <a href="/#home">Home</a>
                    </li>
                    <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>
                        <a href="/#aboutme">About Me</a>
                    </li>
                    <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>
                        <a href="/#skills">Skills</a>
                    </li>
                    {/* <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>Portfolio</li> */}
                    <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>
                        <a href="/#companies">Companies</a>
                    </li>
                    <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>
                        <a href="/#contact">Contact Us</a>
                    </li>
                </ul>
                :null
              }
              </div>
      </div>
    </div>
  )
}

export default NavBar
