import React from 'react';

export default function Header1() {
  const img1 = 'https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LMl7mqS5IzrbhvVDOycAwPRg-g02Yu7poS~igu8N9mYUL8j4yvcWZS3HG~qWhFsVVCOtwKp12~uYKMj5NfjAiZ85Bbx9PdYwb29~LgWXNc-37cw5Zlr-~QAnYMTlY4D3GQER6SuwxNaOVZH0K03-fxQu07q0blo5jDRJKU4KM0p9pkrRz4T~3tFB2Vk0L84zfmgOJ0xJERI6V0D74xRMY6NPcZom~wSU38ACndtQW5XxAkf8o-L83uarBmQcKpaG71cdAf9rMqFk3YpyxzZbH3siwLTTJGIkI13eq31iQ7rRG0vfEAx-a6D~XSN5lm9r3eWG8i9MOHjVTHynomY8lw__';
  const img2 = './imports/Rectangle2.png'
  const imgVector = "./imports/Vector.png"


  return (
    <div className="bg-gray-100 p-8">
      <header className="flex items-center justify-between max-w-6xl mx-auto">
<div
className="w-max h-max p-12 absolute top-[220px] left-[1220px]"
style={{ backgroundImage: `url(${imgVector})` }}
></div>
<div
className="w-max h-max p-12 absolute top-[431px] left-[750px]"
style={{ backgroundImage: `url(${imgVector})` }}
></div>
        <div className="w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="text-lg mb-8">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button type="submit" className="bg-black text-white px-10 py-3 rounded-full mb-8 hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold">200+</h2>
              <p>International Brands</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">2,000+</h2>
              <p>High-Quality Products</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">30,000+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4">
        <div className="w-full h-full " style={{ backgroundImage: `url(${img2})` }}></div>
          <img src={img1} alt="Fashionable clothes" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </header>
    </div>
  );
}