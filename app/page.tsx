import { FC } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Section from '../components/section';
import Footer from '../components/footer';




const Home: FC = () => {
  return (
    <main className="min-h-screen bg-[#281930]">
      <Navbar />
      <Hero />
      <Section/>
      <Features />
      <Products />
      <Footer />
      
    </main>
  );
};

export default Home;