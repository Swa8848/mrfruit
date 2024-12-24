'use client';
import React from 'react';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductsSection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const products = [
    {
      title: 'Our Success Story',
      image: '/images/bottle.jpg',
      description: ' story of our journey.',
    },
    {
      title: 'Natural Nutrition Items',
       image: '/images/bottle.jpg',
      description: 'Healthy & natural product.',
    },
    {
      title: 'High Quality, Low Cost',
      image: '/images/bottle.jpg',
      description: 'Affordable quality products.',
    },
    {
      title: 'Tasty',
      image: '/images/bottle.jpg',
      description: 'Feels Fresh taste of grapes',
    },
  ];

  return (
    <section className="bg-[#281930] py-10 px-6">
      <h2 className="text-center text-3xl font-bold text-white mb-6">Rooted in Natural Goodness</h2>
      <p className="text-center text-gray-500 max-w-3xl mx-auto mb-8">
      Explore our range of grape juice products crafted to nourish your body and celebrate a healthier, more vibrant lifestyle.      </p>

      <Slider {...settings} className="max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#281930] mb-2">{product.title}</h3>
                <p className="text-sm text-[#85207e]">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductsSection;
