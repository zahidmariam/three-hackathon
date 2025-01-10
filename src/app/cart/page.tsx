import React from 'react';

const Page = () => {
  return (
    <div className="p-4 md:p-8 lg:p-16">
      <div className="bg-gray-100 p-4 mb-4">
        <p className="text-sm">Free Delivery</p>
        <p className="text-xs">Applies to orders of ₹ 14,000.00 or more. <a href="#" className="underline">View details</a></p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Bag</h2>
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center mb-4">
              <img src="/h6.png" alt="Nike Dri-FIT ADV TechKnit Ultra" className="w-24 h-24 object-cover mr-4" />
              <div className="flex-1">
                <h3 className="font-bold">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-sm">Men's Short-Sleeve Running Top</p>
                <p className="text-sm">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm">Size L Quantity 1</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">MRP: ₹ 3,895.00</p>
            </div>
          </div>
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center mb-4">
              <img src="./h4.png" alt="Nike Air Max 97 SE" className="w-24 h-24 object-cover mr-4" />
              <div className="flex-1">
                <h3 className="font-bold">Nike Air Max 97 SE</h3>
                <p className="text-sm">Men's Shoes</p>
                <p className="text-sm">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-sm">Size 8 Quantity 1</p>
              </div>
              <div className="text-right">
                <p className="font-bold">MRP: ₹ 16,995.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="text-gray-500"><i className="far fa-heart"></i></button>
                <button className="text-gray-500"><i className="far fa-trash-alt"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 lg:pl-8">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>₹ 20,890.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-full">Member Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Page;