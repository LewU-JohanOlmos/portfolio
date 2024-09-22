import React from 'react';
import { Divider } from "@nextui-org/react";

function ProjectsCard(props) {
    return (
        <a target='_blank' rel="noreferrer" href={props.url}>
            <div className='bg-[#6b2d2d] rounded-xl shadow-2xl group overflow-hidden hover:scale-105 duration-200'>
                <div className='bg-[#441d1d] p-8 rounded-t-xl'>
                    <img className='group-hover:scale-150 duration-1000' alt={props.alt} src={props.image}/>
                </div>
                <div className='text-[#FDFFFC] px-5 pb-8'>
                    <p className='pt-5 font-medium text-2xl'>{props.title}</p>
                    <Divider className='my-1'/>
                    <p className='text-xs'>{props.description}</p>
                </div>
            </div>
        </a>
    )
}

export default ProjectsCard