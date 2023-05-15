import React from 'react'
import { AppText } from '../Constants'
import SectionHeading from '../Shared/SectionHeading'
import { contactusbg, phone } from '../assets'

const Contact = () => {
  return (
    <div id="contact" className='flex flex-col justify-center mt-5'>
        <div className='flex flex-row  justify-center  h-[90px] bg-indigo-950 w-full rounded-full'>
          <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us} className=''/>
          
          <img src={phone} className="w-[70px] ml-4 animate-pulse"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 lg:px-40 md:px-[70px]'>
            <img src={contactusbg} className="w-[400px] mr-5 mt-10 "/>
            <section className="bg-indigo-950 mt-10 rounded-lg">
   <div className="py-8 lg:py-6 px-4 mx-auto max-w-screen-md">
      <form action="#" className="space-y-6">
          <div>
              <label for="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="3" className="block p-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="h-[55px] bg-purple-700 hover:bg-orange-600 w-full text-white px-7 font-medium text-xl transition rounded-lg">Send message</button>
      </form>
  </div>
</section>
        </div>
    </div>
  )
}

export default Contact
