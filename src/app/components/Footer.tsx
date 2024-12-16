import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaCamera } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">FIND A STORE</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">BECOME A MEMBER</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">SIGN UP FOR EMAIL</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Send Us Feedback</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">STUDENT DISCOUNTS</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Order Status</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Delivery</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Returns</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Payment Options</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Contact Us On Nike.com Inquiries</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Contact Us On All Other Inquiries</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">News</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Investors</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Sustainability</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 flex justify-center md:justify-end">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
                <a href="#" className="text-white hover:text-gray-400"><FaFacebookF /></a>
                <a href="#" className="text-white hover:text-gray-400"><FaYoutube /></a>
                <a href="#" className="text-white hover:text-gray-400"><FaCamera /></a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-8">
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt"></i>
              <span>India</span>
            </div>
            <div className="text-center md:text-left">
              <p>© 2023 Nike, Inc. All Rights Reserved</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Guides</a>
              <a href="#" className="hover:underline">Terms of Sale</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Nike Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;