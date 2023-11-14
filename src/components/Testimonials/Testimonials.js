import React from 'react'


//import components
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider'

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary px-[1rem]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title
             before:content-testimonials
             relative
             before:absolute
             before:opacity-40
             before:-top-[2rem]
             before:-left-64
             before:hidden
             before:lg:block
             '>What other people say</h2>
        </div>
        <p className='mb-8 w-full max-w-[25rem] text-center mx-auto'>
        Discover the experiences of those I've had the pleasure of working with.
         Here's what people are saying about my services and collaboration
        </p>
      </div>
      <TestimonialSlider />
    </section>
  )
}

export default Testimonials