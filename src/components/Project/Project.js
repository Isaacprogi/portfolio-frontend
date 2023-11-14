import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col group items-center text-center'>
      
      <div className='mb-8 hover:opacity-[.8] relative duration-300 cursor-pointer'>
      <a
        href={item.href}
        className='text-center opacity-[0] text-accent z-[300] group-hover:opacity-[1] flex  items-center cursor-pointer justify-center text-lg font-[700] absolute w-full h-full bg-black transition-opacity duration-300'>
        🤗
      </a>
        <img src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent font-[600] text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>
        {item.name}
      </h3>
      <p className='text-sm'>
        {item.stack}
      </p>
    </div>
  );
};

export default Project;
