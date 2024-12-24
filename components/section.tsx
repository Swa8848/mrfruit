'use client';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Section: FC = () => {
  const items = [
    {
      title: 'Natural Nutrition Items',
      description:
        'Grape juice is a refreshing and nutrient-rich beverage made from the extraction of juice from fresh, ripe grapes.',
      image: '/images/juice.jpg', // Replace with the actual path
      button: true
    },
    {
     title: 'Natural Nutrition Items',
      description:
      'Grape juice is a refreshing and nutrient-rich beverage made from the extraction of juice from fresh, ripe grapes.',
      image: '/images/bottle.jpg', // Replace with the actual path
      button: true
    },
    {
      title: 'Natural Nutrition Items',
      description:
      'Grape juice is a refreshing and nutrient-rich beverage made from the extraction of juice from fresh, ripe grapes.',
      image: '/images/mr.png', // Replace with the actual path
        button: true
    },
    {
      title: 'High Quality, Low Cost',
      description:
      'Grape juice is a refreshing and nutrient-rich beverage made from the extraction of juice from fresh, ripe grapes.',
      image: '/images/bottle.jpg', // Replace with the actual path

      button: true
    }
  ];

  return (
    <div className="bg-[#281930] py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Naturally Delicious, Purely Refreshing</h2>
        <p className="text-gray-500 mt-2">
        Experience the rich taste and health benefits of our grape juice, made to energize your day and support your well-being naturally.        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-4 gap-4 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg ${
              index === 2 ? 'bg-[#351d42] text-white' : ''
            }`}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className={`p-4 ${index === 2 ? '' : 'bg-[#351d42] text-white'}`}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              {item.description && <p className="text-sm mt-2">{item.description}</p>}
              {item.button && (
                <button className="mt-4 bg-[#85207e] text-white px-4 py-2 rounded hover:bg-[#874983]">
                 Order Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides
          loop
          className="max-w-sm mx-auto"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rounded-lg overflow-hidden shadow-lg ${
                  index === 2 ? 'bg-[#351d42] text-white' : ''
                }`}
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className={`p-4 ${index === 2 ? '' : 'bg-[#351d42] text-white'}`}>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  {item.description && <p className="text-sm mt-2">{item.description}</p>}
                  {item.button && (
                    <button className="mt-4 bg-[#85207e] text-white px-4 py-2 rounded hover:bg-[#874983]">
                     Order Now
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section;
