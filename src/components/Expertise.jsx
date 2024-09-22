import React from 'react';

function Expertise() {
    return (
        <section className='text-[#1D1D1D] bg-[#FDFFFC] w-full px-6 lg:px-0 flex justify-center items-end'>
            <div className='max-w-[1044px]'>
                <p className='font-extrabold text-2xl uppercase text-[#6b2d2d] mb-10 pt-20'>Expertise</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pb-24'>
                    <div className='bg-[#6b2d2d] p-8 text-[#FDFFFC] rounded-xl hover:scale-105 duration-200 hover:bg-[#441d1d]'>
                        <img src='/images/design.svg' alt='UX/UI Design' className='mb-2'></img>
                        <p className='text-2xl mb-2'>UX/UI Design</p>
                        <p className='text-xs'>As a UX/UI designer, I create intuitive, visually appealing interfaces that enhance user 
                            experiences. I focus on user research, wireframing, prototyping, and design, ensuring functional and engaging 
                            solutions that align with user needs.</p>
                    </div>


                    <div className='bg-[#6b2d2d] p-8 text-[#FDFFFC] rounded-xl hover:scale-105 duration-200 hover:bg-[#441d1d]'>
                        <img src='/images/front.svg' alt='Front-end Development' className='mb-2'></img>
                        <p className='text-2xl mb-2'>Front-end Development</p>
                        <p className='text-xs'>As a front-end developer, I build responsive, user-friendly interfaces using HTML, CSS, 
                            JavaScript, React, Tailwind, and more. I focus on seamless user experiences and collaborate with designers 
                            and back-end teams for smooth functionality.</p>
                    </div>


                    <div className='bg-[#6b2d2d] p-8 text-[#FDFFFC] rounded-xl hover:scale-105 duration-200 hover:bg-[#441d1d]'>
                        <img src='/images/marketing.svg' alt='Marketing' className='mb-2'></img>
                        <p className='text-2xl mb-2'>Marketing</p>
                        <p className='text-xs'>In my marketing role, I develop and execute strategies to promote products and services, 
                            focusing on audience engagement, content creation, and analytics to drive brand growth and visibility. With 
                            a passion for innovation, I constantly explore creative approaches to connect with audiences and stay ahead 
                            of industry trends.</p>
                    </div>

                </div>
                <p className='font-extrabold text-2xl uppercase text-[#6b2d2d]'>Technologies Used</p>
            </div>
            
        </section>
    )
}

export default Expertise