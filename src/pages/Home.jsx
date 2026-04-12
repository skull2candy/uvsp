import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustStats from '../components/TrustStats';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      animate="animate"
      exit="exit"
    >
      <SEO 
        title="Luxury Real Estate Developers in New Delhi" 
        description="UVSP Buildcon — 18+ years constructing ultra-luxury estates, 3BHKs, and bespoke residences across Vasant Kunj, Mehrauli, and South Delhi. 500+ happy families." 
      />
      <Hero />
      <TrustStats />
      <About />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
    </motion.div>
  );
};

export default Home;
