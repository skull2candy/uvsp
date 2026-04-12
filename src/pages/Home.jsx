import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustStats from '../components/TrustStats';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import FinalCTA from '../components/FinalCTA';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      animate="animate"
      exit="exit"
    >
      <SEO 
        title="Luxury Builder Floors & Premium Properties in South Delhi" 
        description="UVSP Buildcon — 18+ years constructing luxury builder floors, premium homes, and bespoke residences in Vasant Kunj, Mehrauli, Chattarpur and South Delhi. 500+ happy families." 
        canonical="/"
      />
      <Hero />
      <TrustStats />
      <About />
      <Projects />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <FinalCTA />
    </motion.div>
  );
};

export default Home;
