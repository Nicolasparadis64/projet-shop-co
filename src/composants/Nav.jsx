// src/composants/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <div >
      <div className="bg-black p-4">
        <p className="text-white">Sign up and get 20% off to your first order. Sign Up Now</p>
      </div>

      <div className='flex justify-center items-center gap-10'>
        <a href='' className='p-4 text-3xl font-bold'><p>SHOP.CO</p></a>
          <ul className="flex gap-6 flex-row">
          <li>
            <Link to="/">Acceuil</Link>  {/* Corrected Link component */}
          </li>
          <li>
            <Link to="/about">On Sale</Link>  {/* Corrected Link component */}
          </li>
          <li>
            <Link to="/contact">New Arrivals</Link>  {/* Corrected Link component */}
          </li>
          {/* <a href=''><p>On Sale</p></a>
          <a href=''><p>New Arrivals</p></a>
          <a href=''><p>Brands</p></a> */}
        </ul>
        <input type='text' className='bg-gray-200 rounded-lg mx-4 px-12 py-2'></input>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>        <div> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>
    </div>
  );
}
