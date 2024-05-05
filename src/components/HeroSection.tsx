'use client'
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
   return (
      <section>
         <div className='sm:grid grid-cols-1 sm:grid-cols-2 '>
            <div className='flex flex-col items-center sm:block'>
               <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold text-center sm:text-left">
                  <span className="bg-gradient-to-r from-[#8200fc] to-white bg-clip-text text-transparent ">
                     Hello, I&apos;m{" "}
                  </span>
                  <br />
                  <TypeAnimation
                     sequence={[
                        'Võ Nguyễn Phát',
                        1000,
                        'Web Developer',
                        1000,
                        'Mobile Developer',
                        1000
                     ]}
                     wrapper="span"
                     speed={50}
                     style={{ fontSize: '0.7em', display: 'inline-block' }}
                     repeat={Infinity}
                  />
               </h1>
               <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center sm:text-left">
                  Hi
               </p>
               <div>
                  <Link
                     href="/#contact"
                     className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-[#8200fc] hover:bg-slate-200 text-white text-center sm:text-left">
                     Hire Me
                  </Link>
                  <Link
                     download
                     href="./Tuong.pdf"
                     rel="noopener noreferrer" target="_blank"
                     className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#8200fc] hover:bg-slate-800 text-white mt-3 text-center sm:text-left">
                     <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                     </span>
                  </Link>
               </div>
            </div>
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto">
               <Image
                  src="/images/avt_pal03.jpg"
                  alt="hero image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover rounded-full h-[230px] w-[230px] sm:h-[250px] sm:w-[250px] lg:h-[360px] lg:w-[360px]"
                  width={300}
                  height={300}
               />
            </div>
         </div>
      </section>
   )
}
