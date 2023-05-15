import React from 'react'
import { skill } from './../assets'
import { AppText, skillsList, workDetail } from './../Constants'

const Skills = () => {
  return (
    <div className='mt-10' id="skills">
      <div className='flex flex-row justify-center items-center h-[90px] bg-indigo-950 w-full rounded-full'>
        <img src={skill} className="w-[60px] hover:animate-bounce "/>
        <h1 className='text-[28px] md:text-[38px] font-semibold text-white'>{AppText.Skills}<span className='text-purple-600'>{AppText.Experties}</span></h1>
        </div>

        <div className='flex flex-col md:flex-row  justify-evenly md:px-0 mt-10 px-16'>
            <div className='grid grid-cols-4 md:grid-cols-4 gap-9 items-center md:pr-24 lg:odd:border-r lg:even:border-r lg:even:last:border-none'>
                {skillsList.map((item, index)=>(
                    <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                    p-3 rounded-full' >
                        <img src={item.icon} 
                        className="w-[60px]"/>
                    </div>
                ))}
            </div>
            <div className='flex mt-9 flex-col justify-center md:mt-0 lg:mt-0 md:px-0 px-12'>
                        {workDetail.map((item,index)=>(
                            <div className='flex flex-row mb-6 '>
                                <div className='mr-10 font-bold text-orange-500'>
                                    <h2>{item.year}</h2>
                                </div>
                                <div>
                                    <h3 className='font-bold w-full text-white'>{item.position}</h3>
                                    <h3 className='font-thin text-[15px] text-gray-400'>{item.compnayName}</h3>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    </div>
  )
}

export default Skills
