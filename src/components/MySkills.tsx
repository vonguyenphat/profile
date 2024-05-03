import React from 'react'
import { BadgeCheck } from "lucide-react"



export default function MySkills() {
   return (
      <>
         <div className='mt-[10px] sm:mt-[30px]'>
            <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold text-center'>
               <span className='bg-gradient-to-r from-[#8200fc] to-white bg-clip-text text-transparent'>My skills</span>
            </h1>
            <div className='text-white flex justify-center items-center flex-wrap gap-[30px] '>
               <div className=' max-w-[400px] w-[400px] bg-[#181818] p-[10px] rounded-[30px] pb-[30px]'>
                  <h1 className='mb-4 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-[550] text-center text-[#9e5eda]'>Frontend Development</h1>
                  <div className='grid grid-rows-4 grid-flow-col px-[30px] pt-[20px]'>
                     {
                        listFrontend.map((skill) => <RenderSkills key={1} skill={skill} />)
                     }
                  </div>
               </div>
               <div className=' max-w-[400px] w-[400px] bg-[#181818] p-[20px] rounded-[30px] pb-[30px]'>
                  <h1 className='mb-4 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-[550] text-center text-[#9e5eda]'>Frontend Development</h1>
                  <div className='grid grid-rows-4 grid-flow-col px-[30px] pt-[20px]'>
                     {
                        listBackend.map((skill) => <RenderSkills key={1} skill={skill} />)
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}


const listFrontend = [
   'HTML', 'CSS', 'JavaScript', 'Tailwind', 'React', 'NextJs'
]
const listBackend = [
   'Node JS', 'MongoDB', 'Spring Boot', 'MySQL', 'Redis'
]
function RenderSkills({ skill = 'HTML' }) {
   return (

      <div className='flex gap-[20px] mt-[10px] items-center justify-start'>
         <BadgeCheck color='#8200fc' />
         <h1 className='font-[600]'>{skill}</h1>
      </div>
   )
}