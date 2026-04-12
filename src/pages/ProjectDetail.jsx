import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { pageVariants, fadeInUp, staggerContainer } from '../utils/animations';
import { useState } from 'react';
import { 
  Car, 
  Users, 
  ArrowUpToLine, 
  ShieldCheck, 
  Waves, 
  Zap, 
  Dumbbell, 
  Layout, 
  Baby, 
  Fence, 
  MapPin 
} from 'lucide-react';
import SEO from '../components/SEO';
import Gallery from '../components/Gallery';
import PriceUnlockModal from '../components/PriceUnlockModal';
import './Pages.css';

const sharedAmenities = [
  { icon: <Car size={24} strokeWidth={1} />, title: 'CAR PARKING' },
  { icon: <Users size={24} strokeWidth={1} />, title: 'SOCIAL SPACE' },
  { icon: <ArrowUpToLine size={24} strokeWidth={1} />, title: 'ELEVATOR' },
  { icon: <ShieldCheck size={24} strokeWidth={1} />, title: '24X7 SECURITY' },
  { icon: <Waves size={24} strokeWidth={1} />, title: 'SWIMMING POOL' },
  { icon: <Zap size={24} strokeWidth={1} />, title: 'PARTIAL POWER BACKUP' },
  { icon: <Dumbbell size={24} strokeWidth={1} />, title: 'FITNESS ZONE' },
  { icon: <Layout size={24} strokeWidth={1} />, title: 'ELITE INTERIORS' },
  { icon: <Baby size={24} strokeWidth={1} />, title: 'KIDS ZONE' },
  { icon: <Fence size={24} strokeWidth={1} />, title: 'GATED SOCIETY' },
  { icon: <MapPin size={24} strokeWidth={1} />, title: 'METRO CONNECTIVITY 0KM' }
];

const propertyData = {
  'the-crown': {
    title: 'THE CROWN',
    subtitle: 'South Delhi Luxury',
    hero: '/the-crown-new.png',
    location: 'Vasant Kunj, South Delhi',
    possession: 'Possession July 2027',
    pricing: '₹1.89Cr.',
    desc: 'UVSP presents The Crown, a landmark development redefined for the modern Indian lifestyle. We have meticulously crafted this project to balance timeless South Delhi prestige with contemporary architectural innovation. Every brick and every beam resonates with a commitment to superior Indian craftsmanship.',
    desc2: 'Designed with a focus on Vastu-compliant spaciousness and climate-responsive materials, The Crown is more than just a residence—it is a private sanctuary. Our vision was to create a home that feels both global in its finishing yet deeply rooted in the warmth and heritage of a premium Indian estate.',
    amenities: sharedAmenities,
    floorPlanImg: '/crown-floorplan.png',
    status: 'construction'
  },
  'ryhan-square': {
    title: 'RYHAN SQUARE',
    subtitle: 'Modern Serenity',
    hero: '/ryhan-square-new.png',
    location: 'Vasant Kunj, South Delhi',
    possession: 'Ready to Move In',
    pricing: '₹1.50Cr.',
    desc: 'Ryhan Square stands as a testament to the evolution of luxury by UVSP. Our approach for this South Delhi gem was to blend robust structural integrity with a sense of quiet tranquility. It is built to serve as a generational asset for families who value quality and modern Indian aesthetics.',
    desc2: 'From the moment you step into the double-height lobbies to the time you spend in your light-filled living quarters, you will feel the precision of Indian master-builders. We have prioritized local premium materials and intelligent spatial planning to deliver a home that is as functional as it is beautiful.',
    amenities: sharedAmenities,
    floorPlanImg: '/ryhan-floorplan.png',
    status: 'ready'
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const data = propertyData[id];
  const [isPriceRevealed, setIsPriceRevealed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

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
    initial: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper">
      <SEO title={data.title} description={data.desc} />
      
      {/* 1. HERO SECTION */}
      <section className="ultra-hero" style={{overflow: 'hidden'}}>
        <motion.div 
          className="ultra-hero-bg" 
          initial={{scale: 1.15}}
          animate={{scale: 1, y: y}}
          transition={{duration: 1.5, ease: [0.16, 1, 0.3, 1]}}
        >
          <img src={data.hero} alt={data.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </motion.div>
        <div className="ultra-hero-content container">
          <motion.div initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1]}}>
             <motion.span className="subtitle" style={{color: 'white', letterSpacing: '0.3em', display: 'block', marginBottom: '1rem'}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.8, duration: 1}}>
                {data.subtitle}
             </motion.span>
             
             {/* Staggered Cinematic Title */}
             <div style={{overflow: 'hidden', margin: '0'}}>
                <motion.h1 className="heading-primary" style={{color: 'white', fontSize: 'clamp(3rem, 8vw, 7rem)'}}
                  initial={{y: '100%'}} animate={{y: 0}} transition={{delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1]}}
                >
                  {data.title}
                </motion.h1>
             </div>
             
             <motion.div style={{marginTop: '3rem'}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.2, duration: 1}}>
               <div className={`status-badge ${data.status === 'construction' ? 'badge-construction' : 'badge-ready'}`} style={{position: 'relative'}}>
                 <span className="status-dot"></span> 
                 {data.status === 'construction' ? 'Under Construction' : 'Ready To Move In'}
               </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL SPEC GRID */}
      <section className="section-padding" style={{backgroundColor: 'var(--background-color)'}}>
         <div className="container editorial-split">
            
            {/* Left Flow: Specs */}
            <div className="editorial-specs">
                <motion.div variants={staggerContainer} initial="initial" whileInView="visible" viewport={{once:true, margin: "-100px"}}>
                  <motion.div variants={fadeInUp} className="spec-item" style={{marginBottom:'3rem'}}>
                    <span className="label-text">Location</span>
                    <h3>{data.location}</h3>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="spec-item">
                    <span className="label-text">{data.status === 'ready' ? 'Status' : 'Expectancy'}</span>
                    <h3>{data.possession}</h3>
                  </motion.div>
                </motion.div>
            </div>

            {/* Right Flow: Story & Pricing */}
            <div className="editorial-content">
                <motion.div className="editorial-pricing" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:1, ease: [0.16, 1, 0.3, 1]}}>
                   <p className="label-text">Investment Portfolio</p>
                   <div className="price-reveal-container">
                      <AnimatePresence mode="wait">
                        {!isPriceRevealed ? (
                          <motion.div 
                            key="masked"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="price-masked-detail"
                            style={{filter: 'blur(1px)'}}
                          >
                            ₹ 1.XX Cr.
                            <motion.button 
                              className="btn btn-unlock"
                              onClick={() => setIsModalOpen(true)}
                              style={{display: 'block', fontSize: '0.8rem', marginTop: '1rem', letterSpacing: '0.2em', padding: '0.8rem 1.5rem'}}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              UNLOCK PRICING
                            </motion.button>
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="revealed"
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            className="price-masked-detail"
                            style={{color: 'var(--accent-color)'}}
                          >
                            {data.pricing}
                          </motion.div>
                        )}
                      </AnimatePresence>
                   </div>
                </motion.div>

                <motion.div className="editorial-narrative" variants={staggerContainer} initial="initial" whileInView="visible" viewport={{once:true, margin: "-100px"}}>
                   <motion.h3 variants={fadeInUp} className="heading-secondary" style={{marginBottom: '3rem'}}>The Building</motion.h3>
                   <motion.p variants={fadeInUp} className="body-text-large" style={{marginBottom: '2rem'}}>{data.desc}</motion.p>
                   <motion.p variants={fadeInUp} className="body-text-large">{data.desc2}</motion.p>
                </motion.div>
            </div>

         </div>
      </section>

      {/* 3. INVISIBLE AMENITIES GRID */}
      <section className="section-padding">
         <div className="container">
            <div style={{marginBottom: '5rem', maxWidth: '600px', margin: '0 auto 5rem', textAlign: 'center'}}>
              <span className="subtitle" style={{letterSpacing: '0.3em', marginBottom: '1rem', display: 'block', color: 'var(--accent-color)'}}>Curated Lifestyle</span>
              <h2 className="heading-secondary" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>Bespoke Amenities</h2>
            </div>
            
            <motion.div className="invisible-grid" variants={staggerContainer} initial="initial" whileInView="visible" viewport={{once:true, margin: "-100px"}}>
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
      {id !== 'the-crown' && (
        <div style={{paddingTop: '6rem'}}>
          <Gallery />
        </div>
      )}
      
      {/* 6. KINETIC PARALLAX CALL TO ACTION */}
      <section className="cto-statement-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', backgroundImage: 'url(/cta-luxury-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', borderTop: 'none' }}>
         {/* Premium Dark Overlay */}
         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1 }} />
         
         <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', padding: '0 2rem' }}>
           <motion.div 
             className="glass-cto-card"
             initial={{ opacity: 0, scale: 0.95, y: 50 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             viewport={{ once: true, margin: "-10%" }}
           >
             <span className="subtitle" style={{color: 'var(--accent-color)', letterSpacing: '0.4em'}}>Beyond Architecture</span>
             <motion.h2 
               className="heading-primary" 
               style={{color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 5rem)', margin: '1.5rem 0 3rem', lineHeight: '1.1'}}
               initial={{letterSpacing: '0.5em'}}
               whileInView={{letterSpacing: '0.05em'}}
               viewport={{once: true}}
               transition={{duration: 1.5, ease: [0.16, 1, 0.3, 1]}}
             >
               Own the Extraordinary.
             </motion.h2>
             <Link to="/contact" className="btn-luxury-glowing" style={{textDecoration: 'none'}}>
                <span>Request Private Evaluation</span>
                <div className="glow-sweep"></div>
             </Link>
           </motion.div>
         </div>
      </section>

      <PriceUnlockModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        propertyName={data.title}
        onUnlock={() => setIsPriceRevealed(true)}
      />
    </motion.div>
  );
};

export default ProjectDetail;
