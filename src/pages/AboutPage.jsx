import { motion, useScroll, useTransform } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import { Link } from 'react-router-dom';
import './Pages.css';

const AboutPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  // Stagger configurations
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper" style={{position: 'relative'}}>
      
      {/* 1. CINEMATIC MANIFESTO HERO */}
      <section className="ultra-hero" style={{height: '100vh'}}>
        <motion.div className="ultra-hero-bg" style={{ y }}>
           <video 
             autoPlay 
             loop 
             muted 
             playsInline 
             style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
           >
              <source src="/urban_plot.mp4" type="video/mp4" />
           </video>
           {/* Black tint over the video */}
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.65)' }}></div>
        </motion.div>
        
        <div className="ultra-hero-content container" style={{paddingBottom: '20vh'}}>
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1]}}>
             <span className="subtitle" style={{color: 'white', letterSpacing: '0.4em'}}>Our Manifesto</span>
             <h1 className="heading-primary" style={{color: 'white', fontSize: 'clamp(3.5rem, 8vw, 7rem)', margin: '1.5rem 0', lineHeight: '1.1'}}>
               Redefining Luxury Through Uncompromising Execution.
             </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. METRICS OF PRESTIGE */}
      <section className="metrics-section section-padding">
         <div className="container">
            <motion.div className="metrics-grid" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once:true}}>
               <motion.div variants={fadeInUp} className="metric-box">
                  <h2>30+</h2>
                  <p>Bespoke Projects Delivered</p>
               </motion.div>
               <motion.div variants={fadeInUp} className="metric-box">
                  <h2>$100M+</h2>
                  <p>Portfolio Development Value</p>
               </motion.div>
               <motion.div variants={fadeInUp} className="metric-box">
                  <h2>1%</h2>
                  <p>Elite Material Sourcing Grid</p>
               </motion.div>
            </motion.div>

            <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.4}} viewport={{once:true}} style={{maxWidth: '800px', margin: '6rem auto 0', textAlign: 'center'}}>
                 <p className="body-text-large">
                   At UVSP Buildcon, we believe that true luxury lies in the unseen details. Our architectural vision is rooted in timeless elegance—where precise mathematics meet raw, profound natural materials. 
                 </p>
            </motion.div>
         </div>
      </section>

      {/* 3. ASSYMETRIC Z-PATTERN LEADERSHIP */}
      <section className="section-padding" style={{backgroundColor: 'var(--surface-color)', borderTop: '1px solid var(--border-color)', overflow: 'hidden'}}>
         <div className="container">
           
           <div style={{textAlign: 'center', marginBottom: '10rem'}}>
             <span className="subtitle">The Board</span>
             <h2 className="heading-secondary" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>Executive Leadership</h2>
           </div>

           <div className="z-leadership-grid">
              
              {/* DIRECTOR 1: Urvashi (Image Left, Text Overlapping Right) */}
              <motion.div className="z-director-row" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true, margin:"-20%"}} transition={{duration:1.2, ease:[0.16, 1, 0.3, 1]}}>
                 <div className="z-image-container left-image">
                    <img src="/urvashi.png" alt="Director Urvashi Verma" onError={(e) => { e.target.src = '/project_3.png' }} />
                 </div>
                 <motion.div className="z-text-box right-overlap" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:1, delay:0.3}}>
                   <span className="label-text" style={{color: 'var(--accent-color)', marginBottom: '1rem'}}>Managing Director</span>
                   <h3 className="heading-secondary" style={{marginBottom: '2rem', fontSize: '3rem', whiteSpace: 'nowrap'}}>Urvashi Verma</h3>
                   <p className="body-text-large">
                     Urvashi commands the strategic vision of UVSP Buildcon, merging high-end architectural philosophy with unparalleled operational execution. Her relentless pursuit of aesthetic perfection ensures every square foot we deliver fundamentally redefines the domestic landscape of luxury realism.
                   </p>
                 </motion.div>
              </motion.div>

              {/* DIRECTOR 2: Satya (Image Right, Text Overlapping Left) */}
              <motion.div className="z-director-row reverse" style={{marginTop: '12rem'}} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true, margin:"-20%"}} transition={{duration:1.2, ease:[0.16, 1, 0.3, 1]}}>
                 <div className="z-image-container right-image">
                    <img src="/satya.png" alt="Director Satya Pandey" onError={(e) => { e.target.src = '/hero.png' }} />
                 </div>
                 <motion.div className="z-text-box left-overlap" initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:1, delay:0.3}}>
                   <span className="label-text" style={{color: 'var(--accent-color)', marginBottom: '1rem'}}>Executive Director</span>
                   <h3 className="heading-secondary" style={{marginBottom: '2rem', fontSize: '3rem', whiteSpace: 'nowrap'}}>Satya Pandey</h3>
                   <p className="body-text-large">
                     Satya brings ruthless precision and infrastructural authority to the board. By synergizing elite development networks with rigorous engineering frameworks, he guarantees that every UVSP monolithic structure is built to endure seamlessly across centuries.
                   </p>
                 </motion.div>
              </motion.div>

           </div>
         </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="cto-statement-section" style={{borderTop: 'none'}}>
         <div className="container" style={{textAlign: 'center'}}>
           <h2 className="heading-primary" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem'}}>Construct Your Legacy.</h2>
           <Link to="/contact" className="btn btn-solid" style={{textDecoration: 'none', padding: '1.2rem 3rem'}}>Speak With Advisory</Link>
         </div>
      </section>

    </motion.div>
  );
};

export default AboutPage;
