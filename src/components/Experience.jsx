import React from 'react'
import { motion } from 'framer-motion';

function Experience() {
    return (
        <section className='text-[#1D1D1D] bg-[#FDFFFC] w-full px-6 lg:px-0 flex justify-center items-end'>
            <div className='max-w-[1044px] py-20'>
                <p className='font-extrabold text-2xl uppercase text-[#6b2d2d] mb-10'>Education</p>
                <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}
                    viewport={{once: true}}
                    className='border-l-8 border-[#6B2D2D] px-3 my-2'>
                    <p className='text-lg font-semibold'><span className='text-[#6B2D2D] font-bold'>Lewis University </span><span className='font-light text-xs'>(2024 - 2026)</span> - B.S. Cybersecurity</p>
                    <p className='text-[#1d1d1d96] text-sm'>Currently pursuing a degree in Cybersecurity, where I am learning Linux, C programming, and the fundamentals of computer organization. Exploring networks, operating system structures, algorithms, and web development. Engaging in penetration testing and related cybersecurity practices to develop practical skills and understanding of security measures.</p>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}
                    viewport={{once: true}}
                    className='border-l-8 border-[#F9C74B] px-3 my-2'>
                    <p className='text-lg font-semibold'><span className='text-[#033C3F] font-bold'>St. Augustine College </span><span className='font-light text-xs'>(2021 - 2023)</span> - A.A. Application Programmer</p>
                    <p className='text-[#1d1d1d96] text-sm'>Completed a technical degree in Application Programming, where I developed expertise in Python and Django. Designed and implemented web applications, collaborated on team projects, and applied best practices in software development. Enhanced user experiences through responsive web design and optimized application performance.</p>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}
                    viewport={{once: true}}
                    className='border-l-8 border-[#293352] px-3 my-2'>
                    <p className='text-lg font-semibold'><span className='text-[#293352] font-bold'>CBTis 217 </span><span className='font-light text-xs'>(2017 - 2020)</span> - Programming Technician</p>
                    <p className='text-[#1d1d1d96] text-sm'>Earned a degree in Programming Technology, where I gained proficiency in C# and PHP for backend development. Utilized Oracle VirtualBox to create and manage virtual environments, and navigated Linux operating systems to enhance system performance. Developed practical applications and collaborated on projects to strengthen coding skills and technical knowledge.</p>
                </motion.div>
                <div className='flex justify-center mt-20'>
                    <a href='/images/resume.pdf' target='_blank'><button className='bg-[#6b2d2d] text-[#FDFFFC] rounded-full px-5 py-3 hover:bg-[#441d1d] duration-200'>Download Resume</button></a>
                </div>
                <div className='flex justify-center mt-2'>
                    <a href='/resume' className='text-[#1d1d1d8f] underline font-semibold'>Preview online version instead</a>
                </div>
            </div>
        </section>
    )
}

export default Experience