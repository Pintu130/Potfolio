import React from 'react'
import './../components'
import { laptop, wave } from '../assets'
import {aboutSection,AppText} from '../Constants'

const AboutMe = () => {
  return (
    <div className='mt-28' id='aboutme'>
      <img src={wave} className='w-full absolute'/>
      <img src={laptop} className='absolute mt-[-110px] w-[230px] md:mt-[-130px] md:w-[290px]'/>
      <div className='h-[390px] bg-indigo-950 w-full' >
        <h1 className='text-[50px] font-semibold text-white text-center pt-24 md:pt-14'>{AppText.About} <span className='text-orange-500' >{AppText.Me}</span></h1>
        <h1 className='text-center text-white mt-10 px-10 md:px-60 lg:px-80'><span className=''>{AppText.des}</span>{AppText.aboutMeDescripion}</h1>
      </div>
      <div className='flex flex-col mt-[-80px] md:mt-[-110px] md:flex-row justify-around items-center text-center px-28'>
        {
          aboutSection.map((item,index)=>(
            <div className='group hover:bg-indigo-950 p-7 rounded-2xl w-[300px]'>
              <img src={item.image} className='h-[230px] object-cover rounded-md '/>
              <div className='pb-[40px]'>
                  <h2 className=' text-white group-hover:text-orange-500 font-bold pt-5'>{item.title}</h2>
                  <h2 className='text-[14px] text-gray-400 group-hover:text-gray-300'>{item.desc}</h2>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AboutMe
