import React from 'react'

import { social } from '../../data'


const Footer = () => {
    return (
        <footer className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    {/* social icons */}
                    <div className='flex space-x-6 items-center justify-center'>
                        {
                            social.map((item, index) => {
                                const { href, icon } = item
                                return <a className='text-accent' href={href} key={index}>{icon}</a>
                            })
                        }
                    </div>
                    
                    {/* copy right */}
                    <p>&copy; 2022 Isaac Anasonye, All rights</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer