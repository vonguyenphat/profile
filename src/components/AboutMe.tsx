"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const TAB_DATA = [
   {
      title: "Skills",
      id: "skills",
      content: (
         <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>Express</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Java</li>
            <li>Spring boot</li>
         </ul>
      ),
   },
   {
      title: "Education",
      id: "education",
      content: (
         <ul className="list-disc pl-2">
            <li>Duy Tan University</li>
         </ul>
      ),
   },
   {
      title: "Certifications",
      id: "certifications",
      content: (
         <ul className="list-disc pl-2">
            <li>Empty</li>
         </ul>
      ),
   },
];

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
               <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold text-center sm:text-left'>About Me</h1>
               <p className='text-white text-base sm:text-lg mb-6 lg:text-xl text-justify tracking-[1px]'>I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, HTML, CSS, Java, Spring boot, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
               </p>
            </div>
         </div>
      </>
   )
}
