import React from 'react'
import { useState, useEffect } from 'react';

//import components
import Nav from '../Nav/Nav';
import NavMobile from '../NavMobile/NavMobile';
import Socials from '../Socials/Socials';


const Header = () => {
    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })

    return (
        <header className={`${bg ? 'bg-[#262825] h-20' : 'h-24'} flex items-center fixed top-0
     w-full text-white z-10 transition-all duration-300 `}>
            <div className='container mx-auto h-full flex items-center justify-between'>
                {/* logo */}
                <a href='/' className='bg-gradient-to-r font-[700] text-4xl from-green-50 to-emerald-300 bg-clip-text text-transparent' >
                    Isaac Anasonye
                </a>

                {/* nav */}
                <div className='hidden lg:block'>
                    <Nav />
                </div>

                {/* socials */}
                <div className='hidden lg:block'>
                    <Socials />
                </div>

                {/* nav mobile */}
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}

export default Header