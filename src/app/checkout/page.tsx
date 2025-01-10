import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8">
    <div className="w-full md:w-2/3">
        <h1 className="text-2xl font-bold mb-4">How would you like to get your order?</h1>
        <p className="mb-4">We need to know your address so we can figure out which stores are available to you.</p>
        <div className="mb-4">
            <input type="text" placeholder="Enter your address" className="border p-2 w-full" />
            <button className="bg-black text-white p-2 mt-2 w-full">Search</button>
        </div>
        <h2 className="text-xl font-bold mb-4">Enter your name and address.</h2>
        <form className="space-y-4">
            <input type="text" placeholder="First Name" className="border p-2 w-full" />
            <input type="text" placeholder="Last Name" className="border p-2 w-full" />
            <input type="text" placeholder="Address Line 1" className="border p-2 w-full" />
            <input type="text" placeholder="Address Line 2" className="border p-2 w-full" />
            <input type="text" placeholder="Address Line 3" className="border p-2 w-full" />
            <div className="flex space-x-4">
                <input type="text" placeholder="City" className="border p-2 w-full" />
                <input type="text" placeholder="State" className="border p-2 w-full" />
            </div>
            <div className="flex space-x-4">
                <input type="text" placeholder="Zip Code" className="border p-2 w-full" />
                <select className="border p-2 w-full">
                    <option>Country</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>UK</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
                <input type="checkbox" id="billing" />
                <label htmlFor="billing">Use this address for billing</label>
            </div>
        </form>
        <h2 className="text-xl font-bold mt-8 mb-4">What's your contact information?</h2>
        <form className="space-y-4">
            <input type="email" placeholder="Email Address" className="border p-2 w-full" />
            <input type="tel" placeholder="Phone Number" className="border p-2 w-full" />
        </form>
        <h2 className="text-xl font-bold mt-8 mb-4">What's your PAXI?</h2>
        <form className="space-y-4">
            <input type="text" placeholder="PAXI" className="border p-2 w-full" />
            <p className="text-sm text-gray-500">PAXI is a unique identifier for your order. You can find it in your order confirmation email.</p>
        </form>
        <button className="bg-gray-200 text-black p-2 mt-4 w-full">Continue</button>
    </div>
    <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="border p-4">
            <div className="flex mb-4">
                <img src="/h6.png" alt="Product 1" className="w-24 h-24 object-cover" />
                <div className="ml-4">
                    <p>Item No. 12345 - Red Shirt</p>
                    <p>Quantity: 1</p>
                    <p>Price: $19.99</p>
                </div>
            </div>
            <div className="flex">
                <img src="/frame11.png" alt="Product 2" className="w-24 h-24 object-cover" />
                <div className="ml-4">
                    <p>Item No. 67890 - Blue Shoes</p>
                    <p>Quantity: 1</p>
                    <p>Price: $49.99</p>
                </div>
            </div>
        </div>
    </div>
</div>
);

  
}

export default page
