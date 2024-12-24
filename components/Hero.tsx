'use client'
import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero: FC = () => {
  return (
    <section data-aos="fade-up"  className="bg-[#281930] px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Animated heading */}
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-[#ffe5b5] mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            {"The Real Taste Of Grapes".split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.4 + index * 0.03,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
           No Colours, No Additives, 100% Natural
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="bg-[#85207e] text-white px-8 py-3 rounded-full hover:bg-[#874983] transition-colors"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Shop now
          </motion.button>

          {/* Products Image */}
          <motion.div
            className="mt-12 relative"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative h-[300px] md:h-[400px] mx-auto">
              <Image
                src="/images/front.png" // Replace with your actual image
                alt="KOS Products"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Decorative elements */}
        
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;