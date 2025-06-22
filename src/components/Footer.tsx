import {
  SmartPhone01Icon,
  Mail01Icon,
  Location01Icon,
  Facebook02Icon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <div className="inline-block">

            <h2 className="text-6xl md:text-5xl font-bold font-anek-bangla">
            ড্রপ<span className="text-yellow-400">নাও</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold font-dm-sans mb-4 text-yellow-400">
                About Us
              </h3>
              <p className="text-gray-300 font-dm-sans leading-relaxed">
                Your premier dropshipping platform in Bangladesh. We connect
                suppliers with retailers to build successful businesses
                together.
              </p>
              <p className="text-gray-300 font-anek-bangla mt-2">
                বাংলাদেশের শীর্ষস্থানীয় ড্রপশিপিং প্ল্যাটফর্ম
              </p>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="p-2 bg-primary-600 hover:bg-yellow-500 rounded-full transition-colors duration-300"
              >
                <HugeiconsIcon icon={Facebook02Icon} size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-600 hover:bg-yellow-500 rounded-full transition-colors duration-300"
              >
                <HugeiconsIcon icon={InstagramIcon} size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-600 hover:bg-yellow-500 rounded-full transition-colors duration-300"
              >
                <HugeiconsIcon icon={TwitterIcon} size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-600 hover:bg-yellow-500 rounded-full transition-colors duration-300"
              >
                <HugeiconsIcon icon={YoutubeIcon} size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold font-dm-sans mb-6 text-yellow-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-dm-sans"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-anek-bangla"
                >
                  অর্ডার ট্র্যাকিং
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-dm-sans"
                >
                  Join as Dropshipper
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-dm-sans"
                >
                  Help Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-anek-bangla"
                >
                  ড্রপশিপিং গাইড
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-semibold font-dm-sans mb-6 text-yellow-400">
              Popular Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-dm-sans"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-anek-bangla"
                >
                  গৃহস্থালী
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-dm-sans"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-anek-bangla"
                >
                  সৌন্দর্য
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-dm-sans"
                >
                  Health & Beauty
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold font-dm-sans mb-6 text-yellow-400">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <HugeiconsIcon
                  icon={SmartPhone01Icon}
                  size={20}
                  className="text-yellow-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300 font-dm-sans">09648500500</p>
                  <p className="text-gray-400 text-sm font-dm-sans">
                    24/7 Support
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={20}
                  className="text-yellow-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300 font-dm-sans">
                    support@dropnow.com
                  </p>
                  <p className="text-gray-400 text-sm font-dm-sans">
                    Email Support
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={20}
                  className="text-yellow-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300 font-dm-sans">
                    Dhaka, Bangladesh
                  </p>
                  <p className="text-gray-400 text-sm font-anek-bangla">
                    ঢাকা, বাংলাদেশ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-600 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold font-dm-sans mb-4 text-yellow-400">
              Stay Updated
            </h4>
            <p className="text-gray-300 font-dm-sans mb-4">
              Subscribe to get latest products and offers
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-3 px-4 rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-primary-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-500 hover:bg-yellow-400 text-primary-900 font-semibold py-3 px-6 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-600 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 font-dm-sans">
              © 2024 DropNow. All rights reserved. |
              <span className="font-anek-bangla"> সর্বস্বত্ব সংরক্ষিত</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors font-dm-sans text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors font-dm-sans text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors font-anek-bangla text-sm"
              >
                নিয়মাবলী
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;