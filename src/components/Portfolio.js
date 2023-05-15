import React, { useEffect, useState } from 'react'
import { AppText, portfolio } from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import {robo} from './../assets/index'
const Portfolio = ({}) => {

    const [portfolioList,setPortfolioList]=useState([]);
    const [portfolioListOrg,setPortfolioListOrg]=useState([]);

    useEffect(()=>{
        
        setPortfolioList(portfolio);
        setPortfolioListOrg(portfolio)
    },[])
    const filterPortfolio=(type)=>{
        if(type=='All')
        {
            setPortfolioList(portfolioListOrg);
        }
        else{
           const result= portfolioListOrg.filter(item=>item.type==type);
           setPortfolioList(result)
           console.log(result) 
        }
    } 

    const Github=(()=>{
        // window.scroll({top:400, left:0, behavior:'smooth'})
        window.location.href="https://github.com/pintu130"
         })


  return (
    <div className='mt-24 flex justify-center flex-col'>
        <div className='flex flex-row px-6 md:px-0 items-center justify-center h-[90px] bg-indigo-950 w-full rounded-full'>
        <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
        <img src={robo} className="w-[60px] ml-5 animate-bounce"/>
        </div>
        <div className='flex flex-row justify-evenly gap-2 px-4  mt-10 md:px-72'>
            <button onClick={()=>filterPortfolio('All')} className='border-purple-600 border-2 hover:border-white
            text-purple-600 hover:text-white
            hover:bg-orange-500 p-1 px-4 rounded-md
            hover:ring-white'>All</button>
             <button  onClick={()=>filterPortfolio('website')}  className='border-purple-600 border-2 hover:border-white
            text-purple-600 hover:text-white
            hover:bg-orange-500 p-1 px-4 rounded-md
            hover:ring-white '>Web App</button>
             <button onClick={()=>filterPortfolio('ui/ux')} className='border-purple-600 border-2 hover:border-white
            text-purple-600 hover:text-white
            hover:bg-orange-500 p-1 px-4 rounded-md
            hover:ring-white'>UI/UX</button>
             
        </div>
        <div className='grid grid-cols-2 lg:gap-16 items-center content-center md:grid-cols-3 lg:grid-cols-3
        md:px-16 lg:px-36 p-4 cursor-pointer' onClick={Github}>
            {portfolioList.map((item,index)=>(
                <div className='p-2 flex flex-col m-2 rounded-lg bg-indigo-950
                transition-all ease-in-out group hover:bg-indigo-900'>
                    <img src={item.imageUrl} className="h-[180px] object-cover rounded-lg"/>
                    <h1 className='text-[14px] text-white group-hover:text-orange-600 mt-5 text-center font-bold'>{item.title}</h1>
                    <h1 className='text-[12px] mt-2 text-gray-500 group-hover:text-gray-400 px-6 pb-3'>{item.desc}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Portfolio