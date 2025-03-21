
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Coaches from '@/components/Coaches';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll functionality
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
          
          // Update URL without reload
          window.history.pushState(null, '', target.hash);
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Coaches />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
