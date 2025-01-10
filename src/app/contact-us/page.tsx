import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-white">
    <header className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
            <h1 className="text-xl font-bold">GET HELP</h1>
        </div>
    </header>
    <div className="bg-blue-100 py-4">
        <div className="container mx-auto flex justify-center">
            <input type="text" placeholder="What can we help you with?" className="w-full max-w-lg p-2 border border-gray-300 rounded" />
        </div>
    </div>
    <div className="container mx-auto py-8 px-4 md:px-0 flex flex-col md:flex-row">
        <div className="md:w-2/3 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON 1440 x 132?</h2>
            <p className="mb-4">We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Visa, MasterCard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                <li>If you enter your PIN information at checkout, you'll be able to pay for your order with your ATM or local debit card of choice.</li>
                <li>Apple Pay</li>
            </ul>
            <p className="mb-4">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>
            <div className="flex space-x-4 mb-8">
                <button className="bg-black text-white py-2 px-4 rounded">JOIN US</button>
                <button className="bg-black text-white py-2 px-4 rounded">SHOP NIKE</button>
            </div>
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            <div className="mb-4">
                <h3 className="font-bold">Do you send international purchases enabled?</h3>
                <p>Yes, international purchases are enabled. You can opt to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
            </div>
            <div className="mb-4">
                <h3 className="font-bold">Can I pay for my order with multiple methods?</h3>
                <p>No, Nike Members can only store multiple debit or credit cards in their profile for faster checkout.</p>
            </div>
            <div className="mb-4">
                <h3 className="font-bold">What payment methods are accepted for SNKRS orders?</h3>
                <p>We accept the same payment methods for SNKRS orders as we do for other Nike.com orders.</p>
            </div>
            <div className="mb-4">
                <h3 className="font-bold">Why can't I see Apple Pay as an option?</h3>
                <p>Apple Pay is only available when using Safari on an iPhone, iPad, or on Nike.com. You'll need to use a compatible Apple device during the latest version of iOS or macOS to access Apple Pay. Additionally, you'll need to use Safari to see Apple Pay as an option.</p>
            </div>
            <h2 className="text-2xl font-bold mb-4">RELATED</h2>
            <ul className="list-disc list-inside">
                <li><a href="#" className="text-blue-500">WHAT ARE NIKE DELIVERY OPTIONS?</a></li>
                <li><a href="#" className="text-blue-500">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a></li>
            </ul>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
            <div className="mb-4">
                <i className="fas fa-phone-alt"></i>
                <p>0800 00 198 0568</p>
                <p>Products & Orders: 24 hours a day, 7 days a week</p>
                <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
            </div>
            <div className="mb-4">
                <i className="fas fa-comments"></i>
                <p>24 hours a day</p>
                <p>7 days a week</p>
            </div>
            <div className="mb-4">
                <i className="fas fa-envelope"></i>
                <p>We'll reply within 5 days</p>
            </div>
            <div className="mb-4">
                <i className="fas fa-map-marker-alt"></i>
                <p>STORE LOCATOR</p>
                <p>Find Nike retail stores near you</p>
            </div>
        </div>
    </div>
</div>
);
};

  

export default page
