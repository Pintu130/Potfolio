import React from 'react'

const SectionHeading = ({firstTitle,secondTitle}) => {
  return (
   <div className='flex'>
     <h1 className='text-[28px] md:text-[40px] font-semibold text-white py-6 lg:py-4'>{firstTitle}
        <span className='text-purple-600 '>{secondTitle}</span></h1> 
   </div>
  )
}

export default SectionHeading