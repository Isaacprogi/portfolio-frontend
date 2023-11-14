import { ChevronUpIcon } from '@heroicons/react/outline'
import React,{useEffect, useState} from 'react'

//import link

import {animateScroll as scroll} from 'react-scroll'


const BackToTopBtn = () => {
    const [show,setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            return window.scrollY > 600 ? setShow(true):setShow(false)
        })
    })

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

  return  show && (
    <button onClick={()=>scrollToTop()} className='bg-accent w-12 h-12 transition-all z-[500] hover:bg-accent-hover text-white rounded-full fixed right-24 bottom-24 9cursor-pointet flex items-center justify-center'>
     <ChevronUpIcon className='w-6 h-6'/>
  </button>
  )
}

export default BackToTopBtn