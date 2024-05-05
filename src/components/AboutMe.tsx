"use client"
import React from 'react'
import Image from 'next/image'


export default function AboutMe() {
   return (
      <>
         <div className='grid grid-cols-1 sm:grid-cols-2 sm:mt-[40px] mt-[20px]'>
            <div className='flex items-center justify-center'>
               <Image
                  src="/images/dev.webp"
                  alt="dev image"
                  width={500}
                  height={500}
               />
            </div>
            <div className='sm:ps-10 pt-[10px] sm:pt-0'>
               <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold text-center sm:text-left '><span className='bg-gradient-to-r from-[#8200fc] to-white bg-clip-text text-transparent'>About Me</span> </h1>
               <p className='text-[#ffffff] mt-[20px] text-[15px] sm:text-lg mb-6 lg:text-[15px] text-left'>I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, HTML, CSS, Java, Spring boot, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
               </p>
            </div>
         </div>
      </>
   )
}
