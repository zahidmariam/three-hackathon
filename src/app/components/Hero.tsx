import React from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Image */}
      <Image
        src="/h1.png"
        alt="shoe"
        className="mb-4 w-full max-w-[1400px]" // Ensure it scales responsively
        width={1600}
        height={700}
      />

      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-10 md:mt-[100px]">
        <p className="text-sm mb-1">First Look</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-base md:text-lg mb-8 mx-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse
          <br />
          —designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <button className="bg-black text-white py-2 px-6 rounded-full">
            Notify Me
          </button>
          <button className="bg-black text-white py-2 px-6 rounded-full">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="w-full p-4 md:mt-[100px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Best of Air Max</h1>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Shop</span>
            <button className="bg-gray-200 p-2 rounded-full">
              <IoIosArrowBack />
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Product Cards */}
          {[
            {
              src: "/h2.png",
              alt: "Nike Air Max Pulse Women's Shoes",
              title: "Nike Air Max Pulse",
              description: "Women's Shoes",
              price: "₹ 13,995",
            },
            {
              src: "/h3.png",
              alt: "Nike Air Max Pulse Men's Shoes",
              title: "Nike Air Max Pulse",
              description: "Men's Shoes",
              price: "₹ 13,995",
            },
            {
              src: "/h4.png",
              alt: "Nike Air Max 97 SE Men's Shoes",
              title: "Nike Air Max 97 SE",
              description: "Men's Shoes",
              price: "₹ 16,995",
            },
          ].map(({ src, alt, title, description, price }) => (
            <div key={title} className="border border-black rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={alt}
                width={600}
                height={400}
                className="w-full"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-gray-500">{description}</p>
                <p className="text-right font-bold">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image Section */}
      <Image
        src="/h5.png"
        alt="Person running on a trail with a scenic background"
        className="w-full h-auto"
        width={1600}
        height={900}
      />

      {/* STEP INTO WHAT FEELS GOOD Section */}
      <div className="w-full bg-white py-10 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-sm md:text-lg mb-8 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-full mb-8">
          Find Your Shoe
        </button>
      </div>

      {/* Gear Up Section */}
      <div className="w-full p-4 md:mt-[100px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Gear Up</h1>
        </div>
        <div className="flex items-center space-x-2 mb-[20px]">
          <span className="text-black-500">Shop Mens</span>
          <button className="bg-gray-200 p-2 rounded-full">
            <IoIosArrowBack />
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <IoIosArrowForward />
          </button>
          <span className="text-black-500">Shop Womens</span>
          <button className="bg-gray-200 p-2 rounded-full">
            <IoIosArrowBack />
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <IoIosArrowForward />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              src: "/h6.png",
              alt: "Men's Short-Sleeve Running Top",
              title: "Nike Dri-FIT ADV TechKnit Ultra",
              price: "₹ 3,895",
              description: "Men's Short-Sleeve Running Top",
            },
            {
              src: "/h7.png",
              alt: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
              title: "Nike Dri-FIT Challenger",
              price: "₹ 2,495",
              description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            },
            {
              src: "/h8.png",
              alt: "Women's Long-Sleeve Running Top",
              title: "Nike Dri-FIT ADV Run Division",
              price: "₹ 5,295",
              description: "Women's Long-Sleeve Running Top",
            },
            {
              src: "/h9.png",
              alt: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
              title: "Nike Fast",
              price: "₹ 3,795",
              description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            },
          ].map(({ src, alt, title, price, description }) => (
            <div key={title} className="border">
              <Image
                src={src}
                alt={alt}
                width={300}
                height={300}
                className="w-full"
              />
              <div className="p-2">
                <h3 className="font-semibold">
                  {title} <span className="float-right">{price}</span>
                </h3>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Essentials Section */}
      <Image 
        src="/Frame.png" 
        alt="Jordan logo"  
        width={1600} 
        height={700} 
        className="mt-8"
      />
      <div className="p-8">
        <h1 className="text-black text-xl font-semibold mb-4">The Essentials</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              imgSrc: "/h10.png",
              alt: "Men's clothing and shoes on a colorful rug",
              label: "Men's",
            },
            {
              imgSrc: "/h11.png",
              alt: "Women's clothing and shoes on a couch",
              label: "Women's",
            },
            {
              imgSrc: "/h12.png",
              alt: "Kids' clothing and shoes in front of yellow lockers",
              label: "Kids'",
            },
          ].map(({ imgSrc, alt, label }) => (
            <div key={label} className="relative">
              <img src={imgSrc} alt={alt} className="w-full h-auto" />
              <button className="absolute bottom-4 left-4 bg-white text-black py-2 px-4 rounded-full shadow-md">
                {label}
              </button>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <div className="flex justify-center p-8">
                    <div className="grid grid-cols-4 gap-8 text-center">
                        <div>
                            <h2 className="font-bold mb-2">Icons</h2>
                            <ul>
                                <li className="mb-1">Air Force 1</li>
                                <li className="mb-1">Huarache</li>
                                <li className="mb-1">Air Max 90</li>
                                <li className="mb-1">Air Max 95</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold mb-2">Shoes</h2>
                            <ul>
                                <li className="mb-1">All Shoes</li>
                                <li className="mb-1">Custom Shoes</li>
                                <li className="mb-1">Jordan Shoes</li>
                                <li className="mb-1">Running Shoes</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold mb-2">Clothing</h2>
                            <ul>
                                <li className="mb-1">All Clothing</li>
                                <li className="mb-1">Modest Wear</li>
                                <li className="mb-1">Hoodies & Pullovers</li>
                                <li className="mb-1">Shirts & Tops</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-HelveticaNeue font-bold mb-2">Kids'</h2>
                            <ul>
                                <li className="mb-1">Infant & Toddler Shoes</li>
                                <li className="mb-1">Kids' Shoes</li>
                                <li className="mb-1">Kids' Jordan Shoes</li>
                                <li className="mb-1">Kids' Basketball Shoes</li>
                            </ul>
                        </div>
                        {/* Bottom Notification */}
      <div className="bg-gray-100 py-4 text-center">
        <p className="text-lg font-semibold">Hello Nike App</p>
        <p className="text-sm">
          Download the app to access everything Nike.{' '}
          <a href="#" className="underline"><b>Get Your Great</b></a>
        </p>
      </div>
                    </div>
                    </div>

      </div>
    </div>
  );
};

export default Hero;