import React from 'react';
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoLockOpenOutline } from "react-icons/io5";
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full">
      {/* Gray Header */}
      <header className="bg-gray-100">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4">
          {/* Logo */}
          <Image 
            src="/logo.png" 
            alt="Jordan logo" 
            className="h-6" 
            width={24} 
            height={24} 
          />

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-2 mt-2 md:mt-0">
            <a href="#" className="text-sm">Find a Store</a>
            <span>|</span>
            <a href="#" className="text-sm">Help</a>
            <span>|</span>
            <a href="#" className="text-sm">Join Us</a>
            <span>|</span>
            <a href="#" className="text-sm">Sign In</a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4 bg-white">
          {/* Nike Logo */}
          <img src="/Vector.png" alt="Nike logo" className="h-5 mb-2 md:mb-0" />

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 mb-2 md:mb-0 ml-[210px]">
            <a href="#" className="text-sm font-semibold">New & Featured</a>
            <a href="#" className="text-sm font-semibold">Men</a>
            <a href="#" className="text-sm font-semibold">Women</a>
            <a href="#" className="text-sm font-semibold">Kids</a>
            <a href="#" className="text-sm font-semibold">Sale</a>
            <a href="#" className="text-sm font-semibold">SNKRS</a>
          </div>

          {/* Search Bar with Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 rounded-full pl-8 pr-4 py-1 text-sm w-[150px] md:w-[200px]"
              />
              <CiSearch
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
              />
            </div>
            {/* Icons next to the search bar */}
            <CiHeart className="text-lg text-gray-600 cursor-pointer" />
            <IoLockOpenOutline className="text-lg text-gray-600 cursor-pointer" />
          </div>
        </div>
      </header>

      
    </div>
  );
};

export default Header;