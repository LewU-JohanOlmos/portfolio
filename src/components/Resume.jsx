import React from 'react'

function Resume() {
    return (
        <section className='text-[#1D1D1D] bg-[#F3f4f5] w-full px-6 lg:px-0 flex justify-center items-end'>
            <div className='max-w-[1044px] py-20'>
                <div className='bg-[#FDFFFC] max-w-[800px] h-auto rounded-md p-8 md:p-16'>
                    <p className='uppercase font-bold text-4xl text-center'>Johan Olmos</p>
                    <div className='grid grid-cols-2 text-xs md:grid-cols-3 gap-6 mt-4 text-center'>
                        <a className='text-[#1D64C1]' href='https://linkedin.com/in/johan-olmos-22593b247'>https://linkedin.com/in/johan-olmos-22593b247</a>
                        <a className='text-[#1D64C1]' href='mailto:johanolmoszavala@lewisu.edu'>johanolmoszavala@lewisu.edu</a>
                        <p>Chicago, IL</p>
                    </div>
                    <div className='bg-[#1d1d1d1c] border-t-2 border-b-2 border-[#1D1D1D] mt-4'>
                        <p className='text-center uppercase font-bold'>SUMMARY OF QUALIFICATIONS</p>
                    </div>
                    <ul className='text-sm mx-6 md:mx-10 mb-2'>
                        <li><span className='font-bold'>Communication:</span> Interpersonal, collaboration, and presentation skills with people of diverse backgrounds. Bilingual. </li>
                        <li><span className='font-bold'>Leadership:</span> Managed Astrobie LLC's and led its direction. </li>
                        <li><span className='font-bold'>Research:</span> Analyzed Linux operating systems (Arch distro) in detail. </li>
                    </ul>

                    <div className='bg-[#1d1d1d1c] border-t-2 border-b-2 border-[#1D1D1D] mt-4'>
                        <p className='text-center uppercase font-bold'>EDUCATION</p>
                    </div>
                    <ul className='text-sm mx-6 md:mx-10 mb-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <li><span className='font-bold'>Bachelor of Science in Cybersecurity</span></li>
                            <li>Lewis University, Romeoville, IL</li>
                        </div>
                        <div className='text-left md:text-right'>
                            <li>Expected: May 2026</li>
                            <li>GPA: N/A</li>
                        </div>
                        <div>
                            <li><span className='font-bold'>Associate's degree as Application Programmer</span></li>
                            <li>St. Augustine College, Chicago, IL</li>
                        </div>
                        <div className='text-left md:text-right'>
                            <li>August 2021 - 2023</li>
                            <li>GPA: 4.0</li>
                        </div>
                    </ul>

                    <div className='bg-[#1d1d1d1c] border-t-2 border-b-2 border-[#1D1D1D] mt-4'>
                        <p className='text-center uppercase font-bold'>COMPUTER SCIENCE INTERNSHIP</p>
                    </div>
                    <ul className='text-sm mx-6 md:mx-10 mb-2'>
                        <li>No internship experience</li>
                    </ul>


                    <div className='bg-[#1d1d1d1c] border-t-2 border-b-2 border-[#1D1D1D] mt-4'>
                        <p className='text-center uppercase font-bold'>WORK EXPERIENCE</p>
                    </div>
                    <ul className='text-sm mx-6 md:mx-10 mb-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <li><span className='font-bold'>Founder & CEO of Astrobie LLC</span></li>
                            <li>Astrobie LLC, Chicago, IL</li>
                            <ul className='list-disc ml-8 text-xs'>
                                <li>Leading strategic direction and business development.</li>
                                <li>Overseeing product innovation and technology integration.</li>
                                <li>Managing a diverse, international team to ensure collaboration and growth.</li>
                                <li>Building partnerships and fostering client relationships to drive company success.</li>
                            </ul>
                        </div>
                        <div className='text-left md:text-right'>
                            <li>July 2024 - Present</li>
                        </div>
                        <div>
                            <li><span className='font-bold'>Student Worker</span></li>
                            <li>St. Augustine College, Chicago, IL</li>
                            <ul className='list-disc ml-8 text-xs'>
                                <li>Designed, maintained, and developed web solutions/applications.</li>
                                <li>Worked on creating UI design and media.</li>
                            </ul>
                        </div>
                        <div className='text-left md:text-right'>
                            <li>August 2022 - May 2024</li>
                        </div>
                    </ul>

                    <div className='bg-[#1d1d1d1c] border-t-2 border-b-2 border-[#1D1D1D] mt-4'>
                        <p className='text-center uppercase font-bold'>HONORS AND AWARDS</p>
                    </div>
                    <div className='text-sm mx-6 md:mx-10 mb-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <ul className='list-disc ml-8 text-xs'>
                            <li>ILSAMP 2024 Competition 1st Place</li>
                            <li>ILSAMP 2023 Competition 2nd Place</li>
                            <li>Suma Cum Laude - St. Augustine College</li>
                            <li>Coding Cup Mexico 2nd Runner Up</li>
                        </ul>
                    </div>
                    
                    <div className='bg-[#1d1d1d1c] border-t-2 border-b-2 border-[#1D1D1D] mt-4'>
                        <p className='text-center uppercase font-bold'>LEADERSHIP, ACTIVITIES, AND VOLUNTEER EXPERIENCE</p>
                    </div>
                    <div className='text-sm mx-6 md:mx-10 mb-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <ul className='list-disc ml-8 text-xs'>
                            <li>CEO of Astrobie Academy (non-profit)</li>
                            <li>Led a mission to Kenya, Africa bringing education to people.</li>
                        </ul>
                    </div>


                    <div className='bg-[#1d1d1d1c] border-t-2 border-b-2 border-[#1D1D1D] mt-4'>
                        <p className='text-center uppercase font-bold'>LANGUAGES AND COMPUTER SKILLS</p>
                    </div>
                    <div className='text-sm mx-6 md:mx-10 mb-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <ul className='list-disc ml-8 text-xs'>
                            <li>Fluent in Spanish and English, learning Portuguese.</li>
                            <li>Proficient in React, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, Python, Django, and PHP for web development.</li>
                            <li>Familiar with Adobe Photoshop and Illustrator.</li>
                        </ul>
                    </div>


                </div>

                <div className='flex justify-center items-center mt-20 flex-col'>
                    <p className='font-semibold'>Looking for a printable PDF version?</p>
                    <a href='/images/resume.pdf' target='_blank'><button className='bg-[#6b2d2d] text-[#FDFFFC] rounded-full px-5 py-3 hover:bg-[#441d1d] duration-200 mt-4'>Download Resume</button></a>
                </div>
            </div>
        </section>
    )
}

export default Resume