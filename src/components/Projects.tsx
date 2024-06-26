import React from 'react'
import ProjectCarousel from './ProjectCarousel'

export default function Projects() {
   return (
      <>
         <div className='mt-[10px] sm:mt-[30px] flex flex-col items-center'>
            <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold text-center'>
               <span className='bg-gradient-to-r from-[#8200fc] to-white bg-clip-text text-transparent'>Projects</span>
            </h1>
            <ProjectCarousel/>
         </div>
      
      </>
   )
}
