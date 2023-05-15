import React from 'react'
import { AppText, socialNetwork } from '../Constants'

const Footer = () => {
  return (
    <>
       <div className='bg-gray-800 mt-10 p-20 items-center flex flex-col  px-10 md:px-80 text-white'>
     <div className='flex gap-4'>
        {socialNetwork.map((item,index)=>(
            <div  className='w-12 h-12 text-2xl bg-gray-700 hover:bg-orange-600 rounded-full flex justify-center items-center transition-all'>
                {/* <img src={item.logo} className="w-[40px]"/> */}
                <a href={item.href} target='_blank'>{item.icon}</a>
            </div>
        ))}
        </div>
        <h1 className='text-gray-400 text-[15px] mt-4'>{AppText.copywriteText}</h1>
    </div>
    </>
  )
}

export default Footer
