
import { 
  SmartPhone01Icon, 
  Home01Icon, 
  LightbulbIcon, 
  AirConditioningIcon,
  Computer01Icon,
  GameController02Icon,
  CameraIcon,
  HeadphonesIcon,
  TshirtIcon,
  ShoeIcon,
  WatchIcon,
  BagIcon,
  BookIcon,
  Dumbbell02Icon,
  CarIcon,
  PlantIcon,
  Baby01Icon,
  PetIcon,
  BeautyIcon,
  KitchenUtensilsIcon,
  Medicine02Icon,
  ToolIcon,
  GiftIcon,
  PaintBoardIcon,
  MusicIcon,
  SoccerIcon,
  CyclingIcon,
  FishingIcon,
  TentIcon,
  ChairIcon,
  BedIcon,
  TableIcon,
  LampIcon,
  MirrorIcon,
  VaseIcon,
  ClockIcon,
  CalendarIcon,
  PhoneIcon,
  PrinterIcon
} from '@hugeicons/react';

const DropshipCollection = () => {
  const categories = [
    { name: 'A-Z Products', bengali: 'এ থেকে জেড প্রোডাক্ট', icon: BookIcon, color: 'from-blue-500 to-cyan-500' },
    { name: 'Electronics', bengali: 'ইলেকট্রনিক্স', icon: SmartPhone01Icon, color: 'from-purple-500 to-indigo-500' },
    { name: 'Household', bengali: 'গৃহস্থালী', icon: Home01Icon, color: 'from-green-500 to-emerald-500' },
    { name: 'LED Lights', bengali: 'এলইডি লাইট', icon: LightbulbIcon, color: 'from-yellow-500 to-orange-500' },
    { name: 'Fans', bengali: 'ফ্যান', icon: AirConditioningIcon, color: 'from-cyan-500 to-blue-500' },
    { name: 'Computers', bengali: 'কম্পিউটার', icon: Computer01Icon, color: 'from-indigo-500 to-purple-500' },
    { name: 'Gaming', bengali: 'গেমিং', icon: GameController02Icon, color: 'from-red-500 to-pink-500' },
    { name: 'Cameras', bengali: 'ক্যামেরা', icon: CameraIcon, color: 'from-teal-500 to-green-500' },
    { name: 'Audio', bengali: 'অডিও', icon: HeadphonesIcon, color: 'from-orange-500 to-red-500' },
    { name: 'Clothing', bengali: 'পোশাক', icon: TshirtIcon, color: 'from-pink-500 to-rose-500' },
    { name: 'Footwear', bengali: 'জুতা', icon: ShoeIcon, color: 'from-brown-500 to-amber-500' },
    { name: 'Watches', bengali: 'ঘড়ি', icon: WatchIcon, color: 'from-gray-500 to-slate-500' },
    { name: 'Bags', bengali: 'ব্যাগ', icon: BagIcon, color: 'from-emerald-500 to-teal-500' },
    { name: 'Books', bengali: 'বই', icon: BookIcon, color: 'from-amber-500 to-yellow-500' },
    { name: 'Fitness', bengali: 'ফিটনেস', icon: Dumbbell02Icon, color: 'from-red-600 to-orange-600' },
    { name: 'Automotive', bengali: 'অটোমোটিভ', icon: CarIcon, color: 'from-slate-600 to-gray-600' },
    { name: 'Plants', bengali: 'গাছপালা', icon: PlantIcon, color: 'from-green-600 to-lime-600' },
    { name: 'Baby Products', bengali: 'শিশু পণ্য', icon: Baby01Icon, color: 'from-pink-400 to-purple-400' },
    { name: 'Pet Supplies', bengali: 'পোষা প্রাণী', icon: PetIcon, color: 'from-orange-400 to-amber-400' },
    { name: 'Beauty', bengali: 'সৌন্দর্য', icon: BeautyIcon, color: 'from-rose-500 to-pink-500' },
    { name: 'Kitchen', bengali: 'রান্নাঘর', icon: KitchenUtensilsIcon, color: 'from-blue-600 to-indigo-600' },
    { name: 'Health', bengali: 'স্বাস্থ্য', icon: Medicine02Icon, color: 'from-green-400 to-emerald-400' },
    { name: 'Tools', bengali: 'যন্ত্রপাতি', icon: ToolIcon, color: 'from-gray-600 to-zinc-600' },
    { name: 'Gifts', bengali: 'উপহার', icon: GiftIcon, color: 'from-purple-400 to-indigo-400' },
    { name: 'Art Supplies', bengali: 'শিল্প সামগ্রী', icon: PaintBoardIcon, color: 'from-teal-400 to-cyan-400' },
    { name: 'Music', bengali: 'সঙ্গীত', icon: MusicIcon, color: 'from-violet-500 to-purple-500' },
    { name: 'Sports', bengali: 'খেলাধুলা', icon: SoccerIcon, color: 'from-lime-500 to-green-500' },
    { name: 'Cycling', bengali: 'সাইক্লিং', icon: CyclingIcon, color: 'from-blue-400 to-cyan-400' },
    { name: 'Fishing', bengali: 'মাছ ধরা', icon: FishingIcon, color: 'from-cyan-600 to-blue-600' },
    { name: 'Camping', bengali: 'ক্যাম্পিং', icon: TentIcon, color: 'from-forest-500 to-green-600' },
    { name: 'Chairs', bengali: 'চেয়ার', icon: ChairIcon, color: 'from-brown-400 to-amber-400' },
    { name: 'Beds', bengali: 'বিছানা', icon: BedIcon, color: 'from-indigo-400 to-blue-400' },
    { name: 'Tables', bengali: 'টেবিল', icon: TableIcon, color: 'from-amber-600 to-orange-600' },
    { name: 'Lamps', bengali: 'বাতি', icon: LampIcon, color: 'from-yellow-400 to-amber-400' },
    { name: 'Mirrors', bengali: 'আয়না', icon: MirrorIcon, color: 'from-slate-400 to-gray-400' },
    { name: 'Vases', bengali: 'ফুলদানী', icon: VaseIcon, color: 'from-rose-400 to-pink-400' },
    { name: 'Clocks', bengali: 'ঘড়ি', icon: ClockIcon, color: 'from-zinc-500 to-slate-500' },
    { name: 'Calendar', bengali: 'ক্যালেন্ডার', icon: CalendarIcon, color: 'from-red-400 to-orange-400' },
    { name: 'Phones', bengali: 'ফোন', icon: PhoneIcon, color: 'from-blue-500 to-purple-500' },
    { name: 'Printers', bengali: 'প্রিন্টার', icon: PrinterIcon, color: 'from-gray-500 to-zinc-500' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 font-dm-sans mb-4">
            Dropship Exclusive Collection
          </h2>
          <p className="text-lg text-gray-600 font-anek-bangla">
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
                      <IconComponent size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-gray-800 font-dm-sans font-semibold text-xs mb-1 group-hover:text-primary-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 font-anek-bangla text-xs group-hover:text-primary-600 transition-colors">
                    {category.bengali}
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
