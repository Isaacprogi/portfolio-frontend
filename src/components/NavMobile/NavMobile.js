import React from 'react'
import { useState } from 'react'

//import navigation date
import { navigation } from '../../data'

//import icons
import {XIcon} from '@heroicons/react/outline'
import {MenuAlt3Icon} from '@heroicons/react/outline'

//import framer motion
import {motion} from 'framer-motion'

//import link
import {Link} from 'react-scroll'

const NavMobile = () => {
    const [isOpen,setIsOpen] = useState(false)

    //framer motion variants
   const  circleVariants = {
        hidden:{
            scale:0
        },
        visible: {
            scale:180,
            transition:{
                type:'string',
                stiffness:160,
                damping:60
            }
        }
    }

    const ulVariants = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
             transition:{
                delay:0.1
             }
        }
    }

  return (
     <div className='relative'>
       {/* menu icon */}
       <div className='cursor-pointer text-white'>
      <MenuAlt3Icon onClick={()=>setIsOpen(true)} className='w-8 lg:hidden h-8'/>
    </div>

     {/* circle */}
     <motion.div variants={circleVariants}
     initial='hidden' animate={isOpen?'visible':'hidden'}
     className='w-4 h-4 rounded-full bg-accent py-[2rem] fixed top-0 right-0'
     >

     </motion.div>
     
     {/* menu7 */}
     <motion.ul variants={ulVariants}
     initial='hidden' animate={isOpen?'visible':''}
     className={`${isOpen?'right-0':'-right-full'} fixed  top-0 bottom-0 w-full flex flex-col
     justify-center items-center transition-all duration-300 overflow-hidden`}
     >
        {/* close icon */}
        <div onClick={()=>setIsOpen(false)} className='cursor-pointer absolute z-[500] top-8 right-8'>
           <XIcon className='w-8 h-8 text-white'/>
        </div>

        {
            navigation.map((item,index)=>{
                return <li key={index} className='mb-8'>
                   <Link
                    onClick={()=>setIsOpen(false)}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className='text-xl cursor-pointer capitalize'
                    >
                    {item.name}
                   </Link>
                </li>
          })
        }
     </motion.ul>

     </div>
  )
}

export default NavMobile