import { motion, useScroll, useTransform } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import Gallery from '../components/Gallery';
import './Pages.css';

const FeaturedProject = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper">
      <section className="ultra-hero">
        <motion.div className="ultra-hero-bg" style={{ y }}>
           <img src="/hero.png" alt="The Crown" />
        </motion.div>
        <div className="ultra-hero-content container">
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{delay: 0.6, duration: 1}}>
             <span className="subtitle" style={{color: 'white'}}>Flagship Development</span>
             <h1 className="heading-primary" style={{color: 'white'}}>THE CROWN</h1>
          </motion.div>
        </div>
      </section>

      <section className="spec-grid-section section-padding">
         <div className="container">
            <motion.div className="spec-grid" initial="initial" whileInView="animate" viewport={{once:true}}>
               <div className="spec-item">
                 <span className="label-text">Location</span>
                 <h3>South Delhi</h3>
               </div>
               <div className="spec-item">
                 <span className="label-text">Scale</span>
                 <h3>12,000 Sq.Ft</h3>
               </div>
               <div className="spec-item">
                 <span className="label-text">Completion</span>
                 <h3>2024</h3>
               </div>
               <div className="spec-item">
                 <span className="label-text">Architect</span>
                 <h3>UVSP Studio</h3>
               </div>
            </motion.div>

            <div className="featured-overview">
              <h2 className="heading-secondary">A Monument to Perfection</h2>
              <p className="body-text-large">
                Situated in the most exclusive enclave of New Delhi, THE CROWN redefines the silhouette of luxury living. Designed with the precise mathematics of Italian architecture and finished with curated travertine, brushed brass, and vast expanses of ultra-clear glass, it stands as our most ambitious project to date. Every line has meaning, every material tells a profound story of legacy.
              </p>
            </div>
         </div>
      </section>

      <Gallery />
    </motion.div>
  );
};
export default FeaturedProject;
