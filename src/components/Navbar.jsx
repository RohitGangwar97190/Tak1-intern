import React from 'react';
import { FaAngleRight } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-blue-500 h-[80px] overflow-x-hidden ">
  

<div className="container flex justify-between items-center ">
  {/* Logo */}
  <div className="text-white text-2xl font-bold">
    MyLogo
  </div>
  
  {/* Right End */}
  <div className='flex gap-2 items-center'>
    <span className='text-white text-2xl sm:text-4xl px-2 sm:px-10'>Search Job</span>
    <span className="bg-white text-black text-2xl rounded-md h-12 flex items-center px-4 py-2">
      Your Profile
      <FaAngleRight className="ml-2" />
    </span>
    <span>
      <img className='h-12 sm:h-24 rounded-2xl' src='/profile-img.webp' alt='Profile' />
    </span>
  </div>
</div>

     
    </nav>
  );
}

export default Navbar;
