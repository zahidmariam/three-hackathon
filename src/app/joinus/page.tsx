import React from 'react'

const page = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-6">
    <div className="text-center mb-6">
        <img src="https://placehold.co/100x50" alt="Nike logo" className="mx-auto mb-4"/>
        <h1 className="text-xl font-bold">BECOME A NIKE MEMBER</h1>
        <p className="text-gray-600">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
    </div>
    <form className="space-y-4">
        <input type="email" placeholder="Email address" className="w-full px-4 py-2 border border-gray-300 rounded"/>
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded"/>
        <input type="text" placeholder="First Name" className="w-full px-4 py-2 border border-gray-300 rounded"/>
        <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border border-gray-300 rounded"/>
        <input type="date" placeholder="Date of Birth" className="w-full px-4 py-2 border border-gray-300 rounded"/>
        <select className="w-full px-4 py-2 border border-gray-300 rounded">
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
        </select>
        <div className="flex justify-between">
            <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2"/> Male
            </label>
            <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2"/> Female
            </label>
        </div>
        <label className="flex items-center">
            <input type="checkbox" className="mr-2"/> Sign up for emails to get updates from Nike products, offers and your Member benefits.
        </label>
        <p className="text-gray-600 text-xs">By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</p>
        <button type="submit" className="w-full bg-black text-white py-2 rounded">JOIN US</button>
    </form>
    <p className="text-center text-gray-600 text-sm mt-4">Already a member? <a href="#" className="text-black">Sign In</a></p>
</div>
);
}



export default page
