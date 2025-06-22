import { useState } from 'react';
import { Search01Icon, User02Icon, HelpCircleIcon, ShoppingCart01Icon, HotAirBalloonIcon, Menu03Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-lg z-40">
        {/* Top Section */}
        <div className="bg-[#471396] text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="font-dm-sans hidden sm:block">Call for Support: 09648500500</span>
              <span className="font-dm-sans sm:hidden text-xs">Support: 09648500500</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="font-dm-sans text-yellow-200 transition-colors text-xs sm:text-sm">
                Join As a Dropshipper
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-[#471396] py-4 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Mobile: Menu Button + Logo */}
            <div className="flex items-center gap-3 lg:hidden">
              <button 
                onClick={toggleSidebar}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <HugeiconsIcon icon={Menu03Icon} size={24} />
              </button>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={HotAirBalloonIcon} size={24} className="text-white" />
                <h1 className="text-2xl sm:text-3xl font-bold text-white font-anek-bangla">
                  ড্রপ<span className="text-yellow-400">নাও</span>
                </h1>
              </div>
            </div>

            {/* Desktop: Logo (left aligned) */}
            <div className="hidden lg:flex items-center gap-2">
              <HugeiconsIcon icon={HotAirBalloonIcon} size={32} className="text-white" />
              <h1 className="text-5xl font-bold text-white font-anek-bangla">
                ড্রপ<span className="text-yellow-400">নাও</span>
              </h1>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-3 pl-4 pr-12 rounded-lg bg-white text-gray-800 font-dm-sans focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-primary-600">
                  <HugeiconsIcon icon={Search01Icon} size={20} />
                </button>
              </div>
            </div>

            {/* Right Side - Mobile shows only cart */}
            <div className="flex items-center gap-2">
              {/* Mobile Cart */}
              <div className="lg:hidden flex items-center gap-2 text-white">
                <span className="font-dm-sans text-sm">৳0.00</span>
                <HugeiconsIcon icon={ShoppingCart01Icon} size={20} className="text-yellow-400" />
                <span className="bg-yellow-400 text-primary-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  0
                </span>
              </div>

              {/* Desktop Links */}
              <div className="hidden lg:flex items-center gap-6">
                <div className="flex flex-col items-center text-white hover:text-yellow-400 transition-colors cursor-pointer">
                  <HugeiconsIcon icon={User02Icon} size={24} />
                  <span className="text-sm font-dm-sans mt-1">My Panel</span>
                </div>
                <div className="flex flex-col items-center text-white hover:text-yellow-400 transition-colors cursor-pointer">
                  <HugeiconsIcon icon={HelpCircleIcon} size={24} />
                  <span className="text-sm font-dm-sans mt-1">Help Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Hidden on mobile */}
        <div className="hidden lg:block bg-[#090040] py-3 px-4">
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
              <HugeiconsIcon icon={ShoppingCart01Icon} size={24} className="text-yellow-400" />
              <span className="bg-yellow-400 text-primary-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-32 lg:h-36"></div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleSidebar} />
      )}

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 bg-[#471396] z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-400">
          <div className="flex items-center gap-2">
            <HugeiconsIcon icon={HotAirBalloonIcon} size={24} className="text-white" />
            <h2 className="text-xl font-bold text-white font-anek-bangla">
              ড্রপ<span className="text-yellow-400">নাও</span>
            </h2>
          </div>
          <button 
            onClick={toggleSidebar}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={24} />
          </button>
        </div>

        {/* Search Bar for Mobile */}
        <div className="p-4 border-b border-purple-400">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-3 pl-4 pr-12 rounded-lg bg-white text-gray-800 font-dm-sans focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-primary-600">
              <HugeiconsIcon icon={Search01Icon} size={20} />
            </button>
          </div>
        </div>

        {/* Sidebar Menu Items */}
        <div className="p-4 space-y-4">
          {/* User Actions */}
          <div className="space-y-3">
            <button className="flex items-center gap-3 text-white hover:text-yellow-400 transition-colors w-full text-left p-2 rounded">
              <HugeiconsIcon icon={User02Icon} size={20} />
              <span className="font-dm-sans">My Panel</span>
            </button>
            <button className="flex items-center gap-3 text-white hover:text-yellow-400 transition-colors w-full text-left p-2 rounded">
              <HugeiconsIcon icon={HelpCircleIcon} size={20} />
              <span className="font-dm-sans">Help Guide</span>
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-purple-400 my-4"></div>

          {/* Navigation Items */}
          <div className="space-y-3">
            <button className="text-white font-dm-sans hover:text-yellow-400 transition-colors w-full text-left p-2 rounded">
              All Products
            </button>
            <button className="text-white font-anek-bangla hover:text-yellow-400 transition-colors w-full text-left p-2 rounded">
              অর্ডার ট্র্যাকিং
            </button>
            <button className="text-white font-anek-bangla hover:text-yellow-400 transition-colors w-full text-left p-2 rounded">
              ড্রপ-শিপিং গ্রুপ স্টাডি
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;