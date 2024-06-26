import React from 'react'
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import FormContract from './FormContract';
export default function Contract() {

   return (
      <>
         <div className='mt-[10px] sm:mt-[30px] mx-[3px] sm:mx-[20px] grid grid-cols-1 sm:grid-cols-2'>
            <div className='sm:ps-5'>
               <h1 className='text-white mb-4 text-xl sm:text-xl lg:text-xl lg:leading-normal font-extrabold '>
                  <span>Let&apos;s{" "} Connect</span>
               </h1>
               <p className="text-[#ADB7BE] text-[13px] sm:text-lg mb-6 lg:text-[14px] text-left">
                  I&apos;m{" "}  currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll{" "} try my best to get back to you!
               </p>
               <div className="socials flex flex-row gap-2">
                  <Link href="https://github.com/vonguyenphat" rel="noopener noreferrer" target="_blank">
                     <Image src={GithubIcon} alt="Github Icon" />
                  </Link>
                  <Link href="http://linkedin.com/in/pal03dev" rel="noopener noreferrer" target="_blank">
                     <Image src={LinkedinIcon} alt="Linkedin Icon" />
                  </Link>
               </div>
            </div>

            <div>
               <FormContract />
            </div>
         </div>
      </>
   )
}
