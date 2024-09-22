import React from 'react';
import { ProjectsData } from './data';
import ProjectsCard from './ProjectsCard';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <section className='text-[#1D1D1D] bg-[#FDFFFC] w-full px-6 lg:px-0 flex justify-center items-end'>
            <div className='max-w-[1044px] py-20'>
                <p className='font-extrabold text-2xl uppercase text-[#6b2d2d] mb-10'>Featured Projects</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {ProjectsData.map((item) => (
                        <ProjectsCard id={item.id} title={item.title} description={item.description} image={item.image} url={item.url}/>
                    ))}
                </div>
                <div className='flex flex-col justify-center items-center mt-20'>
                    <p className='text-[#1D1D1D] font-semibold mb-4'>Want to explore more?</p>
                    <Link to={"/projects"}><button disabled className='bg-[#6b2d2d] text-[#FDFFFC] rounded-full px-5 py-3 hover:bg-[#441d1d] duration-200'>More</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Projects