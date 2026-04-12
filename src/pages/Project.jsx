import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import { Link } from 'react-router-dom';
import './Pages.css';

const Project = () => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper">
      
      {/* THE CROWN */}
      <section className="sticky-split-container">
         <div className="sticky-left">
            <img src="/project_1.png" alt="The Crown" className="sticky-image" />
         </div>
         <div className="scroll-right section-padding">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4, duration:0.8}} className="project-header">
               <span className="subtitle">Standard Project</span>
               <h1 className="heading-primary" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>THE CROWN</h1>
               <span className="label-text" style={{marginTop:'1rem', display:'block'}}>South Delhi</span>
            </motion.div>
            
            <div className="project-body">
              <h2 className="heading-secondary">Royal Elegance.</h2>
              <p className="body-text-large">
                The Crown represents the pinnacle of regal architecture mixed with modern minimalism. We sourced the finest ivory marble to ensure that both the exterior facade and the inner sanctums resonate with a singular, quiet luxury.
              </p>
              <br/>
              <Link to="/property/the-crown" className="btn btn-solid" style={{textDecoration: 'none', display: 'inline-block'}}>View Full Details</Link>
            </div>
            
            <div className="project-images-stack">
               <img src="/project_2.png" alt="Interior Detail" />
            </div>
         </div>
      </section>

      {/* RYHAN SQUARE */}
      <section className="sticky-split-container" style={{backgroundColor: 'var(--surface-color)'}}>
         <div className="sticky-left">
            <img src="/main-hero.png" alt="Ryhan Square" className="sticky-image" />
         </div>
         <div className="scroll-right section-padding">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}} className="project-header">
               <span className="subtitle">Standard Project</span>
               <h1 className="heading-primary" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>RYHAN SQUARE</h1>
               <span className="label-text" style={{marginTop:'1rem', display:'block'}}>Vasant Vihar</span>
            </motion.div>
            
            <div className="project-body">
              <h2 className="heading-secondary">Modern Serenity.</h2>
              <p className="body-text-large">
                Ryhan Square elegantly balances vast expanses of glass with robust concrete forms, blurring the lines between structural integrity and the surrounding lush environment.
              </p>
              <br/>
              <Link to="/property/ryhan-square" className="btn btn-solid" style={{textDecoration: 'none', display: 'inline-block'}}>View Full Details</Link>
            </div>
            
            <div className="project-images-stack">
               <img src="/contact.png" alt="Exterior Detail" />
            </div>
         </div>
      </section>

    </motion.div>
  );
};
export default Project;
