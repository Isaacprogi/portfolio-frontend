import React from 'react'

//import image
import Image from '../../assets/img/me.jpg'

import { Link } from 'react-scroll'

const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row items-center gap-24'>
                   
                <div className='border  border-[1rem] h-[max-content] min-w-[max-content] border-primary rounded-full overflow-hidden'>
                <div className='w-[15rem] min-w-[15rem] overflow-hidden h-[15rem] rounded-full border border-[3rem] border-secondary'>
                   <img src={Image} alt='' className='object-cover animate-pulse hover:animate-ping h-full w-full md:mx-auto lg:mx-0 rounded-2xl' />
                   </div>
                </div>

                    <div className='flex flex-col items-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-exrtabold mb-3 before:content-about
                 relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block
                 '>
                                Isaac Anasonye
                            </h2>
                            <p className='mb-4 text-accent'>
                                Fullstack Developer
                            </p>
                            <hr className='mb-4' />
                            <p className='mb-8'>
                                Hello! I'm Isaac, a Fullstack Developer from Anambra, Nigeria. Armed with a degree in Computer Science, I've spent 5 years crafting seamless digital experiences.

                                I design user-friendly interfaces with React and optimize server-side operations using Node.js, taking a holistic approach to web development. My work is guided by a commitment to quality and principles that shape meaningful digital solutions.

                                Currently, I'm diving into new technologies, staying ahead of industry trends. Let's collaborate on your next project! Reach me via email or find me on LinkedIn. Together, we can create exceptional digital solutions!
                            </p>

                            <Link to='contact'
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className='btn btn-md max-w-[10rem] cursor-pointer bg-accent hover:bg-accent-hover transition-all'
                            >
                                Contact me
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About