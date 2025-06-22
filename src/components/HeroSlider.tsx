
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/react';
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSlider = () => {
  const [swiper, setSwiper] = useState<any>(null);

  // Sample portrait images - in a real app, these would be your actual product images
  const sliderImages = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
    "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200"
  ];

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
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
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowLeft01Icon size={24} />
      </button>

      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowRight01Icon size={24} />
      </button>
    </div>
  );
};

export default HeroSlider;
