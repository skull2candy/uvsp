import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import './Pages.css';

const AreaPage = ({ areaName, title, description, keywords, heroSubtitle, content }) => {
  return (
    <motion.div
      className="area-page-container pt-32"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SEO 
        title={title}
        description={description}
        canonical={`/builder-floors-${areaName.toLowerCase().replace(' ', '-')}`}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair mb-6 text-white">
            Luxury Builder Floors in {areaName}
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light">
            {heroSubtitle}
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-4xl mx-auto">
          {content.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-3xl font-playfair text-white mb-6 border-b border-neutral-800 pb-4">
                {section.heading}
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <FinalCTA />
    </motion.div>
  );
};

export default AreaPage;
