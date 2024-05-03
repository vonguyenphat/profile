import React from 'react'

export default function MySkills() {
   return (
      <>
         <div className='mt-[10px] sm:mt-[30px]'>
            <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold text-center'>
               <span className='bg-gradient-to-r from-[#8200fc] to-white bg-clip-text text-transparent'>  My skills</span>
            </h1>
            <div className='text-white flex justify-center items-center flex-wrap gap-[30px]'>
               <div className=' max-w-[400px] w-[400px] bg-[#181818] p-[10px] h-[400px] rounded-[30px]'>
                  <h1 className='mb-4 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-[550] text-center text-[#9e5eda]'>Frontend Development</h1>
                  <div>
                     
                  </div>
               </div>
               <div className=' max-w-[400px] w-[400px] bg-[#181818] p-[20px] h-[400px] rounded-[30px]'>
                  <h1 className='mb-4 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-[550] text-center text-[#9e5eda]'>Frontend Development</h1>
                  <div></div>
               </div>
               <div className=' max-w-[400px] w-[400px] bg-[#181818] p-[20px] h-[400px] rounded-[30px]'>
                  <h1 className='mb-4 text-xl sm:text-xl lg:text-2xl lg:leading-normal font-[550] text-center text-[#9e5eda]'>Frontend Development</h1>
                  <div></div>
               </div>
            </div>
         </div>
      </>
   )
}
