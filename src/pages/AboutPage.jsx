import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Pages.css';

const AboutPage = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => console.log("Video Autoplay Error:", err));
    }
  }, []);

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
      <SEO 
        title="Our Philosophy" 
        description="Discover the architectural DNA and ultra-luxury construction philosophy of UVSP Buildcon." 
      />
      
      {/* 1. CINEMATIC MANIFESTO HERO */}
      <section className="ultra-hero" style={{height: '100vh'}}>
        <motion.div className="ultra-hero-bg" style={{ y }}>
           <video 
             ref={videoRef}
             autoPlay 
             muted 
             defaultMuted
             playsInline 
             poster="/hero.png"
             style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} 
           >
              <source src="/urban_plot.mp4" type="video/mp4" />
           </video>
           {/* Black tint over the video */}
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.65)', zIndex: 1 }}></div>
        </motion.div>
        
        <div className="ultra-hero-content container" style={{paddingBottom: '20vh', backgroundColor: 'transparent', position: 'relative', zIndex: 10}}>
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1]}} style={{backgroundColor: 'transparent'}}>
             <span className="subtitle" style={{color: 'white', letterSpacing: '0.4em', backgroundColor: 'transparent'}}>Our Manifesto</span>
             <h1 className="heading-primary" style={{color: 'white', fontSize: 'clamp(3.5rem, 8vw, 7rem)', margin: '1.5rem 0', lineHeight: '1.1', backgroundColor: 'transparent'}}>
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
                  <h2>18+</h2>
                  <p>Years of Excellence</p>
               </motion.div>
               <motion.div variants={fadeInUp} className="metric-box">
                  <h2>500+</h2>
                  <p>Happy Families</p>
               </motion.div>
            </motion.div>

            <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.4}} viewport={{once:true}} style={{maxWidth: '800px', margin: '6rem auto 0', textAlign: 'center'}}>
                 <p className="body-text-large">
                   At UVSP Buildcon, we believe that true luxury lies in the unseen details. Our architectural vision is rooted in timeless elegance—where precise mathematics meet raw, profound natural materials. For over 18 years, we have pushed the boundaries of bespoke residential development right here in New Delhi. Every foundation we establish, and every marble surface we meticulously curate, stands as an uncompromising testament to absolute quality, generational permanence, and the sophisticated lifestyles of the 500+ families who now call our properties home.
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

      {/* 4. KINETIC PARALLAX CALL TO ACTION */}
      <section className="cto-statement-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', backgroundImage: 'url(/cta-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', borderTop: 'none' }}>
         {/* Premium Dark Overlay */}
         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.65)', zIndex: 1 }} />
         
         <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', padding: '0 2rem' }}>
           <motion.div 
             className="glass-cto-card"
             initial={{ opacity: 0, scale: 0.95, y: 50 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             viewport={{ once: true, margin: "-10%" }}
           >
             <span className="subtitle" style={{color: 'var(--accent-color)', letterSpacing: '0.4em'}}>Beyond Architecture</span>
             <h2 className="heading-primary" style={{color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 5rem)', margin: '1.5rem 0 3rem', lineHeight: '1.1'}}>
               Construct Your Legacy.
             </h2>
             <Link to="/contact" className="btn-luxury-glowing" style={{textDecoration: 'none'}}>
                <span>Speak With Advisory</span>
                <div className="glow-sweep"></div>
             </Link>
           </motion.div>
         </div>
      </section>

    </motion.div>
  );
};

export default AboutPage;
