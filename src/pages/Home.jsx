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
        title="Luxury Builder Floors &amp; Premium Properties in South Delhi" 
        description="UVSP Buildcon — 18+ years constructing luxury builder floors, premium 3 BHK residences, and bespoke homes in Vasant Kunj, Jaunapur, Mehrauli, and Chattarpur. 500+ happy families." 
        canonical="/"
        image="/the-crown-new.webp"
        faq={[
          {
            question: "Where are UVSP Buildcon luxury builder floors located in South Delhi?",
            answer: "UVSP Buildcon constructs luxury 3 BHK builder floors and private residential complexes in prime South Delhi sectors including Vasant Kunj, Jaunapur (Mandi Road corridor), Mehrauli, and Chattarpur."
          },
          {
            question: "Are builder floors by UVSP Buildcon freehold and legally clear?",
            answer: "Yes, every UVSP Buildcon project features clear land titles, registry-ready independent builder floors, earthquake-resistant RCC construction, and full compliance with municipal building bylaws."
          },
          {
            question: "What amenities are included in UVSP luxury residences?",
            answer: "Our developments feature high-speed elevators, stilt car parking, 24x7 gated security with CCTV, modular German/Italian kitchens, designer false ceilings, and smart home automation."
          },
          {
            question: "How can I book a private site visit?",
            answer: "You can schedule a private site visit directly on our website via the Book Visit button, request concierge advisory on the Contact page, or contact our team on WhatsApp at +91 88005 89785."
          }
        ]}
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
