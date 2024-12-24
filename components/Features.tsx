'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Feature } from '../types';

const features: Feature[] = [
  { title: 'No Preservatives', description: 'Made with pure natural ingredients', icon: '🍇' },
  { title: 'No Colours', description: 'Boost your daily wellness routine', icon: '❌' },
  { title: 'No Additives', description: 'Natural energy enhancement', icon: '💚' },
];

const Features: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-[#281930] to-[#351d42]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Features</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover what makes us special. Quality products designed to improve your health and well-being.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-3xl hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
          >
            <div className="flex items-center justify-center h-16 w-16 bg-[#fde8cd] text-3xl rounded-full mb-6 mx-auto">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-[#281930] text-center mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
