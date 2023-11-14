import React from 'react'

//import skills data
import { skills } from '../../data'

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-5 gap-y-[2rem] md:grid-flow-row'>
                {
                    skills.map((skill,index)=>{
                        return <a href={skill.href} className='flex relative flex-col cursor-pointer hover:opacity-[.7]  items-center justify-center' key={index}>
                            <img className={`${index === 7 ?'w-[2.5rem] ':'w-[4rem]'}`} src={skill.image} alt=''/>
                            <div className=' animate-pulse absolute -bottom-[1.5rem] font-[500] text-[.7rem]'>{skill.name}</div>
                        </a>
                    })
                }
            </div>
          </div>
    </section>
  )
}

export default Skills