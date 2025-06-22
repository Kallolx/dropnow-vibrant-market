
import { useState } from 'react';
import { FireIcon, TrendingUpIcon, MoneyBag02Icon, Sun01Icon, SparklesIcon, Clock04Icon } from '@hugeicons/react';

const QuickTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: 'Hot Selling',
      bengaliTitle: 'হট সেলিং',
      icon: FireIcon,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 1,
      title: 'Ready to Boost',
      bengaliTitle: 'রেডি টু বুস্ট',
      icon: TrendingUpIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      title: 'Profitable Products',
      bengaliTitle: 'প্রফিটেবল প্রোডাক্ট',
      icon: MoneyBag02Icon,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 3,
      title: 'Summer Products',
      bengaliTitle: 'সামার প্রোডাক্ট',
      icon: Sun01Icon,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 4,
      title: 'New Arrived',
      bengaliTitle: 'নিউ এরাইভড',
      icon: SparklesIcon,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 5,
      title: 'Limited Offer',
      bengaliTitle: 'লিমিটেড অফার',
      icon: Clock04Icon,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 font-dm-sans mb-4">
            Quick Categories
          </h2>
          <p className="text-lg text-gray-600 font-anek-bangla">
            দ্রুত পণ্য খুঁজে নিন আমাদের বিশেষ ক্যাটাগরি থেকে
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.id ? 'ring-4 ring-primary-500 shadow-xl' : 'shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tab.color} opacity-90`} />
                <div className="relative z-10">
                  <div className="mb-3 flex justify-center">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-white font-dm-sans font-semibold text-sm mb-1">
                    {tab.title}
                  </h3>
                  <p className="text-white/90 font-anek-bangla text-xs">
                    {tab.bengaliTitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickTabs;
