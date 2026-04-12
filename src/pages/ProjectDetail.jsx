import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import { CheckCircle2, Home, Shield, Car, Wind, Wine } from 'lucide-react';
import Gallery from '../components/Gallery';
import './Pages.css';

const propertyData = {
  'the-crown': {
    title: 'THE CROWN',
    subtitle: 'Royal Elegance',
    hero: '/the-crown-new.png',
    location: 'Vasant Kunj',
    scale: '15,000 Sq.Ft',
    completion: '2025',
    architect: 'UVSP Studio',
    pricing: '₹45 Cr',
    desc: 'The Crown represents the pinnacle of regal architecture mixed with modern minimalism. Designed with the precise mathematics of Italian proportions, this massive estate relies on negative space and pure monolithic forms to command authority rather than excess ornamentation.',
    desc2: 'We sourced the finest ivory marble directly from Carrara to ensure that both the exterior facade and the inner sanctums resonate with a singular, quiet luxury. Every brass fixture, every piece of joinery, and every sweeping pane of ultra-clear glass was engineered to absolute perfection.',
    amenities: [
      { icon: <Wind size={32} strokeWidth={1} />, title: 'HVAC Climate Control' },
      { icon: <Home size={32} strokeWidth={1} />, title: 'Private Elevator' },
      { icon: <Shield size={32} strokeWidth={1} />, title: 'Biometric Security' },
      { icon: <Wine size={32} strokeWidth={1} />, title: 'Temperature Controlled Cellar' },
      { icon: <Car size={32} strokeWidth={1} />, title: '4-Car Private Basement' },
      { icon: <CheckCircle2 size={32} strokeWidth={1} />, title: 'Imported Marble' }
    ],
    floorPlanImg: '/project_2.png'
  },
  'ryhan-square': {
    title: 'RYHAN SQUARE',
    subtitle: 'Modern Serenity',
    hero: '/ryhan-square-new.png',
    location: 'Vasant Kunj',
    scale: '12,000 Sq.Ft',
    completion: '2024',
    architect: 'UVSP Studio',
    pricing: '₹32 Cr',
    desc: 'Ryhan Square elegantly balances vast expanses of glass with robust concrete forms, blurring the lines between structural integrity and the surrounding lush environment. It is a home built not just to exist within nature, but to invite it completely inside.',
    desc2: 'The sprawling layouts prioritize natural light, ensuring that from sunrise to sunset, the interiors are bathed in a soft, cinematic glow. The execution of the raw concrete against polished wood creates an atmosphere of grounding tranquility.',
    amenities: [
      { icon: <Wind size={32} strokeWidth={1} />, title: 'VRV Air Conditioning' },
      { icon: <Home size={32} strokeWidth={1} />, title: 'Double Height Lobby' },
      { icon: <Shield size={32} strokeWidth={1} />, title: '24/7 Concierge' },
      { icon: <Wine size={32} strokeWidth={1} />, title: 'Rooftop Lounge' },
      { icon: <Car size={32} strokeWidth={1} />, title: 'EV Charging Stack' },
      { icon: <CheckCircle2 size={32} strokeWidth={1} />, title: 'Bespoke Joinery' }
    ],
    floorPlanImg: '/hero.png'
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const data = propertyData[id];
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const watermarkY = useTransform(scrollY, [0, 3000], [0, -600]);

  if (!data) {
    return (
      <div className="page-wrapper section-padding" style={{textAlign: 'center', paddingTop: '200px', minHeight: '100vh'}}>
        <h1 className="heading-secondary">Property Not Found</h1>
        <Link to="/" className="btn btn-solid" style={{marginTop: '2rem', textDecoration: 'none'}}>Return Home</Link>
      </div>
    );
  }

  // Stagger configurations
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper" style={{position: 'relative', overflow: 'hidden'}}>
      
      {/* BACKGROUND WATERMARK */}
      <motion.div className="architectural-watermark" style={{ y: watermarkY }}>
        UVSP
      </motion.div>

      {/* 1. HERO SECTION */}
      <section className="ultra-hero">
        <motion.div className="ultra-hero-bg" style={{ y }}>
           <img src={data.hero} alt={data.title} />
        </motion.div>
        <div className="ultra-hero-content container">
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1]}}>
             <span className="subtitle" style={{color: 'white', letterSpacing: '0.3em'}}>{data.subtitle}</span>
             <h1 className="heading-primary" style={{color: 'white', fontSize: 'clamp(3rem, 8vw, 7rem)', margin: '1rem 0'}}>{data.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL SPLIT (Specs & Narrative) */}
      <section className="editorial-split-section section-padding">
         <div className="container editorial-split-container">
            
            {/* Left Rail: Specs */}
            <div className="editorial-rail">
               <motion.div className="sticky-specs" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once: true, margin: "-100px"}}>
                 <motion.div variants={fadeInUp} className="rail-spec-item">
                   <span className="label-text">Location</span>
                   <h3>{data.location}</h3>
                 </motion.div>
                 <motion.div variants={fadeInUp} className="rail-spec-item">
                   <span className="label-text">Scale</span>
                   <h3>{data.scale}</h3>
                 </motion.div>
                 <motion.div variants={fadeInUp} className="rail-spec-item">
                   <span className="label-text">Completion</span>
                   <h3>{data.completion}</h3>
                 </motion.div>
                 <motion.div variants={fadeInUp} className="rail-spec-item">
                   <span className="label-text">Architect</span>
                   <h3>{data.architect}</h3>
                 </motion.div>
               </motion.div>
            </div>

            {/* Right Flow: Story & Pricing */}
            <div className="editorial-content">
               <motion.div className="editorial-pricing" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:1, ease: [0.16, 1, 0.3, 1]}}>
                  <p className="label-text">Starting Evaluation</p>
                  <h2 className="pricing-statement">{data.pricing}</h2>
               </motion.div>

               <motion.div className="editorial-narrative" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once:true, margin: "-100px"}}>
                  <motion.h3 variants={fadeInUp} className="heading-secondary" style={{marginBottom: '3rem'}}>The Vision</motion.h3>
                  <motion.p variants={fadeInUp} className="body-text-large" style={{marginBottom: '2rem'}}>{data.desc}</motion.p>
                  <motion.p variants={fadeInUp} className="body-text-large">{data.desc2}</motion.p>
               </motion.div>
            </div>

         </div>
      </section>

      {/* 3. INVISIBLE AMENITIES GRID */}
      <section className="section-padding">
         <div className="container">
           <div style={{marginBottom: '5rem', maxWidth: '600px'}}>
             <span className="subtitle">Curated Lifestyle</span>
             <h2 className="heading-secondary">Bespoke Amenities</h2>
           </div>
           
           <motion.div className="invisible-grid" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once:true, margin: "-100px"}}>
             {data.amenities.map((item, idx) => (
               <motion.div key={idx} variants={fadeInUp} className="invisible-card">
                 <div className="icon-wrap">{item.icon}</div>
                 <h4>{item.title}</h4>
               </motion.div>
             ))}
           </motion.div>
         </div>
      </section>

      {/* 4. FLOOR PLAN / MASTER PLAN */}
      <section className="section-padding" style={{paddingTop: '0'}}>
         <div className="container">
            <div style={{marginBottom: '5rem', maxWidth: '600px'}}>
              <span className="subtitle">The Architecture</span>
              <h2 className="heading-secondary">Master Floor Plan</h2>
            </div>
            <motion.div 
              className="floor-plan-container"
              initial={{opacity: 0, scale: 0.98}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{duration: 1.2, ease: [0.16, 1, 0.3, 1]}}
            >
               <img src={data.floorPlanImg} alt="Floor Plan" />
            </motion.div>
         </div>
      </section>

      {/* 5. PHOTO GALLERY */}
      <div style={{paddingTop: '6rem'}}>
        <Gallery />
      </div>
      
      {/* 6. CALL TO ACTION */}
      <section className="cto-statement-section">
         <div className="container" style={{textAlign: 'center'}}>
           <h2 className="heading-primary" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem'}}>Own the Extraordinary.</h2>
           <Link to="/contact" className="btn btn-solid" style={{textDecoration: 'none', padding: '1.2rem 3rem'}}>Request Private Viewing</Link>
         </div>
      </section>

    </motion.div>
  );
};

export default ProjectDetail;
