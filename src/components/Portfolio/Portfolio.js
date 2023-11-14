import React from 'react'

//import components
import Projects from '../Projects/Projects'

const Portfolio = () => {
    return (
        <section id='portfolio' className='section bg-primary min-h-[1400px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title
           before:content-portfolio relative
           before:absolute before:opacity-40 before:top-[2rem] before:-left-3/2
           before:hidden before:lg:block'>
                        My works
                    </h2>
                    <p className='subtitle'>
                        Explore my recent projects through the links below! Each one showcases my skills and dedication to creating meaningful digital experiences.
                        Click to see more. Questions or want details? Feel free to reach out!
                    </p>
                </div>
                <Projects />
            </div>
        </section>
    )
}

export default Portfolio