import { 
  SmartPhone01Icon, 
  Home01Icon, 
  Idea01Icon, 
  ComputerIcon,
  GameController01Icon,
  Camera01Icon,
  HeadphonesIcon,
  Shirt01Icon,
  RunningShoesIcon,
  Watch01Icon,
  Bug02Icon,
  Book02Icon,
  Dumbbell02Icon,
  Car01Icon,
  Plant02Icon,
  Baby01Icon,
  SnailIcon,
  Tick02Icon,
  SpatulaIcon,
  Medicine02Icon,
  Wrench01Icon,
  GiftIcon,
  PaintBoardIcon,
  Mic02Icon,
  FootballIcon,
  Clapping01Icon,
  Dish01Icon,
  Pen01Icon,
  Chair02Icon,
  BedIcon,
  Table02Icon,
  Lamp02Icon,
  MirrorIcon,
  Award01Icon,
  Clock01Icon,
  Calendar03Icon,
  SmartPhone02Icon,
  PrinterIcon,
  Fan01Icon
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const DropshipCollection = () => {
  const categories = [
    { name: 'A-Z Products', bengali: '(A-Z) প্রোডাক্ট', icon: Book02Icon, color: 'from-blue-500 to-cyan-500', count: '1824' },
    { name: 'Electronics', bengali: 'ইলেকট্রনিক্স', icon: SmartPhone01Icon, color: 'from-purple-500 to-indigo-500', count: 230 },
    { name: 'Household', bengali: 'গৃহস্থালী', icon: Home01Icon, color: 'from-green-500 to-emerald-500', count: 154 },
    { name: 'LED Lights', bengali: 'এলইডি লাইট', icon: Idea01Icon, color: 'from-yellow-500 to-orange-500', count: 89 },
    { name: 'Fans', bengali: 'ফ্যান', icon: Fan01Icon, color: 'from-cyan-500 to-blue-500', count: 43 },
    { name: 'Computers', bengali: 'কম্পিউটার', icon: ComputerIcon, color: 'from-indigo-500 to-purple-500', count: 97 },
    { name: 'Gaming', bengali: 'গেমিং', icon: GameController01Icon, color: 'from-red-500 to-pink-500', count: 65 },
    { name: 'Cameras', bengali: 'ক্যামেরা', icon: Camera01Icon, color: 'from-teal-500 to-green-500', count: 36 },
    { name: 'Audio', bengali: 'অডিও', icon: HeadphonesIcon, color: 'from-orange-500 to-red-500', count: 78 },
    { name: 'Clothing', bengali: 'পোশাক', icon: Shirt01Icon, color: 'from-pink-500 to-rose-500', count: 312 },
    { name: 'Footwear', bengali: 'জুতা', icon: RunningShoesIcon, color: 'from-blue-600 to-indigo-600', count: 145 },
    { name: 'Watches', bengali: 'ঘড়ি', icon: Watch01Icon, color: 'from-gray-500 to-slate-500', count: 87 },
    { name: 'Bags', bengali: 'ব্যাগ', icon: Bug02Icon, color: 'from-emerald-500 to-teal-500', count: 92 },
    { name: 'Books', bengali: 'বই', icon: Book02Icon, color: 'from-amber-500 to-yellow-500', count: 203 },
    { name: 'Fitness', bengali: 'ফিটনেস', icon: Dumbbell02Icon, color: 'from-red-600 to-orange-600', count: 74 },
    { name: 'Automotive', bengali: 'অটোমোটিভ', icon: Car01Icon, color: 'from-slate-600 to-gray-600', count: 56 },
    { name: 'Plants', bengali: 'গাছপালা', icon: Plant02Icon, color: 'from-green-600 to-lime-600', count: 38 },
    { name: 'Baby Products', bengali: 'শিশু পণ্য', icon: Baby01Icon, color: 'from-pink-400 to-purple-400', count: 124 },
    { name: 'Pet Supplies', bengali: 'পোষা প্রাণী', icon: SnailIcon, color: 'from-orange-400 to-amber-400', count: 67 },
    { name: 'Beauty', bengali: 'সৌন্দর্য', icon: Tick02Icon, color: 'from-rose-500 to-pink-500', count: 189 },
    { name: 'Kitchen', bengali: 'রান্নাঘর', icon: SpatulaIcon, color: 'from-blue-600 to-indigo-600', count: 156 },
    { name: 'Health', bengali: 'স্বাস্থ্য', icon: Medicine02Icon, color: 'from-green-400 to-emerald-400', count: 98 },
    { name: 'Tools', bengali: 'যন্ত্রপাতি', icon: Wrench01Icon, color: 'from-gray-600 to-zinc-600', count: 143 },
    { name: 'Gifts', bengali: 'উপহার', icon: GiftIcon, color: 'from-purple-400 to-indigo-400', count: 276 },
    { name: 'Art Supplies', bengali: 'শিল্প সামগ্রী', icon: PaintBoardIcon, color: 'from-teal-400 to-cyan-400', count: 52 },
    { name: 'Music', bengali: 'সঙ্গীত', icon: Mic02Icon, color: 'from-violet-500 to-purple-500', count: 71 },
    { name: 'Sports', bengali: 'খেলাধুলা', icon: FootballIcon, color: 'from-lime-500 to-green-500', count: 108 },
    { name: 'Cycling', bengali: 'সাইক্লিং', icon: Clapping01Icon, color: 'from-blue-400 to-cyan-400', count: 29 },
    { name: 'Fishing', bengali: 'মাছ ধরা', icon: Dish01Icon, color: 'from-cyan-600 to-blue-600', count: 34 },
    { name: 'Camping', bengali: 'ক্যাম্পিং', icon: Pen01Icon, color: 'from-blue-600 to-indigo-600', count: 47 },
    { name: 'Chairs', bengali: 'চেয়ার', icon: Chair02Icon, color: 'from-gray-600 to-zinc-600', count: 76 },
    { name: 'Beds', bengali: 'বিছানা', icon: BedIcon, color: 'from-indigo-400 to-blue-400', count: 53 },
    { name: 'Tables', bengali: 'টেবিল', icon: Table02Icon, color: 'from-amber-600 to-orange-600', count: 68 },
    { name: 'Lamps', bengali: 'বাতি', icon: Lamp02Icon, color: 'from-yellow-400 to-amber-400', count: 84 },
    { name: 'Mirrors', bengali: 'আয়না', icon: MirrorIcon, color: 'from-slate-400 to-gray-400', count: 25 },
    { name: 'Vases', bengali: 'ফুলদানী', icon: Award01Icon, color: 'from-rose-400 to-pink-400', count: 31 },
    { name: 'Clocks', bengali: 'ঘড়ি', icon: Clock01Icon, color: 'from-zinc-500 to-slate-500', count: 42 },
    { name: 'Calendar', bengali: 'ক্যালেন্ডার', icon: Calendar03Icon, color: 'from-red-400 to-orange-400', count: 18 },
    { name: 'Phones', bengali: 'ফোন', icon: SmartPhone02Icon, color: 'from-blue-500 to-purple-500', count: 95 },
    { name: 'Printers', bengali: 'প্রিন্টার', icon: PrinterIcon, color: 'from-gray-500 to-zinc-500', count: 22 }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 font-dm-sans mb-2 -tracking-[0.04em]">
            Dropship Exclusive Collection
          </h2>
          <p className="text-lg text-gray-500 font-anek-bangla font-semibold ">
            আমাদের এক্সক্লুসিভ কালেকশন থেকে পছন্দের পণ্য বেছে নিন
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                className="group relative overflow-hidden rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border-2 border-gray-100 hover:border-primary-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="mb-3 flex justify-center">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${category.color}`}>
                      <HugeiconsIcon icon={IconComponent} size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-black font-anek-bangla text-md font-medium group-hover:text-primary-600 transition-colors mb-1">
                    {category.bengali}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    ({typeof category.count === 'string' ? category.count : `${category.count}`})
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

export default DropshipCollection;