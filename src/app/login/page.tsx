import React from 'react'

const page = () => {
  return (
    <div className="w-full max-w-xs mx-auto">
    <div className="flex justify-center mb-6">
        <img src="https://placehold.co/50x50" alt="Nike logo" className="h-12" />
    </div>
    <h1 className="text-center text-xl font-bold mb-6">
        YOUR ACCOUNT<br />
        FOR EVERYTHING<br />
        NIKE
    </h1>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email address" />
        </div>
        <div className="mb-6">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
        </div>
        <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Keep me signed in</span>
            </label>
            <a className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800" href="#">
                Forgotten your password?
            </a>
        </div>
        <p className="text-center text-xs text-gray-500 mb-6">
            By logging in, you agree to Nike's <a href="#" className="text-gray-800 underline">Privacy Policy</a> and <a href="#" className="text-gray-800 underline">Terms of Use</a>.
        </p>
        <div className="flex items-center justify-center">
            <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                SIGN IN
            </button>
        </div>
    </form>
    <p className="text-center text-sm text-gray-500">
        Not a Member? <a href="#" className="text-gray-800 underline">Join Us.</a>
    </p>
</div>
);
}

  


export default page


