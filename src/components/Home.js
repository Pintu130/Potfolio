import React,{useState} from 'react'
import { AppText } from '../Constants'
import { homeImage,Resume } from '../assets'
import Typewriter from 'typewriter-effect';
import './Home.css'

const Home = () => {

  function handleClick() {
    window.open(Resume, '_blank');
  }
  return (
    <div className= 'px-4 md:px-16 items-center flex flex-col text-white md:flex-row'>
      <div className='flex w-full flex-row  justify-end'>
      <div className='flex w-full flex-col  items-start content-end'>
      <h1 className='text-[35px] md:text-[40px] font-semibold mt-5 md:-mt-4'><span className='text-orange-400'>{AppText.h}</span>{AppText.hello}</h1>
      <div className='flex'>
      <h1 className='text-[35px] md:text-[40px] font-semibold'> {AppText.Iam } </h1>
      {/* <span className='text-purple-700'>{AppText.pin}</span></h1> */}

      <Typewriter
  options={{
    strings: [AppText.pin, AppText.FrontedDeveloper],
    autoStart: true,
    loop: true,
  }}
/>
</div>
      <h1 className='text-gray-400 text-md mt-3'><span className='text-green-600'>{AppText.des}</span>{AppText.aboutMeDescripion}</h1>
      <button className='bg-purple-700 mt-3 p-2 px-3 transition-all ease-in-out hover:scale-110 hover:text-orange-400 text-white rounded-md' onClick={handleClick}>Resume</button>
      {/* {showImage && <img src={Resume} alt="Your Image" />} */}
      </div>
      </div>
      <div className='w-full flex justify-center '>
      <img src={homeImage} className='w-[320px] mt-10 md:mt-2 md:w-[400px] lg:ml-[120px]'/>
      </div>
    </div>
  )
}

export default Home
