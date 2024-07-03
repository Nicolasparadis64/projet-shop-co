import React from 'react';

export default function BodyElement2({ note, nom, commentaire }) {
  return (
    <div className='bg-white text-start shadow-lg rounded-lg p-6 m-4 max-w-lg flex flex-col'>
      <div className='flex items-center mb-4'>
        <span className='flex flex-row mr-4'>{note}</span>
      </div>
        <p className='text-lg font-semibold'>{nom}</p>
      <p className='mt-2 text-base text-[16px] text-gray-600'>{commentaire}</p>
    </div>
  );
}
