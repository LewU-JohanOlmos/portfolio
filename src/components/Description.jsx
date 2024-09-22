import React from 'react';

function Description() {
    return (
        <section className='text-[#1D1D1D] bg-[#FDFFFC] w-full px-6 lg:px-0 flex justify-center items-end'>
            <div className='max-w-[1044px] py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <img src='/images/myself.jpg' alt='Me' className='rounded-full max-h-[400px]'/>
                    </div>
                    <div>
                        <p className='text-4xl font-bold text-[#6B2D2D]'>Johan Olmos (Zavala)</p>
                        <p className='text-xl mb-4'>Founder & CEO of Astrobie LLC</p>
                        <p className='text-sm'>My biggest passion is innovation and creating products, fueled by 
                            my obsession with attention to detail. I spend most of my time finding better ways to 
                            approach problems, striving to tackle them in the best way possible. I enjoy working 
                            with people because I always have something to learn from them, and sharing my 
                            knowledge is always enjoyable.</p>
                        <p className='text-sm mt-3'>I founded Astrobie LLC to drive positive change. With a diverse 
                            team from over four countries, our goal is to create meaningful impact in people's lives 
                            and develop innovative products that enhance how we interact with technology. I am 
                            dedicated to empowering my team and achieving success together.</p>
                        <a href='mailto:johanolmoszavala@lewisu.edu'><button className='text-[#FDFFFC] bg-[#6B2D2D] 
                        rounded-full px-5 py-2 hover:bg-[#441d1d] duration-200 mt-8'>Email Me</button></a>
                        <a href='https://astrobie.com' target='_blank' rel="noreferrer"><button className='text-[#FDFFFC] 
                        bg-[#6B2D2D] rounded-full px-5 py-2 hover:bg-[#441d1d] duration-200 mt-8 ml-2'>Visit Astrobie</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Description