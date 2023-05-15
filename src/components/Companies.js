import React from 'react'
import { AppText, CompanyImage } from './../Constants';
import SectionHeading from '../Shared/SectionHeading'

const Companies = () => {
  return (
    <div id='companies' className='bg-indigo-950 p-5'>
      <div className='flex justify-center items-center flex-col'>
      <SectionHeading firstTitle={ AppText.CompaniesI} secondTitle={AppText.WorkedFor} />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:ml-24 lg:ml-24 m-3'>
      {CompanyImage.map((item,index)=>(
                <div className='m-3 transition-all ease-in-out hover:scale-110'>
                    <img src={item.imageUrl} className="h-[80px]" />
                </div>
            ))} 
      </div>
      </div>
    </div>
  )
}

export default Companies
