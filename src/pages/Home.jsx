import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
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
        description="UVSP Buildcon constructs ultra-luxury estates, 3BHKs, and bespoke villas across Vasant Kunj, Mehrauli, and South Delhi." 
      />
      <Hero />
      <About />
      <Projects />
      <WhyChooseUs />
    </motion.div>
  );
};

export default Home;
