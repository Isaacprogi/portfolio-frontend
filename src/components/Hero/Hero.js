import React from 'react'


//import woman image
import Isaac from '../../assets/img/me.jpg'
import { FiLinkedin } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id='home' className='min-h-[100vh] flex items-center bg-[#262825] lg:bg-cover lg:bg-center lg:bg-no-repeat py-32
    lg:py-0 overflow-hidden'>
      <div className='container h-full mx-auto'>
        <div className='flex items-center  h-full pt-[4rem]'>

          {/* left side */}
          <div className='flex-1  flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent '>Hello ☺,</p>
            <p className='mb-[22px]'>I'm Isaac</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl md:leading-[1,2] font-bold md:tracking-[-2px]
                        '>I Build & Design <br />Web Interface</h1>
            <p className='pt-4 pb-8 mb:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Experienced Developer with a proven track record of delivering high-quality web applications. With 5
              years of hands-on experience, I possess a deep understanding of front end and backend development
              principles and best practices.
            </p>
            <a href='https://linkedin.com/in/isaacanasonye' className='btn btn-md flex gap-x-[.6rem] bg-accent hover:bg-accent-hover md:btn-lg transition-all'>
              <span>Connect</span>
              <FiLinkedin />
            </a>
          </div>

          {/* right side */}
          <div className='hidden lg:flex  flex-1 justify-center items-center h-full'>
            <div className='w-[15rem] h-[15rem] overflow-hidden rounded-full '>
              <img className='h-full w-full object-cover' src={Isaac} alt='isaac' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero