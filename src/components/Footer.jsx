import React from 'react'

function Footer() {
    return (
        <section className='text-[#FDFFFC] bg-[#6b2d2d] w-full px-6 md:px-0 flex justify-center items-end py-4'>
            <div className='max-w-[1044px]'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='text-left text-xs'>
                        <p>Portfolio by Johan Olmos</p>
                    </div>
                    <div className='text-right text-xs'>
                        Copyright All Rights Reserved.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer