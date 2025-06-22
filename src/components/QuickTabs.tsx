import { useState } from 'react';
import { motion } from 'framer-motion';

const QuickTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, bengaliTitle: 'হট সেলিং', color: 'bg-red-700' },
    { id: 1, bengaliTitle: 'রেডি টু বুস্ট', color: 'bg-purple-500' },
    { id: 2, bengaliTitle: 'প্রফিটেবল প্রোডাক্ট', color: 'bg-yellow-500' },
    { id: 3, bengaliTitle: 'সামার প্রোডাক্ট', color: 'bg-green-500' },
    { id: 4, bengaliTitle: 'নিউ এরাইভড', color: 'bg-purple-500' },
    { id: 5, bengaliTitle: 'লিমিটেড অফার', color: 'bg-gray-500' }
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center justify-center rounded-xl p-8 text-white ${tab.color}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="text-center">
                <h3 className="font-anek-bangla font-semibold tracking-tighter text-2xl md:text-4xl">
                  {tab.bengaliTitle}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickTabs;
