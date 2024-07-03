import React from 'react';

export default function BodyElement1({ img, titre, prix, note }) {
  return (
    <div className='flex flex-col items-start p-4 border rounded-lg max-w-xs'>
      <div className='w-full h-auto'>
        <img 
          src={img}
          alt="Fashionable clothes" 
          className='  w-[295px] h-[298px] rounded-lg'
        />
      </div>
      <div className='mt-4 text-center'>
        <p className='text-lg font-semibold'>{titre}</p>
        <span className='flex flex-row'> {note} </span>
        <p className='mt-2 text-xl font-bold'>{prix}</p>
      </div>
    </div>
  );
}
