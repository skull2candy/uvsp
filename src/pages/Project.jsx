import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { pageVariants } from '../utils/animations';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
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
import './Pages.css';

const sharedAmenities = [
  { icon: <Car size={16} strokeWidth={1.5} />, title: 'CAR PARKING' },
  { icon: <Users size={16} strokeWidth={1.5} />, title: 'SOCIAL SPACE' },
  { icon: <ArrowUpToLine size={16} strokeWidth={1.5} />, title: 'ELEVATOR' },
  { icon: <ShieldCheck size={16} strokeWidth={1.5} />, title: '24X7 SECURITY' },
  { icon: <Waves size={16} strokeWidth={1.5} />, title: 'SWIMMING POOL' },
  { icon: <Zap size={16} strokeWidth={1.5} />, title: 'PARTIAL POWER BACKUP' },
  { icon: <Dumbbell size={16} strokeWidth={1.5} />, title: 'FITNESS ZONE' },
  { icon: <Layout size={16} strokeWidth={1.5} />, title: 'ELITE INTERIORS' },
  { icon: <Baby size={16} strokeWidth={1.5} />, title: 'KIDS ZONE' },
  { icon: <Fence size={16} strokeWidth={1.5} />, title: 'GATED SOCIETY' },
  { icon: <MapPin size={16} strokeWidth={1.5} />, title: 'METRO CONNECTIVITY 0KM' }
];

const Project = () => {
  // Parallax for The Crown
  const section1Ref = useRef(null);
  const { scrollYProgress: s1Progress } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(s1Progress, [0, 1], ["-10%", "10%"]);

  // Parallax for Ryhan Square
  const section2Ref = useRef(null);
  const { scrollYProgress: s2Progress } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"]
  });
  const y2 = useTransform(s2Progress, [0, 1], ["-10%", "10%"]);

  const textFadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const revealItem = {
    initial: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page-wrapper">
      <SEO 
        title="Bespoke Portfolio" 
        description="Explore our curated collection of luxury developments across South Delhi, from Vasant Kunj to Mehrauli." 
      />
      
      {/* THE CROWN */}
      <section ref={section1Ref} className="sticky-split-container">
          <div className="sticky-left">
            <motion.img 
              src="/the-crown-new.webp" 
              alt="The Crown" 
              className="sticky-image" 
              style={{ y: y1 }}
            />
            <div style={{position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10}}>
               <div className="status-badge badge-construction">
                  <span className="status-dot"></span> Under Construction
               </div>
            </div>
         </div>
         <div className="scroll-right section-padding">
            <motion.div {...textFadeIn} className="project-header">
               <h1 className="heading-primary" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>THE CROWN</h1>
               <span className="label-text" style={{marginTop:'1rem', display:'block'}}>Vasant Kunj, South Delhi</span>
            </motion.div>
            
            <motion.div {...textFadeIn} transition={{ delay: 0.2, duration: 1 }} className="project-body">
              <h2 className="heading-secondary">Royal Elegance.</h2>
              <p className="body-text-large">
                The Crown represents the pinnacle of regal architecture mixed with modern minimalism. We sourced the finest ivory marble to ensure that both the exterior facade and the inner sanctums resonate with a singular, quiet luxury.
              </p>
              <br/>
              <Link to="/property/the-crown" className="btn btn-solid" style={{textDecoration: 'none', display: 'inline-block'}}>View Full Details</Link>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="visible" viewport={{once:true}} className="project-spec-grid">
               <motion.div variants={revealItem} className="spec-entry">
                  <span className="label-text">Configuration</span>
                  <h4>3BHK Ultra-Luxury</h4>
               </motion.div>
               <motion.div variants={revealItem} className="spec-entry">
                  <span className="label-text">Investment Portfolio</span>
                  <div className="hidden-price-block">
                     <span className="price-masked">Price on Request</span>
                     <div className="price-shimmer-bar"></div>
                  </div>
               </motion.div>
               <motion.div variants={revealItem} className="spec-amenities">
                  <span className="label-text">Signature Amenities</span>
                  <motion.div variants={staggerContainer} className="amenity-tags">
                     {sharedAmenities.map((item, idx) => (
                       <motion.span key={idx} variants={revealItem} className="amenity-tag">
                         <span className="amenity-icon">{item.icon}</span>
                         {item.title}
                       </motion.span>
                     ))}
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* RYHAN SQUARE */}
      <section ref={section2Ref} className="sticky-split-container reverse" style={{backgroundColor: 'var(--surface-color)'}}>
         <div className="sticky-left">
            <motion.img 
              src="/ryhan-square-new.webp" 
              alt="Ryhan Square" 
              className="sticky-image" 
              style={{ y: y2 }}
            />
            <div style={{position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10}}>
               <div className="status-badge badge-ready">
                  <span className="status-dot"></span> Ready To Move In
               </div>
            </div>
         </div>
         <div className="scroll-right section-padding">
            <motion.div {...textFadeIn} className="project-header">
               <h1 className="heading-primary" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>RYHAN SQUARE</h1>
               <span className="label-text" style={{marginTop:'1rem', display:'block'}}>Vasant Kunj, South Delhi</span>
            </motion.div>
            
            <motion.div {...textFadeIn} transition={{ delay: 0.2, duration: 1 }} className="project-body">
              <h2 className="heading-secondary">Modern Serenity.</h2>
              <p className="body-text-large">
                Ryhan Square elegantly balances vast expanses of glass with robust concrete forms, blurring the lines between structural integrity and the surrounding lush environment.
              </p>
              <br/>
              <Link to="/property/ryhan-square" className="btn btn-solid" style={{textDecoration: 'none', display: 'inline-block'}}>View Full Details</Link>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="visible" viewport={{once:true}} className="project-spec-grid">
               <motion.div variants={revealItem} className="spec-entry">
                  <span className="label-text">Configuration</span>
                  <h4>3BHK Bespoke</h4>
               </motion.div>
               <motion.div variants={revealItem} className="spec-entry">
                  <span className="label-text">Investment Portfolio</span>
                  <div className="hidden-price-block">
                     <span className="price-masked">Price on Request</span>
                     <div className="price-shimmer-bar"></div>
                  </div>
               </motion.div>
               <motion.div variants={revealItem} className="spec-amenities">
                  <span className="label-text">Signature Amenities</span>
                  <motion.div variants={staggerContainer} className="amenity-tags">
                     {sharedAmenities.map((item, idx) => (
                       <motion.span key={idx} variants={revealItem} className="amenity-tag">
                         <span className="amenity-icon">{item.icon}</span>
                         {item.title}
                       </motion.span>
                     ))}
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </section>

    </motion.div>
  );
};

export default Project;
