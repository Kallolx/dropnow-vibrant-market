import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeTab, setActiveTab] = useState(0);

  // Sample portrait images - in a real app, these would be your actual product images
  const sliderImages = [
    "https://dropshop.com.bd/wp-content/uploads/2023/10/Home-Banner-Drop2-1.webp",
    "https://dropshop.com.bd/wp-content/uploads/2023/10/Home-Banner-Drop1-1.webp",
    "https://dropshop.com.bd/wp-content/uploads/2023/10/Home-Banner-Drop3-1.webp",
    "https://dropshop.com.bd/wp-content/uploads/2023/10/Home-Banner-Drop6.webp",
    "https://dropshop.com.bd/wp-content/uploads/2023/10/Home-Banner-Drop7.webp",
    "https://dropshop.com.bd/wp-content/uploads/2023/10/Home-Banner-Drop8.webp",
  ];

  const tabs = [
    {
      id: 0,
      title: "Hot Selling",
      bengaliTitle: "হট সেলিং",
    },
    {
      id: 1,
      title: "Ready to Boost",
      bengaliTitle: "রেডি টু বুস্ট",
    },
    {
      id: 2,
      title: "Profitable Products",
      bengaliTitle: "প্রফিটেবল প্রোডাক্ট",
    },
    {
      id: 3,
      title: "Summer Products",
      bengaliTitle: "সামার প্রোডাক্ট",
    },
    {
      id: 4,
      title: "New Arrived",
      bengaliTitle: "নিউ এরাইভড",
    },
    {
      id: 5,
      title: "Limited Offer",
      bengaliTitle: "লিমিটেড অফার",
    },
  ];

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={8}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSwiper={setSwiper}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} size={24} />
      </button>

      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <HugeiconsIcon icon={ArrowRight01Icon} size={24} />
      </button>
    </div>
  );
};

export default HeroSlider;