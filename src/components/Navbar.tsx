
import { useState } from 'react';
import { Search01Icon, User02Icon, HelpCircleIcon, ShoppingCart01Icon, Menu01Icon } from '@hugeicons/react';

const Navbar = () => {
  const [language, setLanguage] = useState('ENG');

  return (
    <nav className="w-full bg-white shadow-lg">
      {/* Top Section */}
      <div className="bg-primary-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="font-dm-sans">Call for Support: 09648500500</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setLanguage(language === 'ENG' ? 'BNG' : 'ENG')}
                className="font-dm-sans hover:text-yellow-400 transition-colors"
              >
                {language}
              </button>
            </div>
            <button className="font-dm-sans hover:text-yellow-400 transition-colors">
              Join As a Dropshipper
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-primary-600 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white font-dm-sans">
              Drop<span className="text-yellow-400">Now</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-3 pl-4 pr-12 rounded-lg bg-white text-gray-800 font-dm-sans focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-primary-600">
                <Search01Icon size={20} />
              </button>
            </div>
          </div>

          {/* Right Side Links */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center text-white hover:text-yellow-400 transition-colors cursor-pointer">
              <User02Icon size={24} />
              <span className="text-sm font-dm-sans mt-1">My Panel</span>
            </div>
            <div className="flex flex-col items-center text-white hover:text-yellow-400 transition-colors cursor-pointer">
              <HelpCircleIcon size={24} />
              <span className="text-sm font-dm-sans mt-1">Help Guide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-primary-500 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="text-white font-dm-sans hover:text-yellow-400 transition-colors">
              All Products
            </button>
            <button className="text-white font-anek-bangla hover:text-yellow-400 transition-colors">
              অর্ডার ট্র্যাকিং
            </button>
            <button className="text-white font-anek-bangla hover:text-yellow-400 transition-colors">
              ড্রপ-শিপিং গ্রুপ স্টাডি
            </button>
          </div>

          <div className="flex items-center gap-2 text-white">
            <span className="font-dm-sans">৳0.00</span>
            <ShoppingCart01Icon size={24} className="text-yellow-400" />
            <span className="bg-yellow-400 text-primary-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
