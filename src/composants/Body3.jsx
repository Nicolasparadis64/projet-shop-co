import React from 'react';

export default function Body3() {
  const img1 = "./imports/image11.png";
  const img2 = "./imports/image12.png";
  const img3 = "./imports/image13.png";
  const img4 = "./imports/image14.png";

  return (
    <div className='mt-[90px] flex justify-center'>
      <section className='bg-gray-300 w-[1239px] h-[866px] flex flex-col items-center rounded-[40px] p-6'>
        <h2 className='text-[48px] font-bold m-12'>BROWSE BY DRESS STYLE</h2>

        <div className='flex flex-wrap justify-center gap-6'>
            <p className='absolute left-60 text-[36px] font-medium '>Casual</p>
          <div className='w-[407px] h-[289px]'>
            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img1})` }}></div>
          </div>

          <div className='w-[684px] h-[289px]'>
            <p className='absolute right-70 text-[36px] font-medium	 '>Formal</p>
            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img3})` }}></div>
          </div>

          <div className='w-[684px] h-[289px]'>
            <p className='absolute right-70 text-[36px] font-medium	 '>Party</p>
            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img2})` }}></div>
          </div>

          <div className='w-[407px] h-[289px]'>
            <p className='absolute right-70 text-[36px] font-medium	'>Gym</p>
            <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${img4})` }}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
